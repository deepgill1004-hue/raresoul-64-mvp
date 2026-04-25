export type MatchMode = "couple" | "family" | "workplace";

export type MatchModeConfig = {
  id: MatchMode;
  label: string;
  title: string;
  description: string;
  inviteTitle: string;
  inviteMessage: string;
  reportTitle: string;
  dimensions: string[];
};

export const matchModes: MatchModeConfig[] = [
  {
    id: "couple",
    label: "伴侶媒合",
    title: "伴侶關係測試",
    description: "看兩個人在安全感、情緒表達、衝突修復與生活節奏上的互相影響。",
    inviteTitle: "想知道你們是靈魂共鳴，還是高吸引高消耗？",
    inviteMessage:
      "我剛做完 RareSoul 64，想邀請你也做一次。這不是判斷合不合，而是看我們在安全感、衝突修復、生活節奏上怎麼互相影響。",
    reportTitle: "伴侶關係媒合報告",
    dimensions: ["情緒共鳴", "安全感落差", "衝突修復", "表達方式", "生活節奏", "吸引與消耗", "長期互補"]
  },
  {
    id: "family",
    label: "親子媒合",
    title: "親子互動測試",
    description: "看親子之間的需求、界線、溝通節奏與壓力反應差異。",
    inviteTitle: "想知道你們卡住的不是愛，而是哪一種節奏差？",
    inviteMessage:
      "我想邀請你做 RareSoul 64 親子版。它不是要判斷誰對誰錯，而是看我們的節奏、需求和表達方式差在哪裡。",
    reportTitle: "親子互動媒合報告",
    dimensions: ["安全感需求", "界線與控制", "溝通翻譯", "壓力反應", "照顧方式", "自主需求", "修復入口"]
  },
  {
    id: "workplace",
    label: "職場媒合",
    title: "職場合作測試",
    description: "看同事、主管或夥伴之間的決策、溝通、執行節奏與合作雷區。",
    inviteTitle: "想知道你們適合搭檔、分工，還是需要先訂規則？",
    inviteMessage:
      "我想邀請你做 RareSoul 64 職場合作版。它會看我們的決策、溝通、執行節奏和合作雷區，不是拿來做人事評分。",
    reportTitle: "職場合作媒合報告",
    dimensions: ["決策速度", "溝通密度", "執行節奏", "責任邊界", "衝突處理", "合作槓桿", "30 天協作建議"]
  }
];

export const matchModeById = Object.fromEntries(matchModes.map((mode) => [mode.id, mode])) as Record<
  MatchMode,
  MatchModeConfig
>;

export function getMatchMode(mode?: string | null) {
  if (mode === "family" || mode === "workplace" || mode === "couple") {
    return matchModeById[mode];
  }

  return matchModeById.couple;
}
