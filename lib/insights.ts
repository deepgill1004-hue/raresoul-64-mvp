import type { CoreDimension, DimensionPercent, RadarPoint, ScoringResult } from "@/lib/types";

const rarityPercentByLevel: Record<number, number> = {
  1: 26,
  2: 18,
  3: 11,
  4: 6,
  5: 3
};

export function getRarityPercent(level: number) {
  return rarityPercentByLevel[level] ?? 11;
}

export function getRarityPeopleText(level: number) {
  const percent = getRarityPercent(level);
  return `約 ${percent} / 100 人`;
}

export function getRarityExplanation(level: number, publicName?: string) {
  const percent = getRarityPercent(level);
  const name = publicName ? `${publicName} ` : "";

  if (percent <= 3) {
    return `${name}屬於非常少見的運作方式。意思不是比較高級，而是在 100 個人裡大約只有 ${percent} 個人會用類似節奏思考、恢復能量與做決策。你最需要的是懂你邏輯的人與能容納深度的環境。`;
  }

  if (percent <= 6) {
    return `${name}在人群裡偏少見。大約每 100 個人裡有 ${percent} 個人接近這種運作方式，所以你常會覺得自己能理解別人，但別人不一定能立刻理解你。`;
  }

  if (percent <= 12) {
    return `${name}有明顯辨識度。大約每 100 個人裡有 ${percent} 個人接近這種風格；你不是孤島，但確實需要挑環境，放對位置會很亮。`;
  }

  return `${name}是相對容易被理解的風格。大約每 100 個人裡有 ${percent} 個人接近這種運作方式；你的挑戰不是稀有，而是不要讓穩定變成被過度消耗。`;
}

export function getClarityLabel(intensity: number) {
  if (intensity >= 76) return "高度一致";
  if (intensity >= 64) return "主軸明顯";
  return "混合切換";
}

export function getIntensityExplanation(intensity: number) {
  if (intensity >= 76) {
    return `你的答案一致度是 ${intensity}%。代表四個核心傾向很集中，像指南針指向固定方向；你通常清楚知道自己要什麼，也比較不容易被環境帶走。`;
  }

  if (intensity >= 64) {
    return `你的答案一致度是 ${intensity}%。代表你有清楚主軸，但仍會依照對象、壓力和環境調整自己；你不是單一模式的人。`;
  }

  return `你的答案一致度是 ${intensity}%。代表你在不同場景會切換不同策略，容易同時有兩種需求：既想靠近也想保留空間，既想穩定也想保持彈性。`;
}

export function dominantSide(dimension: DimensionPercent) {
  return dimension.leftPercent >= dimension.rightPercent
    ? { name: dimension.left, percent: dimension.leftPercent }
    : { name: dimension.right, percent: dimension.rightPercent };
}

export function oppositeSide(dimension: DimensionPercent) {
  return dimension.leftPercent < dimension.rightPercent
    ? { name: dimension.left, percent: dimension.leftPercent }
    : { name: dimension.right, percent: dimension.rightPercent };
}

export function dimensionMeaning(key: CoreDimension, dimension: DimensionPercent) {
  const dominant = dominantSide(dimension);
  const copy: Record<CoreDimension, Record<string, string>> = {
    energy_orientation: {
      外放能量: "你比較容易被互動、討論和外部刺激點亮。當你卡住時，把想法說出來，常比獨自硬想更快找到方向。",
      內聚能量: "你需要安靜、獨處和內在整理。當外界太吵、訊息太多，你的判斷力會被消耗。"
    },
    information_style: {
      實感觀察: "你會先抓住現實條件、細節與已知證據。這讓你不容易被空泛想像帶走，也能讓事情落地。",
      趨勢直覺: "你會先看見模式、可能性與尚未成形的方向。這讓你能在變化前先感覺到風向。"
    },
    decision_core: {
      邏輯決策: "你做選擇時重視因果、效率與合理性。你不是沒有感情，而是需要先知道問題結構在哪。",
      情感價值: "你做選擇時重視價值、感受與關係影響。你很難忽略一個決定會不會傷害重要的人。"
    },
    life_rhythm: {
      結構節奏: "你在清楚安排與穩定節奏裡更容易發揮。混亂會讓你把力氣花在維持秩序，而不是創造結果。",
      流動節奏: "你需要彈性與探索空間。太早定死所有路線，反而會壓低你的生命感和創造力。"
    }
  };

  return copy[key][dominant.name] ?? `${dominant.name} 是你這次測驗較明顯的傾向。`;
}

