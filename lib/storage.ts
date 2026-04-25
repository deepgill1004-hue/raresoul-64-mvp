import type { AnswerMap, ScoringResult } from "@/lib/types";

export const ANSWERS_KEY = "raresoul.answers";
export const RESULT_KEY = "raresoul.latestResult";

export function loadAnswers(): AnswerMap {
  if (typeof window === "undefined") return {};
  const raw = window.localStorage.getItem(ANSWERS_KEY);
  return raw ? (JSON.parse(raw) as AnswerMap) : {};
}

export function saveAnswers(answers: AnswerMap) {
  window.localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function loadResult(): ScoringResult | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(RESULT_KEY);
  return raw ? (JSON.parse(raw) as ScoringResult) : null;
}

export function saveResult(result: ScoringResult) {
  window.localStorage.setItem(RESULT_KEY, JSON.stringify(result));
}

export function clearQuizState() {
  window.localStorage.removeItem(ANSWERS_KEY);
}
