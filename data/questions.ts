import type { Question } from "@/lib/types";

type QuestionSeed = {
  module: Question["module"];
  dimension: Question["dimension"];
  direction: Question["direction"];
  text: string;
  weight?: number;
  reverse?: boolean;
};

const seeds: QuestionSeed[] = [
  // Energy source, 12
  { module: "energy", dimension: "energy_orientation", direction: "outer", text: "一場活動結束後，我通常還想繼續和人交流。" },
  { module: "energy", dimension: "energy_orientation", direction: "inner", text: "密集社交後，我需要獨處一段時間才會恢復狀態。" },
  { module: "energy", dimension: "energy_orientation", direction: "outer", text: "進入新環境時，我會自然觀察誰可以先聊起來。" },
  { module: "energy", dimension: "energy_orientation", direction: "inner", text: "面對陌生場合，我會先安靜觀察，再決定要不要加入。" },
  { module: "energy", dimension: "energy_orientation", direction: "outer", text: "和人討論想法時，我常越講越有能量。" },
  { module: "energy", dimension: "energy_orientation", direction: "inner", text: "我比較常在安靜整理後，才知道自己真正想說什麼。" },
  { module: "energy", dimension: "energy_orientation", direction: "outer", text: "臨時邀約對我來說常是生活裡有趣的插曲。" },
  { module: "energy", dimension: "energy_orientation", direction: "inner", text: "如果一天安排太滿，我會明顯感覺自己被消耗。" },
  { module: "energy", dimension: "energy_orientation", direction: "outer", text: "我容易透過聊天、分享或互動把情緒轉回來。" },
  { module: "energy", dimension: "energy_orientation", direction: "inner", text: "我需要保留一段不被打擾的時間，才會覺得生活有餘裕。" },
  { module: "energy", dimension: "energy_orientation", direction: "outer", text: "遇到有趣的人，我通常願意主動開啟話題。" },
  { module: "energy", dimension: "energy_orientation", direction: "inner", text: "比起熱鬧場面，我更享受少數幾個人的深度相處。" },

  // Information style, 14
  { module: "information", dimension: "information_style", direction: "sensing", text: "做判斷時，我會先確認目前有哪些具體資料。" },
  { module: "information", dimension: "information_style", direction: "intuitive", text: "我常從零散線索裡看見未來可能發生的方向。" },
  { module: "information", dimension: "information_style", direction: "sensing", text: "比起概念願景，我更想知道事情實際要怎麼執行。" },
  { module: "information", dimension: "information_style", direction: "intuitive", text: "我很容易被象徵、隱喻或深層意義吸引。" },
  { module: "information", dimension: "information_style", direction: "sensing", text: "我傾向相信親眼看過、親手做過或可驗證的經驗。" },
  { module: "information", dimension: "information_style", direction: "intuitive", text: "我常在別人還沒說完時，就先想到背後的模式。" },
  { module: "information", dimension: "information_style", direction: "sensing", text: "面對新任務，我會先把步驟、限制與資源列清楚。" },
  { module: "information", dimension: "information_style", direction: "intuitive", text: "我喜歡探索還沒有標準答案的問題。" },
  { module: "information", dimension: "information_style", direction: "sensing", text: "如果討論太抽象，我會想把它拉回現實條件。" },
  { module: "information", dimension: "information_style", direction: "intuitive", text: "我常把不同領域的想法連在一起，形成新的理解。" },
  { module: "information", dimension: "information_style", direction: "sensing", text: "我重視細節是否準確，因為小錯會影響整體結果。" },
  { module: "information", dimension: "information_style", direction: "intuitive", text: "我對趨勢、可能性和長期變化特別敏感。" },
  { module: "information", dimension: "information_style", direction: "sensing", text: "我比較喜歡清楚案例，而不是只聽大方向。" },
  { module: "information", dimension: "information_style", direction: "intuitive", text: "我常覺得眼前的事情只是更大故事的一部分。" },

  // Decision core, 14
  { module: "decision", dimension: "decision_core", direction: "logic", text: "做重要決定時，我會先拆解利弊與因果。" },
  { module: "decision", dimension: "decision_core", direction: "value", text: "做重要決定時，我會先確認它是否符合我的價值。" },
  { module: "decision", dimension: "decision_core", direction: "logic", text: "就算氣氛尷尬，我仍傾向把問題講清楚。" },
  { module: "decision", dimension: "decision_core", direction: "value", text: "我很難忽略一個選擇對人造成的感受影響。" },
  { module: "decision", dimension: "decision_core", direction: "logic", text: "如果一件事不合理，我會想指出它的矛盾。" },
  { module: "decision", dimension: "decision_core", direction: "value", text: "我會在意決策過程裡每個人是否被尊重。" },
  { module: "decision", dimension: "decision_core", direction: "logic", text: "我欣賞直接、有效率、能對事不對人的溝通。" },
  { module: "decision", dimension: "decision_core", direction: "value", text: "即使結果正確，如果方式傷人，我也會覺得不太對。" },
  { module: "decision", dimension: "decision_core", direction: "logic", text: "面對衝突時，我會想先找出問題結構。" },
  { module: "decision", dimension: "decision_core", direction: "value", text: "面對衝突時，我會先注意彼此是不是還有連結。" },
  { module: "decision", dimension: "decision_core", direction: "logic", text: "我比較不容易被情緒性的說法說服。" },
  { module: "decision", dimension: "decision_core", direction: "value", text: "如果一件事讓我違背良心，再有利益我也會猶豫。" },
  { module: "decision", dimension: "decision_core", direction: "logic", text: "我習慣用標準、證據或原則來判斷事情。" },
  { module: "decision", dimension: "decision_core", direction: "value", text: "我常能感覺到一個決定背後的人情重量。" },

  // Life rhythm, 12
  { module: "rhythm", dimension: "life_rhythm", direction: "structure", text: "我喜歡事先規劃，知道接下來會發生什麼。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "flow", text: "我比較喜歡保留彈性，讓事情自然展開。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "structure", text: "清楚的流程會讓我更安心、更有效率。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "flow", text: "太早把一切定死，會讓我覺得失去空間。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "structure", text: "我喜歡把待辦事項排出優先順序。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "flow", text: "我常依照當下狀態調整原本的計畫。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "structure", text: "完成承諾對我來說比臨時改變更重要。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "flow", text: "新的可能性出現時，我願意改變原本路線。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "structure", text: "環境有秩序時，我的心也比較穩。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "flow", text: "我不喜歡被過多規則限制探索方式。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "structure", text: "截止日期能幫我集中注意力完成事情。" },
  { module: "rhythm", dimension: "life_rhythm", direction: "flow", text: "我常在最後一刻因靈感出現而做得更好。" },

  // Stress, 14
  { module: "stress", dimension: "emotional_stress", direction: "sensitive", text: "別人的情緒變化常常會影響我的狀態。" },
  { module: "stress", dimension: "emotional_stress", direction: "boundary", text: "壓力來時，我會先切出界線處理眼前任務。" },
  { module: "stress", dimension: "emotional_stress", direction: "sensitive", text: "我很容易察覺關係裡沒有說出口的緊張。" },
  { module: "stress", dimension: "emotional_stress", direction: "boundary", text: "面對混亂時，我會把感受先放旁邊，找可控步驟。" },
  { module: "stress", dimension: "emotional_stress", direction: "sensitive", text: "如果氣氛變冷，我會反覆思考自己是不是做錯了什麼。" },
  { module: "stress", dimension: "emotional_stress", direction: "boundary", text: "我不太喜歡讓別人的情緒完全接管我的節奏。" },
  { module: "stress", dimension: "emotional_stress", direction: "sensitive", text: "聽見尖銳語氣時，我的身體會比理智更快有反應。" },
  { module: "stress", dimension: "emotional_stress", direction: "boundary", text: "我能在壓力場景裡暫時保持冷靜和距離。" },
  { module: "stress", dimension: "emotional_stress", direction: "sensitive", text: "我常接收到別人沒有明說的委屈或失落。" },
  { module: "stress", dimension: "emotional_stress", direction: "boundary", text: "當事情失控，我會先問自己現在能控制什麼。" },
  { module: "stress", dimension: "emotional_stress", direction: "sensitive", text: "我容易因為他人的期待而感到壓力。" },
  { module: "stress", dimension: "emotional_stress", direction: "boundary", text: "我需要明確界線，才不會被過多需求拉走。" },
  { module: "stress", dimension: "emotional_stress", direction: "sensitive", text: "我常比別人更早感覺到一段關係正在變化。" },
  { module: "stress", dimension: "emotional_stress", direction: "boundary", text: "我傾向用整理、分工或規則降低壓力。" },

  // Love, 14
  { module: "love", dimension: "love_style", direction: "connection", text: "感情裡，我需要清楚感受到彼此的靠近。" },
  { module: "love", dimension: "love_style", direction: "freedom", text: "感情裡，我很需要保有自己的空間與節奏。" },
  { module: "love", dimension: "love_style", direction: "connection", text: "對方主動回應我，會大幅增加我的安全感。" },
  { module: "love", dimension: "love_style", direction: "freedom", text: "太緊密的關係會讓我想退後呼吸。" },
  { module: "love", dimension: "love_style", direction: "connection", text: "我會透過分享日常來確認彼此還在同一邊。" },
  { module: "love", dimension: "love_style", direction: "freedom", text: "即使很喜歡一個人，我也不希望生活只剩下關係。" },
  { module: "love", dimension: "love_style", direction: "connection", text: "關係中的沉默或冷淡會讓我特別不安。" },
  { module: "love", dimension: "love_style", direction: "freedom", text: "我希望伴侶能尊重我突然想獨處的時刻。" },
  { module: "love", dimension: "love_style", direction: "connection", text: "我喜歡明確的承諾、陪伴與情感表達。" },
  { module: "love", dimension: "love_style", direction: "freedom", text: "比起固定模式，我更想要有彈性和新鮮感的相處。" },
  { module: "love", dimension: "love_style", direction: "connection", text: "我會記得對方的小細節，並期待對方也看見我。" },
  { module: "love", dimension: "love_style", direction: "freedom", text: "如果對方太常查問我的行程，我會覺得被壓迫。" },
  { module: "love", dimension: "love_style", direction: "connection", text: "我希望衝突後能好好說開，而不是各自假裝沒事。" },
  { module: "love", dimension: "love_style", direction: "freedom", text: "我需要一段關係能容納我的變化和探索。" },

  // Career, 14
  { module: "career", dimension: "career_style", direction: "execution", text: "在工作中，我擅長把事情穩定推進到完成。" },
  { module: "career", dimension: "career_style", direction: "vision", text: "在工作中，我擅長提出方向、概念與新可能。" },
  { module: "career", dimension: "career_style", direction: "execution", text: "明確目標與責任分工會讓我表現更好。" },
  { module: "career", dimension: "career_style", direction: "vision", text: "如果工作沒有願景，我很快會失去動力。" },
  { module: "career", dimension: "career_style", direction: "execution", text: "我能在重複流程中找出提高效率的方法。" },
  { module: "career", dimension: "career_style", direction: "vision", text: "我喜歡參與從零到一的企劃或創造。" },
  { module: "career", dimension: "career_style", direction: "execution", text: "我重視交付品質，不喜歡只停留在漂亮想法。" },
  { module: "career", dimension: "career_style", direction: "vision", text: "我常能看出一個專案未來可以延伸到哪裡。" },
  { module: "career", dimension: "career_style", direction: "execution", text: "如果團隊混亂，我會想建立規則和節奏。" },
  { module: "career", dimension: "career_style", direction: "vision", text: "我適合處理需要想像力、整合力或洞察力的任務。" },
  { module: "career", dimension: "career_style", direction: "execution", text: "我喜歡看見任務被一項一項完成的踏實感。" },
  { module: "career", dimension: "career_style", direction: "vision", text: "我不喜歡只照表操課，卻不知道意義在哪裡。" },
  { module: "career", dimension: "career_style", direction: "execution", text: "我能承擔明確責任，並把事情維持在穩定狀態。" },
  { module: "career", dimension: "career_style", direction: "vision", text: "我常比別人更早看出市場、內容或人心的轉向。" },

  // Money, 8
  { module: "money", dimension: "money_security", direction: "security", text: "金錢安排上，我重視安全感與可預期。" },
  { module: "money", dimension: "money_security", direction: "risk", text: "如果看見值得的機會，我願意承擔一些風險。" },
  { module: "money", dimension: "money_security", direction: "security", text: "我會因為存款或保障不足而感到焦慮。" },
  { module: "money", dimension: "money_security", direction: "risk", text: "我不喜歡錯過能讓人生打開的新選項。" },
  { module: "money", dimension: "money_security", direction: "security", text: "比起快速獲利，我更在意長期穩定。" },
  { module: "money", dimension: "money_security", direction: "risk", text: "我願意把資源投入在有成長潛力的事情上。" },
  { module: "money", dimension: "money_security", direction: "security", text: "我喜歡先確認底線，再談擴張和冒險。" },
  { module: "money", dimension: "money_security", direction: "risk", text: "如果一件事讓我強烈心動，我可能會先行動再微調。" },

  // Calibration, 6
  { module: "calibration", dimension: "archetype_calibration", direction: "calm", text: "重要時刻，我通常會先觀察，再選擇出手。" },
  { module: "calibration", dimension: "archetype_calibration", direction: "spark", text: "重要時刻，我常被靈感或衝勁推著前進。" },
  { module: "calibration", dimension: "archetype_calibration", direction: "calm", text: "比起被看見，我更在乎事情是否真的有品質。" },
  { module: "calibration", dimension: "archetype_calibration", direction: "spark", text: "我希望自己的存在能為現場帶來能量。" },
  { module: "calibration", dimension: "archetype_calibration", direction: "calm", text: "我常像觀察者一樣，先理解局勢再投入。" },
  { module: "calibration", dimension: "archetype_calibration", direction: "spark", text: "我喜歡讓一件事情因為我的加入而變得更有生命力。" }
];

export const questions: Question[] = seeds.map((seed, index) => ({
  id: `Q${String(index + 1).padStart(3, "0")}`,
  text: seed.text,
  module: seed.module,
  dimension: seed.dimension,
  direction: seed.direction,
  weight: seed.weight ?? (index % 13 === 0 ? 1.2 : 1),
  reverse: seed.reverse ?? false,
  scale: 5,
  active: true
}));