export function getTopRadar(result: ScoringResult, count = 3) {
  return [...result.radar].sort((a, b) => b.score - a.score).slice(0, count);
}

export function getLowRadar(result: ScoringResult, count = 2) {
  return [...result.radar].sort((a, b) => a.score - b.score).slice(0, count);
}

export function getPersonalSummary(result: ScoringResult) {
  const dims = result.dimensions;
  const energy = dominantSide(dims.energy_orientation).name;
  const info = dominantSide(dims.information_style).name;
  const decision = dominantSide(dims.decision_core).name;
  const rhythm = dominantSide(dims.life_rhythm).name;
  const top = getTopRadar(result, 2).map((item) => `${item.subject} ${item.score}%`).join("、");

  return `這次答案顯示，你主要用「${energy}」恢復自己，用「${info}」理解世界，做決定時偏向「${decision}」，生活節奏更接近「${rhythm}」。最高的兩個訊號是 ${top}。`;
}

function getEnergyPlaybook(result: ScoringResult) {
  const energy = dominantSide(result.dimensions.energy_orientation).name;
  const rhythm = dominantSide(result.dimensions.life_rhythm).name;

  if (energy === "內聚能量" && rhythm === "結構節奏") {
    return "你的能量不是少，而是需要被保護。你適合先有安靜時段、清楚任務和可預期節奏，再進入人際或協作。最耗你的不是工作量，而是臨時插隊、模糊要求和長時間沒有邊界的互動。";
  }

  if (energy === "內聚能量" && rhythm === "流動節奏") {
    return "你需要獨處，但不適合被過度排程。你的最佳狀態通常出現在：有大方向、沒有過度打擾、能自由調整順序的環境。你不是拖延，而是需要先讓內在素材沉澱。";
  }

  if (energy === "外放能量" && rhythm === "結構節奏") {
    return "你會從互動中得能量，但不是越熱鬧越好。你需要有方向的討論、明確角色和能快速推進的團隊。最耗你的場景是大家一直聊，卻沒有決策和下一步。";
  }

  return "你靠互動、新鮮感和可能性被點亮。你適合短週期實驗、跨域合作和能快速得到回饋的場景。最耗你的不是忙，而是長期待在重複、封閉、沒有變化的流程裡。";
}

function getRelationshipPlaybook(result: ScoringResult) {
  const decision = dominantSide(result.dimensions.decision_core).name;
  const energy = dominantSide(result.dimensions.energy_orientation).name;
  const low = getLowRadar(result, 1)[0];

  if (decision === "情感價值") {
    return `你在關係裡最需要的是「我有被放在心上」。當對方只講道理、卻沒有回應感受時，你會很快退回防衛。你的關係功課不是變得不敏感，而是把感受翻成可被理解的請求。低分訊號 ${low.subject} ${low.score}% 提醒你：越在意時，越要把需求說具體。`;
  }

  return `你在關係裡需要清楚、可信和不被情緒拖著走。你可能不是不在乎，而是不想在混亂裡做錯判斷。因為你偏向 ${energy}，衝突時要特別說明「我退後是為了整理，不是要消失」。低分訊號 ${low.subject} ${low.score}% 是你最容易被誤解的地方。`;
}

function getCareerPlaybook(result: ScoringResult) {
  const info = dominantSide(result.dimensions.information_style).name;
  const top = getTopRadar(result, 3);
  const topText = top.map((item) => `${item.subject} ${item.score}%`).join("、");

  if (info === "趨勢直覺") {
    return `你的工作價值在於看見方向、整合混沌、提出新路線。你的高分組合是 ${topText}，這代表你不適合只做被切碎的執行任務。要發揮價值，你需要參與前期判斷、策略設計或跨部門整合。`;
  }

  return `你的工作價值在於把模糊任務變成可執行步驟。你的高分組合是 ${topText}，這代表你能讓事情穩下來，但也容易被放進收拾殘局的位置。你需要主動爭取決策前段，而不是只負責善後。`;
}

