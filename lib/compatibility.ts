import { archetypeCatalog, archetypeCatalogByCode, type ArchetypeCatalogItem } from "@/lib/archetypeCatalog";

export type CompatibilityMetric = {
  key: string;
  title: string;
  score: number;
  level: "高共鳴" | "互補" | "需要磨合" | "高吸引高消耗";
  freeSummary: string;
  paidAnalysis: string;
};

export type CompatibilityReport = {
  a: ArchetypeCatalogItem;
  b: ArchetypeCatalogItem;
  headline: string;
  overallScore: number;
  relationshipArchetype: string;
  metrics: CompatibilityMetric[];
  repairScript: string;
  thirtyDayPractice: string[];
};

function scoreSame(a: string, b: string, sameScore: number, differentScore: number) {
  return a === b ? sameScore : differentScore;
}

function metricLevel(score: number, highCost = false): CompatibilityMetric["level"] {
  if (highCost) return "高吸引高消耗";
  if (score >= 78) return "高共鳴";
  if (score >= 62) return "互補";
  return "需要磨合";
}

function average(values: number[]) {
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

export function buildCompatibilityReport(codeA: string, codeB: string): CompatibilityReport {
  const a = archetypeCatalogByCode[codeA] ?? archetypeCatalog[7];
  const b = archetypeCatalogByCode[codeB] ?? archetypeCatalog[4];
  const da = a.dimensions;
  const db = b.dimensions;

  const emotionalScore = average([
    scoreSame(da.decision, db.decision, 86, 58),
    scoreSame(da.information, db.information, 78, 66),
    scoreSame(da.energy, db.energy, 74, 63)
  ]);
  const securityScore = average([
    scoreSame(da.energy, db.energy, 82, 54),
    scoreSame(da.rhythm, db.rhythm, 80, 56)
  ]);
  const conflictScore = average([
    scoreSame(da.decision, db.decision, 82, 52),
    scoreSame(da.rhythm, db.rhythm, 76, 58)
  ]);
  const expressionScore = average([
    scoreSame(da.decision, db.decision, 82, 55),
    scoreSame(da.energy, db.energy, 76, 60)
  ]);
  const rhythmScore = scoreSame(da.rhythm, db.rhythm, 84, 58);
  const complementScore = average([
    scoreSame(da.information, db.information, 56, 82),
    scoreSame(da.energy, db.energy, 62, 78),
    scoreSame(da.decision, db.decision, 58, 76)
  ]);
  const attractionCost = average([
    scoreSame(da.energy, db.energy, 36, 78),
    scoreSame(da.decision, db.decision, 34, 82),
    scoreSame(da.rhythm, db.rhythm, 35, 76)
  ]);

  const highCost = attractionCost >= 72;
  const metrics: CompatibilityMetric[] = [
    {
      key: "emotion",
      title: "情緒共鳴度",
      score: emotionalScore,
      level: metricLevel(emotionalScore),
      freeSummary: "看彼此是否容易讀懂對方情緒與在意點。",
      paidAnalysis:
        da.decision === db.decision
          ? "你們判斷感受與對錯的底層語言接近，吵架時比較容易知道對方在意什麼。"
          : "你們對情緒與問題的優先順序不同，一方可能想先被理解，另一方想先解決問題。"
    },
    {
      key: "security",
      title: "安全感來源",
      score: securityScore,
      level: metricLevel(securityScore),
      freeSummary: "看一方要陪伴、另一方要空間時是否容易互相誤讀。",
      paidAnalysis:
        da.energy === db.energy
          ? "你們恢復能量的方式接近，對距離和陪伴的需求比較不容易互相嚇到。"
          : "你們的安全感來源不同：一方可能用靠近確認關係，另一方可能用空間恢復穩定。"
    },
    {
      key: "conflict",
      title: "衝突修復力",
      score: conflictScore,
      level: metricLevel(conflictScore),
      freeSummary: "看吵架後誰想立刻談、誰想先冷靜，以及修復順序是否一致。",
      paidAnalysis:
        da.rhythm === db.rhythm
          ? "你們處理衝突的節奏較一致，修復重點在於把話說完整，而不是協調速度。"
          : "你們衝突時最容易卡在節奏：一方要結論，一方要彈性；一方想排清楚，一方想先呼吸。"
    },
    {
      key: "expression",
      title: "愛的表達落差",
      score: expressionScore,
      level: metricLevel(expressionScore),
      freeSummary: "看彼此表達愛的方式是否能被對方接收到。",
      paidAnalysis:
        da.decision === "value" || db.decision === "value"
          ? "這段關係需要具體回應感受。只做事但不說明心意，容易被解讀成冷淡。"
          : "這段關係需要可信行動與清楚承諾。過多情緒表演反而可能讓對方不安。"
    },
    {
      key: "rhythm",
      title: "生活節奏匹配",
      score: rhythmScore,
      level: metricLevel(rhythmScore),
      freeSummary: "看日常安排、旅行、金錢、同居與承諾節奏是否容易同頻。",
      paidAnalysis:
        da.rhythm === db.rhythm
          ? "你們對規劃或彈性的需求接近，生活磨合成本較低。"
          : "你們日常節奏不同，長期相處要先定義哪些事需要計畫，哪些事可以保留彈性。"
    },
    {
      key: "complement",
      title: "長期互補價值",
      score: complementScore,
      level: metricLevel(complementScore),
      freeSummary: "看彼此能不能補足盲點，而不是只追求相似。",
      paidAnalysis:
        complementScore >= 72
          ? "你們有明顯互補價值，但需要把差異翻成分工，不然優勢會變成互相嫌棄。"
          : "你們相似度較高，舒服感較強，但需要刻意引入外部視角，避免一起卡在同一個盲點。"
    },
    {
      key: "cost",
      title: "高吸引高消耗指數",
      score: attractionCost,
      level: metricLevel(attractionCost, highCost),
      freeSummary: "看火花是否來自差異，以及差異會不會在長期變成消耗。",
      paidAnalysis:
        highCost
          ? "你們的吸引可能很強，但也是最需要規則的組合。沒有修復協議時，火花很容易變成反覆拉扯。"
          : "你們的吸引較不靠劇烈差異驅動，關係穩定性較高，但要避免少了新鮮感。"
    }
  ];

  const overallScore = average([
    emotionalScore,
    securityScore,
    conflictScore,
    expressionScore,
    rhythmScore,
    complementScore,
    100 - Math.max(0, attractionCost - 50)
  ]);

  const relationshipArchetype =
    highCost && complementScore >= 70
      ? "高吸引高消耗互補型"
      : overallScore >= 76
        ? "高共鳴穩定型"
        : complementScore >= 72
          ? "差異互補成長型"
          : "需要協議磨合型";

  return {
    a,
    b,
    headline: `${a.name} × ${b.name}`,
    overallScore,
    relationshipArchetype,
    metrics,
    repairScript:
      "先說狀態，再說需求，最後才談解法。句型：我現在不是要否定你，我是需要先確認我們站在同一邊；我真正需要的是____，不是要你立刻變成____。",
    thirtyDayPractice: [
      "第 1 週：各自寫下吵架時最怕發生的事。",
      "第 2 週：約定衝突暫停詞，暫停後必須約定回來談的時間。",
      "第 3 週：交換一次安全感清單，列出三個會讓自己穩下來的行動。",
      "第 4 週：把差異變成分工，明確決定誰負責計畫、誰負責彈性調整。"
    ]
  };
}
