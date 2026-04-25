"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Share2 } from "lucide-react";
import { DimensionBars } from "@/components/DimensionBars";
import { EmptyResult } from "@/components/EmptyResult";
import { RadarChartCard } from "@/components/RadarChartCard";
import {
  getPersonalSummary,
  getPreviewLockedItems,
  getTopRadar
} from "@/lib/insights";
import {
  getGlobalRarityText,
  getRareSoul64Code,
  getRareSoul64Name,
  getRareSoulSubtype,
  getRarityPaywallHook
} from "@/lib/rarity64";
import { loadResult } from "@/lib/storage";
import type { ScoringResult } from "@/lib/types";

export function ResultClient() {
  const [result, setResult] = useState<ScoringResult | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setResult(loadResult());
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!result) return <EmptyResult />;

  const topRadar = getTopRadar(result, 3);
  const subtype = getRareSoulSubtype(result);

  return (
    <main className="bg-mist">
      <section className="shell py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-coral">你的稀有物種報告已生成</p>
            <h1 className="mt-3 text-4xl font-semibold text-ink">{getRareSoul64Name(result)}</h1>
            <p className="mt-2 text-ink">
              {result.archetype.speciesGroup} · RareSoul 64：{getRareSoul64Code(result)}
            </p>
            <p className="mt-6 text-xl leading-8 text-ink">{result.archetype.coreSentence}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-[#f7faf7] p-4">
                <p className="text-sm font-semibold text-ink">全球稀有度</p>
                <p className="mt-1 text-3xl font-semibold text-ink">
                  {getGlobalRarityText(result)}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink">
                  這個比例代表：在一百個人裡，和你同樣主物種與亞型的人大約有多少。
                </p>
              </div>
              <div className="rounded-md bg-[#f7faf7] p-4">
                <p className="text-sm font-semibold text-ink">64 型亞型</p>
                <p className="mt-1 text-3xl font-semibold text-ink">
                  {subtype.name} · {subtype.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink">
                  {subtype.description}
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">8 維人格雷達</h2>
            <RadarChartCard data={result.radar} />
          </article>
        </div>

        <article className="mt-6 rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">你的高分訊號正在說什麼？</h2>
          <p className="mt-3 leading-8 text-ink">{getPersonalSummary(result)}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {topRadar.map((item) => (
              <div key={item.subject} className="rounded-md bg-[#f7faf7] p-4">
                <p className="text-sm font-semibold text-ink">高分訊號</p>
                <p className="mt-1 text-lg font-semibold text-ink">
                  {item.subject} {item.score}%
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">免費預覽：核心維度</h2>
            <p className="mt-2 leading-7 text-ink">
              先看見你的四個核心傾向。完整報告會進一步拆解：哪些比例形成你的矛盾感、耗能點與關係模式。
            </p>
            <div className="mt-5">
              <DimensionBars result={result} />
            </div>
          </article>

          <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-coral/12 text-coral">
                <LockKeyhole size={20} />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-ink">完整報告會多解鎖什麼？</h2>
                <p className="mt-2 leading-7 text-ink">
                  {getRarityPaywallHook(result)}
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-2">
              {getPreviewLockedItems().map((item) => (
                <div key={item} className="rounded-md bg-[#f7faf7] px-4 py-3 text-ink">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              <Link
                href="/report"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-moss px-5 py-3 font-semibold text-white hover:bg-ink"
              >
                查看完整報告
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/invite"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 bg-white px-5 py-3 font-semibold text-ink hover:border-ink/35"
              >
                產生媒合邀請
                <Share2 size={18} />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
