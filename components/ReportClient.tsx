"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, CreditCard, Heart, LockKeyhole, UnlockKeyhole } from "lucide-react";
import { DimensionBars } from "@/components/DimensionBars";
import { EmptyResult } from "@/components/EmptyResult";
import { RadarChartCard } from "@/components/RadarChartCard";
import {
  getCareerExtension,
  getPersonalSummary,
  getPremiumChapters,
  getPremiumDeepDive,
  getPreviewLockedItems,
  getRelationshipExtension,
  getThirtyDayPlan
} from "@/lib/insights";
import {
  getGlobalRarityText,
  getRareSoul64Code,
  getRareSoul64Name,
  getRareSoulSubtype,
  getRarityPaywallHook
} from "@/lib/rarity64";
import { loadResult, saveResult } from "@/lib/storage";
import type { ScoringResult } from "@/lib/types";

export function ReportClient() {
  const [result, setResult] = useState<ScoringResult | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setResult(loadResult());
    setMounted(true);
  }, []);

  function unlock() {
    if (!result) return;
    const updated = { ...result, unlocked: true };
    saveResult(updated);
    setResult(updated);
  }

  if (!mounted) return null;
  if (!result) return <EmptyResult />;

  const locked = !result.unlocked;
  const premiumChapters = getPremiumChapters(result);
  const deepDive = getPremiumDeepDive(result);
  const plan = getThirtyDayPlan(result);
  const subtype = getRareSoulSubtype(result);
  const relationshipExtension = getRelationshipExtension(result);
  const careerExtension = getCareerExtension(result);

  return (
    <main className="bg-mist">
      <section className="shell py-10">
        <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div>
              <p className="text-sm font-semibold text-coral">完整人格圖鑑</p>
              <h1 className="mt-2 text-4xl font-semibold text-ink">{getRareSoul64Name(result)}</h1>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-ink">
                {result.archetype.coreSentence} 你的細分類型代碼是 {getRareSoul64Code(result)}。
              </p>
              <p className="mt-4 max-w-4xl rounded-md bg-[#f7faf7] p-4 leading-8 text-ink">
                {getPersonalSummary(result)}
              </p>
            </div>
            <div className="rounded-md bg-[#f7faf7] p-4 text-left md:w-64">
              <p className="text-sm font-semibold text-ink">報告狀態</p>
              <p className="mt-2 flex items-center gap-2 font-semibold text-ink">
                {locked ? <LockKeyhole size={18} /> : <UnlockKeyhole size={18} />}
                {locked ? "尚未解鎖" : "已解鎖"}
              </p>
              <p className="mt-3 text-sm leading-6 text-ink">
                {getGlobalRarityText(result)} · {subtype.name}
              </p>
            </div>
          </div>
        </div>

        {locked ? (
          <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.7fr]">
            <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-ink">解鎖後不是更多形容詞，而是完整使用說明</h2>
              <p className="mt-3 leading-8 text-ink">
                {getRarityPaywallHook(result)}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {getPreviewLockedItems().map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-md bg-[#f7faf7] p-3 text-ink">
                    <CheckCircle2 className="text-leaf" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <aside className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-coral">MVP 付款模擬</p>
              <p className="mt-3 text-3xl font-semibold text-ink">NT$199</p>
              <p className="mt-3 leading-7 text-ink">
                解鎖後會展開你的能量使用、關係需求、職場槓桿、壓力修復與 30 天調整計畫。
              </p>
              <button
                type="button"
                onClick={unlock}
                className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-moss px-5 py-3 font-semibold text-white hover:bg-ink"
              >
                <CreditCard size={18} />
                解鎖完整報告
              </button>
            </aside>
          </section>
        ) : (
          <section className="mt-6 grid gap-6">
            <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">第一章：結果定位</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <section className="rounded-md bg-[#f7faf7] p-5">
                  <h3 className="font-semibold text-ink">全球稀有度：{getGlobalRarityText(result)}</h3>
                  <p className="mt-3 leading-7 text-ink">
                    這代表在一百個人之中，和你相同主物種與亞型的人大約會落在這個比例。稀有不是優越，而是提醒你：你的理解方式、恢復節奏和壓力入口，可能需要更精準的環境才會發揮。
                  </p>
                </section>
                <section className="rounded-md bg-[#f7faf7] p-5">
                  <h3 className="font-semibold text-ink">64 型亞型：{subtype.name} · {subtype.label}</h3>
                  <p className="mt-3 leading-7 text-ink">
                    {subtype.description} {subtype.unlockHook}
                  </p>
                </section>
              </div>
            </article>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-ink">8 維雷達</h2>
                <RadarChartCard data={result.radar} />
              </article>
              <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-ink">四大核心維度</h2>
                <div className="mt-5">
                  <DimensionBars result={result} />
                </div>
              </article>
            </div>

            <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">第二章：付費深度剖析</h2>
              <p className="mt-2 leading-7 text-ink">
                這一章會把分數翻成生活裡真的會發生的場景：你在哪裡耗能、怎麼被誤解、該如何說出需求，以及下一步怎麼調整。
              </p>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {premiumChapters.map((chapter) => (
                  <section key={chapter.title} className="rounded-md bg-[#f7faf7] p-5">
                    <p className="text-sm font-semibold text-coral">{chapter.subtitle}</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">{chapter.title}</h3>
                    <p className="mt-3 leading-8 text-ink">{chapter.body}</p>
                    <div className="mt-4 grid gap-2">
                      {chapter.bullets.map((bullet) => (
                        <p key={bullet} className="rounded-md bg-white px-3 py-2 text-sm leading-6 text-ink">
                          {bullet}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">第三章：四大維度比例深讀</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {deepDive.map((item) => (
                  <section key={item.title} className="rounded-md bg-[#f7faf7] p-5">
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 leading-7 text-ink">{item.body}</p>
                    <p className="mt-3 leading-7 text-ink">{item.tension}</p>
                    <p className="mt-3 rounded-md bg-white p-3 text-sm leading-6 text-ink">{item.paidAngle}</p>
                  </section>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">第四章：30 天調整計畫</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-4">
                {plan.map((item) => (
                  <section key={item.title} className="rounded-md bg-[#f7faf7] p-5">
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 leading-7 text-ink">{item.body}</p>
                  </section>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-md bg-[#f7faf7] p-5">
                  <Heart className="text-coral" size={22} />
                  <h2 className="mt-3 text-xl font-semibold text-ink">感情延伸</h2>
                  <p className="mt-3 leading-7 text-ink">{result.archetype.relationshipStyle}</p>
                  <div className="mt-5 grid gap-3">
                    {relationshipExtension.map((item) => (
                      <div key={item.title} className="rounded-md bg-white p-4">
                        <h3 className="font-semibold text-ink">{item.title}</h3>
                        <p className="mt-2 leading-7 text-ink">{item.body}</p>
                        <p className="mt-2 text-sm leading-6 text-coral">{item.action}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section className="rounded-md bg-[#f7faf7] p-5">
                  <CheckCircle2 className="text-leaf" size={22} />
                  <h2 className="mt-3 text-xl font-semibold text-ink">職場延伸</h2>
                  <p className="mt-3 leading-7 text-ink">{result.archetype.careerStyle}</p>
                  <div className="mt-5 grid gap-3">
                    {careerExtension.map((item) => (
                      <div key={item.title} className="rounded-md bg-white p-4">
                        <h3 className="font-semibold text-ink">{item.title}</h3>
                        <p className="mt-2 leading-7 text-ink">{item.body}</p>
                        <p className="mt-2 text-sm leading-6 text-leaf">{item.action}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/invite"
                  className="focus-ring inline-flex items-center justify-center rounded-md bg-moss px-5 py-3 font-semibold text-white hover:bg-ink"
                >
                  產生媒合邀請連結
                </Link>
                <Link
                  href="/quiz"
                  className="focus-ring inline-flex items-center justify-center rounded-md border border-ink/15 bg-white px-5 py-3 font-semibold text-ink hover:border-ink/35"
                >
                  重新測驗
                </Link>
              </div>
            </article>
          </section>
        )}

        <p className="mt-8 rounded-md border border-ink/10 bg-white p-4 text-xs leading-6 text-ink">
          RareSoul 64 是一套自有的人格原型與行為風格測驗，結果僅供自我理解、關係溝通與職場探索參考，不作為心理診斷、醫療、招募或人事決策依據。
        </p>
      </section>
    </main>
  );
}
