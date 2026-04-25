import type { RadarPoint, ScoringResult } from "@/lib/types";

export type RareSoulSubtype = {
  code: "A" | "R" | "C" | "X";
  name: string;
  label: string;
  share: number;
  description: string;
  unlockHook: string;
};

export const globalTypeShare: Record<string, number> = {
  "INTJ-like": 2.1,
  "INTP-like": 3.3,
  "ENTJ-like": 1.8,
  "ENTP-like": 3.2,
  "INFJ-like": 1.5,
  "INFP-like": 4.4,
  "ENFJ-like": 2.5,
  "ENFP-like": 8.1,
  "ISTJ-like": 11.6,
  "ISFJ-like": 13.8,
  "ESTJ-like": 8.7,
  "ESFJ-like": 12.3,
  "ISTP-like": 5.4,
  "ISFP-like": 8.8,
  "ESTP-like": 4.3,
  "ESFP-like": 8.5
};

export const rareSoulSubtypes: RareSoulSubtype[] = [
  {
    code: "A",
    name: "核心原型",
    label: "A 型",
    share: 0.34,
    description: "四大核心維度很清楚，行為風格穩定，外界比較容易看出你的主軸。",
    unlockHook: "完整報告會拆解你的主軸如何在感情、職場與壓力下保持一致。"
  },
  {
    code: "R",
    name: "關係敏感",
    label: "R 型",
    share: 0.24,
    description: "關係、情緒與安全感訊號特別突出，你的狀態很容易被重要他人影響。",
    unlockHook: "完整報告會拆解你在伴侶、親子與合作關係中的觸發點。"
  },
  {
    code: "C",
    name: "成就校準",
    label: "C 型",
    share: 0.22,
    description: "職場、目標與執行訊號突出，你會把人格特質轉成任務、責任與成果。",
    unlockHook: "完整報告會拆解你的職場定位、合作雷區與高產出條件。"
  },
  {
    code: "X",
    name: "矛盾稀有",
    label: "X 型",
    share: 0.2,
    description: "核心維度混合度高，容易同時有兩套需求，因此比一般 16 型更需要細分判讀。",
    unlockHook: "完整報告會拆解你為什麼會自我矛盾，以及哪些情境會切換模式。"
  }
];

function sortRadar(result: ScoringResult): RadarPoint[] {
  return [...result.radar].sort((a, b) => b.score - a.score);
}

export function getRareSoulSubtype(result: ScoringResult): RareSoulSubtype {
  const topNames = sortRadar(result)
    .slice(0, 3)
    .map((item) => item.subject);

  if (result.intensity < 62) {
    return rareSoulSubtypes.find((item) => item.code === "X")!;
  }

  if (topNames.some((name) => ["情緒感知", "內在敏感", "自我邊界"].includes(name))) {
    return rareSoulSubtypes.find((item) => item.code === "R")!;
  }

  if (topNames.some((name) => ["執行穩定", "風險接受", "創造跳躍"].includes(name))) {
    return rareSoulSubtypes.find((item) => item.code === "C")!;
  }

  return rareSoulSubtypes[0];
}

export function getRareSoul64Code(result: ScoringResult) {
  return `${result.internalCode}-${getRareSoulSubtype(result).code}`;
}

export function getRareSoul64Name(result: ScoringResult) {
  const subtype = getRareSoulSubtype(result);
  return `${result.archetype.publicName}-${subtype.label}`;
}

export function getGlobalRarityPercent(result: ScoringResult) {
  const baseShare = globalTypeShare[result.internalCode] ?? 6.25;
  const subtype = getRareSoulSubtype(result);
  return Number((baseShare * subtype.share).toFixed(2));
}

export function getGlobalRarityText(result: ScoringResult) {
  const percent = getGlobalRarityPercent(result);
  if (percent < 1) return `僅佔全球人口約 ${percent}%`;
  return `約佔全球人口 ${percent}%`;
}

export function getRarityPaywallHook(result: ScoringResult) {
  const subtype = getRareSoulSubtype(result);
  return `你的 RareSoul 64 細分類型是 ${getRareSoul64Name(result)}，${getGlobalRarityText(
    result
  )}。這代表你不是只屬於某個主物種，還有更細的行為節奏與壓力入口。完整報告會揭開「${subtype.name}」在感情、職場與日常選擇裡的具體樣子。`;
}
