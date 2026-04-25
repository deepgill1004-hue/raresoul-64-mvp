"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { EmptyResult } from "@/components/EmptyResult";
import { buildCompatibilityReport } from "@/lib/compatibility";
import { getMatchMode } from "@/lib/matchModes";
import { loadResult } from "@/lib/storage";
import type { ScoringResult } from "@/lib/types";

export function MatchResultClient() {
  const params = useParams<{ mode: string }>();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<ScoringResult | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setResult(loadResult());
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!result) return <EmptyResult />;

  const mode = getMatchMode(params.mode);
  const ownerCode = searchParams.get("owner") ?? "ENFP-like";
  const report = buildCompatibilityReport(ownerCode, result.internalCode);

  return (
    <main className="bg-mist">
      <section className="shell py-10">
        <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold text-coral">{mode.reportTitle}</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink">{report.headline}</h1>
          <p className="mt-3 text-lg leading-8 text-ink/70">
            關係原型：{report.relationshipArchetype}，整體媒合度 {report.overallScore}%。
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {report.metrics.map((metric) => (
            <article key={metric.key} className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-ink">{metric.title}</h2>
                  <p className="mt-1 text-sm text-coral">{metric.level}</p>
                </div>
                <p className="text-3xl font-semibold text-ink">{metric.score}%</p>
              </div>
              <p className="mt-4 leading-7 text-ink/65">{metric.freeSummary}</p>
              <p className="mt-3 rounded-md bg-mist p-4 leading-7 text-ink/72">{metric.paidAnalysis}</p>
            </article>
          ))}
        </div>

        <article className="mt-6 rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">修復對話腳本</h2>
          <p className="mt-3 rounded-md bg-mist p-4 leading-8 text-ink/72">{report.repairScript}</p>
          <h2 className="mt-6 text-xl font-semibold text-ink">30 天跟進練習</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {report.thirtyDayPractice.map((practice) => (
              <p key={practice} className="rounded-md bg-mist p-4 leading-7 text-ink/70">
                {practice}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/invite"
              className="focus-ring inline-flex items-center justify-center rounded-md bg-moss px-5 py-3 font-semibold text-white hover:bg-ink"
            >
              再建立一個媒合
            </Link>
            <Link
              href="/report"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-ink/15 bg-white px-5 py-3 font-semibold text-ink hover:border-ink/35"
            >
              查看個人報告
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
