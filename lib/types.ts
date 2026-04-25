export type CoreDimension =
  | "energy_orientation"
  | "information_style"
  | "decision_core"
  | "life_rhythm";

export type QuestionModule =
  | "energy"
  | "information"
  | "decision"
  | "rhythm"
  | "stress"
  | "love"
  | "career"
  | "money"
  | "calibration";

export type Question = {
  id: string;
  text: string;
  module: QuestionModule;
  dimension:
    | CoreDimension
    | "emotional_stress"
    | "love_style"
    | "career_style"
    | "money_security"
    | "archetype_calibration";
  direction:
    | "outer"
    | "inner"
    | "sensing"
    | "intuitive"
    | "logic"
    | "value"
    | "structure"
    | "flow"
    | "sensitive"
    | "boundary"
    | "connection"
    | "freedom"
    | "execution"
    | "vision"
    | "security"
    | "risk"
    | "calm"
    | "spark";
  weight: number;
  reverse: boolean;
  scale: 5;
  active: boolean;
};

export type Archetype = {
  codeInternal: string;
  publicName: string;
  speciesGroup: string;
  rarityLevel: 1 | 2 | 3 | 4 | 5;
  coreSentence: string;
  outerImage: string;
  innerTruth: string;
  coreDesire: string;
  coreFear: string;
  gift: string;
  blindspot: string;
  stressBehavior: string;
  relationshipStyle: string;
  careerStyle: string;
  growthPath: string;
};

export type AnswerMap = Record<string, number>;

export type DimensionPercent = {
  label: string;
  left: string;
  right: string;
  leftPercent: number;
  rightPercent: number;
  dominant: string;
};

export type RadarPoint = {
  subject: string;
  score: number;
};

export type ScoringResult = {
  reportId: string;
  createdAt: string;
  internalCode: string;
  archetype: Archetype;
  dimensions: Record<CoreDimension, DimensionPercent>;
  radar: RadarPoint[];
  intensity: number;
  answers: AnswerMap;
  unlocked: boolean;
};