function getStressPlaybook(result: ScoringResult) {
  const low = getLowRadar(result, 2);
  const lowText = low.map((item) => `${item.subject} ${item.score}%`).join("、");
  return `你的壓力入口通常不是單一事件，而是低分訊號被連續踩到：${lowText}。壓力升高時，你要先恢復控制感，再處理關係或任務。最不適合你的修復方式，是一邊耗竭一邊逼自己立刻給答案。`;
}

export function getPremiumChapters(result: ScoringResult) {
  return [
    {
      title: "低耗能使用說明書",
      subtitle: "你不是要更努力，而是要知道怎麼用自己。",
      body: getEnergyPlaybook(result),
      bullets: [
        "把最重要的事放在你能量最穩的時段。",
        "先排除最耗能的干擾，再談效率。",
        "不要用別人的節奏評估自己的速度。"
      ]
    },
    {
      title: "關係需求翻譯",
      subtitle: "把你說不出口的需求，翻成對方聽得懂的句子。",
      body: getRelationshipPlaybook(result),
      bullets: [
        "衝突時先說明你現在需要靠近、空間、確認，還是時間。",
        "不要只丟出情緒或結論，要補上你真正害怕失去什麼。",
        "把「你都不懂」改成「我需要你先回應這一點」。"
      ]
    },
    {
      title: "職場槓桿分析",
      subtitle: "找出你真正值錢的位置，而不是只看適合職業。",
      body: getCareerPlaybook(result),
      bullets: [
        "你需要的是能放大高分訊號的職位設計。",
        "長期只做低分區任務，會讓你看起來普通且快速耗竭。",
        "評估工作時，要看主管是否理解你的輸出方式。"
      ]
    },
    {
      title: "壓力修復入口",
      subtitle: "先知道哪裡失血，再談怎麼補回來。",
      body: getStressPlaybook(result),
      bullets: [
        "先暫停輸出，確認自己是累、怕、委屈，還是失控。",
        "用一個可完成的小任務恢復控制感。",
        "狀態回來前，不做關係判決或人生大決定。"
      ]
    }
  ];
}

export function getPremiumDeepDive(result: ScoringResult) {
  const dims = result.dimensions;
  return (Object.entries(dims) as Array<[CoreDimension, DimensionPercent]>).map(([key, dimension]) => {
    const dominant = dominantSide(dimension);
    const opposite = oppositeSide(dimension);
    return {
      title: dimension.label,
      dominant,
      opposite,
      body: dimensionMeaning(key, dimension),
      tension: `你的主軸是「${dominant.name}」${dominant.percent}%，但另一端「${opposite.name}」仍有 ${opposite.percent}%。這代表你不是完全沒有另一面，而是壓力、親密關係或不同工作環境會把另一面拉出來。`,
      paidAngle: `重點不是把你歸到某一邊，而是看見兩端比例如何形成你的矛盾感、優勢位置和溝通成本。`
    };
  });
}

export function getRelationshipExtension(result: ScoringResult) {
  const energy = dominantSide(result.dimensions.energy_orientation).name;
  const decision = dominantSide(result.dimensions.decision_core).name;
  const rhythm = dominantSide(result.dimensions.life_rhythm).name;
  const low = getLowRadar(result, 1)[0];

  const safety =
    decision === "情感價值"
      ? "你需要先感覺自己被放在心上，才有餘裕討論道理。對方若只給結論、沒有回應你的感受，你會很快退到防衛位置。"
      : "你需要關係裡有清楚、可信、可驗證的溝通。對方若一直用情緒逼你表態，你會先想退開整理，而不是立刻靠近。";

  const conflict =
    energy === "內聚能量"
      ? "衝突發生時，你容易先安靜下來。這不代表你不在乎，而是需要把情緒與問題拆開。你要讓對方知道：我需要時間整理，不是要消失。"
      : "衝突發生時，你比較需要把話說出來，才知道自己真正卡在哪裡。你要小心的是，情緒一上來就連續輸出，讓對方只聽見壓力。";

  return [
    {
      title: "安全感來源",
      body: safety,
      action: `關係裡請先說：「我現在需要的是確認、空間，還是一起把問題講清楚。」`
    },
    {
      title: "衝突雷區",
      body: conflict,
      action: `你的低分訊號是「${low.subject} ${low.score}%」。越被踩到這裡，越要把需求說得具體。`
    },
    {
      title: "長期相處節奏",
      body: rhythm === "結構節奏"
        ? "你在關係裡需要可預期的承諾與穩定節奏。太多臨時變動會讓你懷疑自己是否被重視。"
        : "你在關係裡需要保有彈性與呼吸空間。太早被固定所有規則，會讓你覺得自己正在失去生命感。",
      action: "適合你的關係不是完全無摩擦，而是對方願意理解你的修復節奏。"
    }
  ];
}

