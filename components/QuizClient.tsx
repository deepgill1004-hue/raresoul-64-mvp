"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { questions } from "@/data/questions";
import { scaleLabels, scoreAnswers } from "@/lib/scoring";
import { clearQuizState, loadAnswers, saveAnswers, saveResult } from "@/lib/storage";
import type { AnswerMap } from "@/lib/types";

export function QuizClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [index, setIndex] = useState(0);
  const question = questions[index];
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  useEffect(() => {
    const savedAnswers = loadAnswers();
    setAnswers(savedAnswers);
    const firstUnansweredIndex = questions.findIndex((savedQuestion) => !savedAnswers[savedQuestion.id]);
    setIndex(firstUnansweredIndex === -1 ? questions.length - 1 : firstUnansweredIndex);
  }, []);

  useEffect(() => {
    saveAnswers(answers);
  }, [answers]);

  const currentValue = answers[question.id];
  const canFinish = answeredCount === questions.length;

  const chapter = useMemo(() => {
    if (index < 20) return "你的能量來源";
    if (index < 40) return "你看世界的方式";
    if (index < 60) return "你的決策核心";
    if (index < 84) return "你的關係與壓力模式";
    return "你的職場與物種校準";
  }, [index]);

  function selectAnswer(value: number) {
    setAnswers((current) => ({ ...current, [question.id]: value }));
  }

  function next() {
    if (index < questions.length - 1) {
      setIndex((current) => current + 1);
      return;
    }

    const result = scoreAnswers(answers);
    saveResult(result);
    clearQuizState();
    const mode = searchParams.get("mode");
    const owner = searchParams.get("owner");
    const invite = searchParams.get("invite");
    if (mode && owner) {
      const query = new URLSearchParams({ owner, invite: invite ?? "demo-invite" });
      router.push(`/match/${mode}/result?${query.toString()}`);
      return;
    }

    router.push("/result");
  }

  function reset() {
    setAnswers({});
    clearQuizState();
    setIndex(0);
  }

  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#eef4ef] text-[#17201c]">
      <div className="shell py-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-coral">{chapter}</p>
            <h1 className="mt-1 text-2xl font-semibold text-ink">RareSoul 深度測驗</h1>
          </div>
          <button
            type="button"
            onClick={reset}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 bg-white text-ink/70 hover:text-ink"
            aria-label="重新開始"
          >
            <RotateCcw size={18} />
          </button>
        </div>

        <div className="mb-6 overflow-hidden rounded-full bg-white">
          <div className="h-3 bg-coral transition-all" style={{ width: `${progress}%` }} />
        </div>

        <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm md:p-8">
          <div className="flex items-center justify-between gap-4 text-sm text-ink/60">
            <span>{question.id}</span>
            <span>
              {index + 1} / {questions.length}
            </span>
          </div>
          <h2 className="mt-5 text-2xl font-semibold leading-9 text-ink md:text-3xl md:leading-10">
            {question.text}
          </h2>

          <div className="mt-8 grid gap-3">
            {scaleLabels.map((label, answerIndex) => {
              const value = answerIndex + 1;
              const selected = currentValue === value;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => selectAnswer(value)}
                  className={`focus-ring flex min-h-14 items-center justify-between rounded-md border px-4 py-3 text-left transition ${
                    selected
                      ? "border-coral bg-[#fff4ef] text-[#17201c] shadow-sm"
                      : "border-[#17201c]/15 bg-white text-[#17201c] hover:border-[#17201c]/35 hover:bg-[#fbfdfb]"
                  }`}
                >
                  <span className="font-medium">{label}</span>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                      selected ? "bg-coral text-white" : "bg-[#eef4ef] text-[#17201c]"
                    }`}
                  >
                    {value}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              disabled={index === 0}
              onClick={() => setIndex((current) => Math.max(0, current - 1))}
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-4 py-3 font-semibold text-ink disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft size={18} />
              上一題
            </button>
            <button
              type="button"
              disabled={!currentValue || (index === questions.length - 1 && !canFinish)}
              onClick={next}
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-moss px-4 py-3 font-semibold text-white hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
            >
              {index === questions.length - 1 ? "生成圖鑑" : "下一題"}
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
