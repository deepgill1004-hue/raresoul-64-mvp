import { archetypeByCode } from "@/data/archetypes";
import { questions } from "@/data/questions";
import type {
  AnswerMap,
  CoreDimension,
  DimensionPercent,
  Question,
  ScoringResult
} from "@/lib/types";

const coreDimensions: Record<
  CoreDimension,
  { label: string; left: Question["direction"]; right: Question["direction"]; leftName: string; rightName: string }
> = {
  energy_orientation: {
    label: "能量來源",
    left: "outer",
    right: "inner",
    leftName: "外放能量",
    rightName: "內聚能量"
  },
  information_style: {
    label: "看世界的方式",
    left: "sensing",
    right: "intuitive",
    leftName: "實感觀察",
    rightName: "趨勢直覺"
  },
  decision_core: {
    label: "決策核心",
    left: "logic",
    right: "value",
    leftName: "邏輯決策",
    rightName: "情感價值"
  },
  life_rhythm: {
    label: "生活節奏",
    left: "structure",
    right: "flow",
    leftName: "結構節奏",
    rightName: "流動節奏"
  }
};

const codeMap: Record<string, string> = {
  inner_intuitive_logic_structure: "INTJ-like",
  inner_intuitive_logic_flow: "INTP-like",
  outer_intuitive_logic_structure: "ENTJ-like",
  outer_intuitive_logic_flow: "ENTP-like",
  inner_intuitive_value_structure: "INFJ-like",
  inner_intuitive_value_flow: "INFP-like",
  outer_intuitive_value_structure: "ENFJ-like",
  outer_intuitive_value_flow: "ENFP-like",
  inner_sensing_logic_structure: "ISTJ-like",
  inner_sensing_value_structure: "ISFJ-like",
  outer_sensing_logic_structure: "ESTJ-like",
  outer_sensing_value_structure: "ESFJ-like",
  inner_sensing_logic_flow: "ISTP-like",
  inner_sensing_value_flow: "ISFP-like",
  outer_sensing_logic_flow: "ESTP-like",
  outer_sensing_value_flow: "ESFP-like"
};

type SideScores = Record<string, { total: number; max: number }>;

function addScore(scores: SideScores, key: string, value: number, max: number) {
  scores[key] ??= { total: 0, max: 0 };
  scores[key].total += value;
  scores[key].max += max;
}

function percent(total: number, max: number) {
  if (!max) return 50;
  return Math.round((total / max) * 100);
}

function average(values: number[]) {
  if (!values.length) return 50;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

export function scoreAnswers(answers: AnswerMap): ScoringResult {
  const sideScores: SideScores = {};

  for (const question of questions) {
    const rawAnswer = answers[question.id];
    if (!rawAnswer) continue;

    const answer = question.reverse ? 6 - rawAnswer : rawAnswer;
    const weighted = answer * question.weight;
    const max = question.scale * question.weight;
    addScore(sideScores, question.direction, weighted, max);
  }

  const dimensions = Object.fromEntries(
    Object.entries(coreDimensions).map(([dimensionKey, config]) => {
      const leftScore = sideScores[config.left] ?? { total: 0, max: 0 };
      const rightScore = sideScores[config.right] ?? { total: 0, max: 0 };
      const leftRaw = leftScore.total;
      const rightRaw = rightScore.total;
      const total = leftRaw + rightRaw;
      const leftPercent = total ? Math.round((leftRaw / total) * 100) : 50;
      const rightPercent = 100 - leftPercent;

      return [
        dimensionKey,
        {
          label: config.label,
          left: config.leftName,
          right: config.rightName,
          leftPercent,
          rightPercent,
          dominant: leftPercent >= rightPercent ? config.left : config.right
        } satisfies DimensionPercent
      ];
    })
  ) as Record<CoreDimension, DimensionPercent>;

  const codeKey = [
    dimensions.energy_orientation.dominant,
    dimensions.information_style.dominant,
    dimensions.decision_core.dominant,
    dimensions.life_rhythm.dominant
  ].join("_");

  const internalCode = codeMap[codeKey] ?? "ENFP-like";
  const archetype = archetypeByCode[internalCode] ?? archetypeByCode["ENFP-like"];
  const dominantPercents = Object.values(dimensions).map((dimension) =>
    Math.max(dimension.leftPercent, dimension.rightPercent)
  );

  const radar = [
    { subject: "社交能量", score: percent(sideScores.outer?.total ?? 0, sideScores.outer?.max ?? 0) },
    {
      subject: "內在敏感",
      score: average([
        percent(sideScores.inner?.total ?? 0, sideScores.inner?.max ?? 0),
        percent(sideScores.sensitive?.total ?? 0, sideScores.sensitive?.max ?? 0)
      ])
    },
    { subject: "創造跳躍", score: percent(sideScores.intuitive?.total ?? 0, sideScores.intuitive?.max ?? 0) },
    {
      subject: "情緒感知",
      score: average([
        percent(sideScores.value?.total ?? 0, sideScores.value?.max ?? 0),
        percent(sideScores.connection?.total ?? 0, sideScores.connection?.max ?? 0)
      ])
    },
    {
      subject: "執行穩定",
      score: average([
        percent(sideScores.structure?.total ?? 0, sideScores.structure?.max ?? 0),
        percent(sideScores.execution?.total ?? 0, sideScores.execution?.max ?? 0)
      ])
    },
    {
      subject: "自由需求",
      score: average([
        percent(sideScores.flow?.total ?? 0, sideScores.flow?.max ?? 0),
        percent(sideScores.freedom?.total ?? 0, sideScores.freedom?.max ?? 0)
      ])
    },
    { subject: "風險接受", score: percent(sideScores.risk?.total ?? 0, sideScores.risk?.max ?? 0) },
    { subject: "自我邊界", score: percent(sideScores.boundary?.total ?? 0, sideScores.boundary?.max ?? 0) }
  ];

  return {
    reportId: `local-${Date.now()}`,
    createdAt: new Date().toISOString(),
    internalCode,
    archetype,
    dimensions,
    radar,
    intensity: average(dominantPercents),
    answers,
    unlocked: false
  };
}

export const scaleLabels = ["非常不像我", "有點不像我", "不確定", "有點像我", "非常像我"];
