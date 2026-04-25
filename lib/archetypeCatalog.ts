export type ArchetypeCatalogItem = {
  code: string;
  name: string;
  group: string;
  rarityPercent: number;
  rarityLabel: string;
  dimensions: {
    energy: "outer" | "inner";
    information: "sensing" | "intuitive";
    decision: "logic" | "value";
    rhythm: "structure" | "flow";
  };
  judgmentStandard: string;
};

export const archetypeCatalog: ArchetypeCatalogItem[] = [
  {
    code: "INTJ-like",
    name: "黑曜鷹型",
    group: "策略獵手族",
    rarityPercent: 3,
    rarityLabel: "極少見",
    dimensions: { energy: "inner", information: "intuitive", decision: "logic", rhythm: "structure" },
    judgmentStandard: "內聚能量、趨勢直覺、邏輯決策、結構節奏都明顯時成立。核心判斷是：先抽離觀察，再用長期策略與系統化方式掌控局面。"
  },
  {
    code: "INTP-like",
    name: "夜行貓頭鷹型",
    group: "知識觀察族",
    rarityPercent: 6,
    rarityLabel: "少見",
    dimensions: { energy: "inner", information: "intuitive", decision: "logic", rhythm: "flow" },
    judgmentStandard: "內聚能量、趨勢直覺、邏輯決策、流動節奏明顯時成立。核心判斷是：重視理解原理與保持思想自由，行動節奏較不受外部規則固定。"
  },
  {
    code: "ENTJ-like",
    name: "獅王統御型",
    group: "權力領航族",
    rarityPercent: 3,
    rarityLabel: "極少見",
    dimensions: { energy: "outer", information: "intuitive", decision: "logic", rhythm: "structure" },
    judgmentStandard: "外放能量、趨勢直覺、邏輯決策、結構節奏明顯時成立。核心判斷是：能看方向、定目標、整合資源，並快速推動人與系統往結果前進。"
  },
  {
    code: "ENTP-like",
    name: "銀狐破局型",
    group: "創新破局族",
    rarityPercent: 6,
    rarityLabel: "少見",
    dimensions: { energy: "outer", information: "intuitive", decision: "logic", rhythm: "flow" },
    judgmentStandard: "外放能量、趨勢直覺、邏輯決策、流動節奏明顯時成立。核心判斷是：靠辯證、創意與拆規則找到破口，對重複和僵化高度敏感。"
  },
  {
    code: "INFJ-like",
    name: "白鹿先知型",
    group: "深層洞察族",
    rarityPercent: 3,
    rarityLabel: "極少見",
    dimensions: { energy: "inner", information: "intuitive", decision: "value", rhythm: "structure" },
    judgmentStandard: "內聚能量、趨勢直覺、情感價值、結構節奏明顯時成立。核心判斷是：以深層洞察與使命感理解人，並需要把理想落成穩定方向。"
  },
  {
    code: "INFP-like",
    name: "月光水母型",
    group: "靈魂價值族",
    rarityPercent: 6,
    rarityLabel: "少見",
    dimensions: { energy: "inner", information: "intuitive", decision: "value", rhythm: "flow" },
    judgmentStandard: "內聚能量、趨勢直覺、情感價值、流動節奏明顯時成立。核心判斷是：重視真實感、想像力與內在價值，不願用粗糙標準犧牲自己。"
  },
  {
    code: "ENFJ-like",
    name: "赤羽鳳凰型",
    group: "關係領航族",
    rarityPercent: 6,
    rarityLabel: "少見",
    dimensions: { energy: "outer", information: "intuitive", decision: "value", rhythm: "structure" },
    judgmentStandard: "外放能量、趨勢直覺、情感價值、結構節奏明顯時成立。核心判斷是：能讀懂人的潛力與群體方向，並主動帶領關係與團隊前進。"
  },
  {
    code: "ENFP-like",
    name: "霧海海豚型",
    group: "流動共感族",
    rarityPercent: 11,
    rarityLabel: "有辨識度",
    dimensions: { energy: "outer", information: "intuitive", decision: "value", rhythm: "flow" },
    judgmentStandard: "外放能量、趨勢直覺、情感價值、流動節奏明顯時成立。核心判斷是：靠靈感、連結和可能性被點亮，需要自由與真誠回應。"
  },
  {
    code: "ISTJ-like",
    name: "雪原豹型",
    group: "秩序守成族",
    rarityPercent: 18,
    rarityLabel: "較常見",
    dimensions: { energy: "inner", information: "sensing", decision: "logic", rhythm: "structure" },
    judgmentStandard: "內聚能量、實感觀察、邏輯決策、結構節奏明顯時成立。核心判斷是：重視責任、事實、秩序與長期穩定。"
  },
  {
    code: "ISFJ-like",
    name: "森鹿守護型",
    group: "溫柔守護族",
    rarityPercent: 26,
    rarityLabel: "常見",
    dimensions: { energy: "inner", information: "sensing", decision: "value", rhythm: "structure" },
    judgmentStandard: "內聚能量、實感觀察、情感價值、結構節奏明顯時成立。核心判斷是：用細節、責任與穩定照顧重要的人與日常。"
  },
  {
    code: "ESTJ-like",
    name: "鐵脊狼王型",
    group: "結構管理族",
    rarityPercent: 18,
    rarityLabel: "較常見",
    dimensions: { energy: "outer", information: "sensing", decision: "logic", rhythm: "structure" },
    judgmentStandard: "外放能量、實感觀察、邏輯決策、結構節奏明顯時成立。核心判斷是：擅長建立規則、分工與執行秩序。"
  },
  {
    code: "ESFJ-like",
    name: "暖象凝聚型",
    group: "群體照護族",
    rarityPercent: 26,
    rarityLabel: "常見",
    dimensions: { energy: "outer", information: "sensing", decision: "value", rhythm: "structure" },
    judgmentStandard: "外放能量、實感觀察、情感價值、結構節奏明顯時成立。核心判斷是：透過照顧、禮貌、儀式與實際支持凝聚關係。"
  },
  {
    code: "ISTP-like",
    name: "黑貓工匠型",
    group: "冷靜實作族",
    rarityPercent: 11,
    rarityLabel: "有辨識度",
    dimensions: { energy: "inner", information: "sensing", decision: "logic", rhythm: "flow" },
    judgmentStandard: "內聚能量、實感觀察、邏輯決策、流動節奏明顯時成立。核心判斷是：相信現場證據、工具掌握與自主解題。"
  },
  {
    code: "ISFP-like",
    name: "水豚藝術型",
    group: "感官和平族",
    rarityPercent: 18,
    rarityLabel: "較常見",
    dimensions: { energy: "inner", information: "sensing", decision: "value", rhythm: "flow" },
    judgmentStandard: "內聚能量、實感觀察、情感價值、流動節奏明顯時成立。核心判斷是：重視感受、美感、自由與低壓相處。"
  },
  {
    code: "ESTP-like",
    name: "疾風花豹型",
    group: "現場行動族",
    rarityPercent: 11,
    rarityLabel: "有辨識度",
    dimensions: { energy: "outer", information: "sensing", decision: "logic", rhythm: "flow" },
    judgmentStandard: "外放能量、實感觀察、邏輯決策、流動節奏明顯時成立。核心判斷是：在現場快速反應、捕捉機會、用行動打開局面。"
  },
  {
    code: "ESFP-like",
    name: "金羽孔雀型",
    group: "生命表現族",
    rarityPercent: 18,
    rarityLabel: "較常見",
    dimensions: { energy: "outer", information: "sensing", decision: "value", rhythm: "flow" },
    judgmentStandard: "外放能量、實感觀察、情感價值、流動節奏明顯時成立。核心判斷是：用魅力、體驗、當下感與表達力帶動現場。"
  }
];

export const archetypeCatalogByCode = Object.fromEntries(
  archetypeCatalog.map((item) => [item.code, item])
) as Record<string, ArchetypeCatalogItem>;