export function getCareerExtension(result: ScoringResult) {
  const info = dominantSide(result.dimensions.information_style).name;
  const energy = dominantSide(result.dimensions.energy_orientation).name;
  const top = getTopRadar(result, 2).map((item) => `${item.subject} ${item.score}%`).join("、");
  const low = getLowRadar(result, 1)[0];

  return [
    {
      title: "高產出位置",
      body:
        info === "趨勢直覺"
          ? "你適合處理方向判斷、策略設計、產品概念、內容企劃或跨部門整合。你的價值在於比別人更早看見趨勢和可能性。"
          : "你適合處理流程落地、品質把關、資料整理、專案推進或營運管理。你的價值在於把混亂變成可執行的順序。",
      action: `目前最能放大你的訊號是：${top}。`
    },
    {
      title: "高消耗環境",
      body:
        energy === "內聚能量"
          ? "長時間即時回覆、頻繁會議、沒有安靜工作段，會快速消耗你的判斷力。你需要保留深度工作的空檔。"
          : "長期單獨作業、缺少回饋、沒有互動和舞台，會讓你的能量下降。你需要在工作中保留交流與回饋節點。",
      action: `最需要被保護的低分區是：${low.subject} ${low.score}%。`
    },
    {
      title: "合作策略",
      body: "你不需要把自己塞進所有職場期待，而是要讓別人知道你如何產出最好。說清楚你的決策節奏、需要的資訊量，以及什麼情況會讓你失準。",
      action: "面試、合作或接案時，可以直接問：這個角色是要我開路、整合、穩定，還是救火？"
    }
  ];
}

export function getThirtyDayPlan(result: ScoringResult) {
  const energy = dominantSide(result.dimensions.energy_orientation).name;
  const rhythm = dominantSide(result.dimensions.life_rhythm).name;
  return [
    {
      title: "第 1 週：找出耗能來源",
      body: `每天記錄一次讓你突然沒力的場景，標記它是人際、節奏、任務模糊，還是空間壓迫。你的基準組合是 ${energy} + ${rhythm}。`
    },
    {
      title: "第 2 週：建立低耗能工作法",
      body: "把最重要的任務放到你狀態最穩的時段，並把最容易拖延的任務切成 25 分鐘版本。"
    },
    {
      title: "第 3 週：練習需求翻譯",
      body: "選一段關係或合作，把「我不舒服」翻成「我需要更清楚的時間、界線、回應或選項」。"
    },
    {
      title: "第 4 週：調整棲地",
      body: "移除一個長期消耗你的場景，增加一個能放大你高分訊號的場景。重點不是變成別人，而是換到對的環境。"
    }
  ];
}

export function getCouplePitch(result: ScoringResult | null) {
  if (!result) {
    return "邀請對方完成測驗後，系統會比較兩人的情緒共鳴、安全感來源、生活節奏與衝突修復方式。";
  }

  const energy = dominantSide(result.dimensions.energy_orientation).name;
  const rhythm = dominantSide(result.dimensions.life_rhythm).name;
  return `你的結果顯示你偏向「${energy}」與「${rhythm}」。伴侶測驗不是問合不合，而是看對方的能量與節奏如何影響你們的安全感、衝突與長期互補。`;
}

export function getPreviewLockedItems() {
  return [
    "你的低耗能使用說明書",
    "關係需求翻譯與衝突句型",
    "職場槓桿與高消耗環境",
    "壓力修復入口",
    "四大維度比例深讀",
    "30 天調整計畫"
  ];
}

export function getRadarText(items: RadarPoint[]) {
  return items.map((item) => `${item.subject} ${item.score}%`).join("、");
}
