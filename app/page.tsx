import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Sparkles } from "lucide-react";

const heroNightOwlImage = "/assets/home/hero-night-owl.png";

type AnimalType = {
  code: string;
  name: string;
  family: string;
  rarity: number;
  image: string;
  accent: string;
  pool: string;
  line: string;
  signal: string;
};

type Pool = {
  title: string;
  subtitle: string;
  animals: AnimalType[];
};

const animals: AnimalType[] = [
  {
    code: "INTJ",
    name: "黑曜鷹型",
    family: "策略獵手族",
    rarity: 2.1,
    image: "/assets/home/cards/black-eagle.png",
    accent: "#9c7cff",
    pool: "夜色主角卡池",
    line: "你不是冷淡，是太早看見整盤棋。",
    signal: "擅長在混亂裡抓出關鍵路線，討厭被情緒噪音拖慢。"
  },
  {
    code: "INTP",
    name: "夜行貓頭鷹型",
    family: "知識觀察族",
    rarity: 3.3,
    image: "/assets/home/cards/night-owl.png",
    accent: "#38bdf8",
    pool: "夜色主角卡池",
    line: "你不是不合群，是腦內一直有座正在運轉的觀察塔。",
    signal: "會反覆拆解問題，直到找到真正說得通的答案。"
  },
  {
    code: "ENTJ",
    name: "獅王統御型",
    family: "權力領航族",
    rarity: 1.8,
    image: "/assets/home/cards/lion.png",
    accent: "#f59e0b",
    pool: "夜色主角卡池",
    line: "你不是想控制所有人，是天生會看見方向與槓桿。",
    signal: "一旦確定目標，就會自然把資源、節奏和人力排成隊形。"
  },
  {
    code: "ENTP",
    name: "銀狐破局型",
    family: "創新破局族",
    rarity: 3.2,
    image: "/assets/home/cards/silver-fox.png",
    accent: "#34d399",
    pool: "夜色主角卡池",
    line: "你不是故意唱反調，是總能看到另一條路。",
    signal: "喜歡測試規則邊界，越僵硬的答案越容易激起你的好奇。"
  },
  {
    code: "INFJ",
    name: "白鹿先知型",
    family: "深層洞察族",
    rarity: 1.5,
    image: "/assets/home/cards/white-deer.png",
    accent: "#c4a3ff",
    pool: "靈感先知卡池",
    line: "你不是敏感過頭，是能聽見別人還沒說出口的訊號。",
    signal: "會在關係與選擇背後尋找更深的意義。"
  },
  {
    code: "INFP",
    name: "月光水母型",
    family: "靈魂價值族",
    rarity: 4.4,
    image: "/assets/home/cards/moon-jellyfish.png",
    accent: "#7dd3fc",
    pool: "靈感先知卡池",
    line: "你不是脆弱，是內在有一片需要被好好保護的海。",
    signal: "很在意真誠、自由與感受是否被尊重。"
  },
  {
    code: "ENFJ",
    name: "赤羽鳳凰型",
    family: "關係領航族",
    rarity: 2.5,
    image: "/assets/home/cards/phoenix.png",
    accent: "#fb7185",
    pool: "靈感先知卡池",
    line: "你很會照亮別人，也容易把期待扛在自己身上。",
    signal: "能把人心聚在一起，但需要學會不替所有人燃燒。"
  },
  {
    code: "ENFP",
    name: "霧海海豚型",
    family: "流動共感族",
    rarity: 8.1,
    image: "/assets/home/cards/dolphin.png",
    accent: "#5eead4",
    pool: "靈感先知卡池",
    line: "你不是三分鐘熱度，是靈感需要一直游向新海域。",
    signal: "對可能性、故事與人的變化特別有感。"
  },
  {
    code: "ISTJ",
    name: "雪原豹型",
    family: "秩序守成族",
    rarity: 11.6,
    image: "/assets/home/cards/snow-leopard.png",
    accent: "#93c5fd",
    pool: "守護穩定卡池",
    line: "你不是固執，是知道穩定背後需要長期守住的秩序。",
    signal: "習慣用證據、責任與步驟換取安全感。"
  },
  {
    code: "ISFJ",
    name: "森鹿守護型",
    family: "溫柔守護族",
    rarity: 13.8,
    image: "/assets/home/cards/forest-deer.png",
    accent: "#86efac",
    pool: "守護穩定卡池",
    line: "你不是不說需求，是常常先把別人放在自己前面。",
    signal: "能細緻照顧日常，但也需要被看見與被承接。"
  },
  {
    code: "ESTJ",
    name: "鐵脊狼王型",
    family: "結構管理族",
    rarity: 8.7,
    image: "/assets/home/cards/wolf-king.png",
    accent: "#f97316",
    pool: "守護穩定卡池",
    line: "你不是強勢，是看得見系統怎麼運作才有效。",
    signal: "擅長把標準、責任和結果整理成可執行的規則。"
  },
  {
    code: "ESFJ",
    name: "暖象凝聚型",
    family: "群體照護族",
    rarity: 12.3,
    image: "/assets/home/cards/warm-elephant.png",
    accent: "#f9a8d4",
    pool: "守護穩定卡池",
    line: "你不是愛操心，是天生會記得誰還沒被照顧到。",
    signal: "能讓場域變得有人情味，也容易為和諧付出太多。"
  },
  {
    code: "ISTP",
    name: "玄岩豹型",
    family: "冷靜拆解族",
    rarity: 5.4,
    image: "/assets/home/cards/obsidian-panther.png",
    accent: "#2dd4bf",
    pool: "行動閃耀卡池",
    line: "你不是難靠近，是習慣先觀察、再精準出手。",
    signal: "越需要臨場處理，你越能保持冷靜。"
  },
  {
    code: "ISFP",
    name: "流螢貓型",
    family: "感官美感族",
    rarity: 8.8,
    image: "/assets/home/cards/firefly-cat.png",
    accent: "#d8b4fe",
    pool: "行動閃耀卡池",
    line: "你不是安靜無感，是美感與情緒都藏在很細的地方。",
    signal: "用直覺感受世界，也需要保有自己的節奏。"
  },
  {
    code: "ESTP",
    name: "烈焰獵豹型",
    family: "即時行動族",
    rarity: 4.3,
    image: "/assets/home/cards/flame-leopard.png",
    accent: "#fb923c",
    pool: "行動閃耀卡池",
    line: "你不是衝動，是身體比腦袋更早讀懂現場。",
    signal: "適合在變動、競爭與高壓中直接解題。"
  },
  {
    code: "ESFP",
    name: "金焰孔雀型",
    family: "舞台感染族",
    rarity: 8.5,
    image: "/assets/home/cards/gold-peacock.png",
    accent: "#facc15",
    pool: "行動閃耀卡池",
    line: "你不是只愛熱鬧，是能把生命力帶進一個空間。",
    signal: "容易用表情、行動與現場感感染別人。"
  }
];

const pools: Pool[] = [
  {
    title: "夜色主角卡池",
    subtitle: "思考、策略、破局與領航。",
    animals: animals.slice(0, 4)
  },
  {
    title: "靈感先知卡池",
    subtitle: "洞察、價值、共感與人心。",
    animals: animals.slice(4, 8)
  },
  {
    title: "守護穩定卡池",
    subtitle: "秩序、照護、責任與凝聚。",
    animals: animals.slice(8, 12)
  },
  {
    title: "行動閃耀卡池",
    subtitle: "臨場、美感、冒險與感染力。",
    animals: animals.slice(12, 16)
  }
];

const premiumCards = [
  {
    title: "為什麼你會耗能",
    text: "找出最容易讓你心累的關係、工作節奏與溝通模式，知道該避開什麼。"
  },
  {
    title: "你真正需要什麼",
    text: "把抽象的安全感、自由感與被理解感，翻成可以說出口的需求。"
  },
  {
    title: "你適合怎麼發揮",
    text: "看見適合你的任務位置、合作方式與容易爆掉的壓力場景。"
  },
  {
    title: "下一步怎麼調整",
    text: "給你一組可執行的 30 天微調方向，讓測驗結果真的能進到生活裡。"
  }
];

function rarityRange(rarity: number) {
  const low = (rarity * 0.2).toFixed(2);
  const high = (rarity * 0.34).toFixed(2);
  return `${low}% - ${high}%`;
}

function AnimalImage({
  animal,
  className = "",
  priority = false
}: {
  animal: AnimalType;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[radial-gradient(circle_at_50%_34%,rgba(240,198,109,0.16),rgba(255,255,255,0.045)_46%,rgba(255,255,255,0)_72%)] ${className}`}
    >
      <Image
        src={animal.image}
        alt={`${animal.name}卡通造型`}
        fill
        priority={priority}
        unoptimized
        className="object-contain p-1"
        sizes="(min-width: 1024px) 180px, 42vw"
      />
    </div>
  );
}

export default function HomePage() {
  const featured = animals[1];

  return (
    <main className="overflow-hidden bg-[#07100d] text-[#f7f2e8]">
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(124,92,255,0.34),transparent_30%),linear-gradient(105deg,rgba(4,12,9,0.98),rgba(10,34,25,0.96)_52%,rgba(18,13,42,0.9))]" />
        <div className="absolute left-[9%] top-[18%] h-2 w-2 rounded-full bg-[#d8b4fe] shadow-[0_0_30px_8px_rgba(216,180,254,0.35)] motion-safe:animate-[sparkle_3.2s_ease-in-out_infinite]" />
        <div className="absolute right-[14%] top-[16%] h-1.5 w-1.5 rounded-full bg-[#f0c66d] shadow-[0_0_24px_7px_rgba(240,198,109,0.3)] motion-safe:animate-[sparkle_4s_ease-in-out_infinite]" />

        <div className="shell relative grid min-h-[calc(100vh-64px)] items-center gap-10 py-12 lg:grid-cols-[0.9fr_0.82fr] lg:py-16">
          <div>
            <p className="inline-flex rounded-full border border-[#d8b4fe]/30 bg-[#d8b4fe]/10 px-4 py-2 text-sm font-semibold text-[#f3e8ff] shadow-[0_0_32px_rgba(168,85,247,0.18)]">
              RareSoul 64 靈魂物種測驗
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6.8vw,5.7rem)] font-semibold leading-[1.04] tracking-normal">
              <span className="block">抽出你的</span>
              <span className="block whitespace-nowrap">靈魂物種</span>
              <span className="mt-3 block text-[clamp(2rem,4.4vw,4.1rem)] text-[#f0c66d]">
                看懂你為什麼會這樣
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-[#e7ded0]/82">
              <span className="block">3 分鐘建立你的專屬人格圖鑑。</span>
              <span className="block">看見你的稀有度、反應模式，以及最容易被誰點燃或消耗。</span>
            </p>
            <div className="mt-8">
              <Link
                href="#guide-entry"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-[#f0c66d] px-6 py-4 text-lg font-semibold text-[#112018] shadow-[0_16px_50px_rgba(240,198,109,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ffe7a3]"
              >
                建立我的專屬圖鑑
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-6 rounded-[42px] bg-[#6d5dfc]/20 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-[#101f1a]/80 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur motion-safe:animate-[float_5.8s_ease-in-out_infinite]">
              <div className="flex items-center justify-between px-2 pb-3 text-sm text-[#d9f99d]">
                <span>本次抽取</span>
                <span>SSR 稀有角色</span>
              </div>
              <div className="rounded-[24px] border border-[#8fd6b0]/20 bg-[radial-gradient(circle_at_50%_12%,rgba(216,180,254,0.2),transparent_34%),linear-gradient(180deg,rgba(22,49,39,0.96),rgba(9,18,15,0.98))] p-5">
                <div className="relative mx-auto aspect-square w-full max-w-[330px] overflow-hidden rounded-[24px] shadow-[0_20px_80px_rgba(0,0,0,0.32)]">
                  <Image
                    src={heroNightOwlImage}
                    alt="夜行貓頭鷹型首頁示範圖"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                    sizes="330px"
                  />
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5 text-center">
                  <p className="text-sm font-semibold text-[#d8b4fe]">今日示範卡</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white md:text-3xl">{featured.name}-A</h2>
                  <p className="mx-auto mt-2 max-w-sm text-sm leading-7 text-[#e7ded0]/78">
                    全球約 1.12%。不是不合群，是你的腦內一直有座正在運轉的觀察塔。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091611] py-14">
        <div className="shell">
          <div className="max-w-4xl">
            <p className="font-semibold text-[#f0c66d]">抽卡池預覽</p>
            <h2 className="mt-2 text-4xl font-semibold leading-[1.14] text-white md:text-5xl">
              <span className="block">你會抽到哪一隻？</span>
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e7ded0]/72">
              <span className="block">四組卡池，十六種主物種。</span>
              <span className="block">每一張卡都會延伸出稀有比例、亞型與關係判讀。</span>
            </p>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-4">
            {pools.map((pool) => (
              <article
                key={pool.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.055] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.24)]"
              >
                <div className="grid grid-cols-4 gap-2">
                  {pool.animals.map((animal) => (
                    <div key={animal.code} className="text-center">
                      <AnimalImage animal={animal} className="aspect-square rounded-2xl" />
                      <p className="mt-2 truncate text-xs font-semibold text-white">{animal.name}</p>
                    </div>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{pool.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#e7ded0]/64">{pool.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-[#e7ded0]/80">
                  {pool.animals.map((animal) => animal.name).join("、")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="types" className="bg-[#0c1914] py-16">
        <div className="shell">
          <div className="max-w-5xl">
            <p className="font-semibold text-[#f0c66d]">人格圖鑑收錄</p>
            <h2 className="mt-2 text-4xl font-semibold leading-[1.14] text-white md:text-5xl">
              <span className="block">16 種主物種</span>
              <span className="block">延伸 64 種精細判讀</span>
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e7ded0]/72">
              <span className="block">每個主物種都會再切成 A / R / C / X 四種亞型。</span>
              <span className="block">你看到的不只是一個名字，而是稀有比例、核心矛盾與關係使用方式。</span>
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {animals.map((animal, index) => (
              <article
                key={animal.code}
                className="flex min-h-[392px] flex-col rounded-2xl border border-white/10 bg-white/[0.055] p-4"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_88px] items-start gap-3">
                  <div className="min-w-0">
                    <h3 className="min-h-[58px] break-keep text-[1.45rem] font-semibold leading-[1.22] text-white">
                      {animal.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold" style={{ color: animal.accent }}>
                      {animal.family}
                    </p>
                  </div>
                  <AnimalImage
                    animal={animal}
                    priority={index < 2}
                    className="aspect-square rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.22)]"
                  />
                </div>
                <p className="mt-4 min-h-[58px] leading-7 text-[#e7ded0]/76">{animal.line}</p>
                <p className="mt-3 text-sm leading-6 text-[#e7ded0]/58">{animal.signal}</p>
                <div
                  className="mt-auto rounded-xl border p-3 text-sm"
                  style={{
                    borderColor: `${animal.accent}55`,
                    background: `linear-gradient(135deg, ${animal.accent}26, rgba(0,0,0,0.24))`
                  }}
                >
                  <p className="font-semibold text-white">主物種估算：全球約 {animal.rarity}%</p>
                  <p className="mt-1 text-[#f7f2e8]/76">64 型稀有範圍：約 {rarityRange(animal.rarity)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="guide-entry" className="bg-[#091611] py-16">
        <div className="shell">
          <div className="max-w-4xl">
            <p className="font-semibold text-[#f0c66d]">開始測驗</p>
            <h2 className="mt-2 text-4xl font-semibold leading-[1.14] text-white md:text-5xl">
              <span className="block">先選一張圖鑑封面</span>
              <span className="block">建立你的專屬圖鑑</span>
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e7ded0]/72">
              <span className="block">選一張你喜歡的圖鑑封面，進入同一份 RareSoul 64 測驗。</span>
              <span className="block">完成後會得到你的物種卡、稀有度與關係延伸。</span>
            </p>
          </div>

          <Link
            href="/quiz"
            className="focus-ring group mt-8 block rounded-[28px] border border-white/10 bg-white/[0.055] p-5 transition hover:bg-white/10"
          >
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-[#faf7f1] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                <Image
                  src="/assets/home/animal-set-03.png"
                  alt="男生圖鑑與女生圖鑑封面"
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  sizes="(min-width: 1024px) 620px, 92vw"
                />
              </div>
              <div>
                <p className="text-lg leading-8 text-[#e7ded0]/72">
                  <span className="block">測驗邏輯相同，差別在最後的圖鑑視覺包裝。</span>
                  <span className="block">完成後會生成你的物種卡、稀有度與關係延伸。</span>
                </p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#f0c66d] px-5 py-4 font-semibold text-[#102018]">
                  建立我的專屬圖鑑
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="relative bg-[#120f2b] py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(139,92,246,0.26),transparent_30%)]" />
        <div className="shell relative">
          <div className="max-w-5xl">
            <p className="font-semibold text-[#f0c66d]">完整報告</p>
            <h2 className="mt-2 text-4xl font-semibold leading-[1.14] text-white md:text-5xl">
              <span className="block">解鎖你的性格底層劇本</span>
              <span className="block">看見真正卡住你的模式</span>
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e7ded0]/72">
              <span className="block">測驗完成後，先揭開你的主物種與全球稀有度。</span>
              <span className="block">完整報告會拆開你的高分天賦與低分耗能點。</span>
              <span className="block">也會指出關係盲區與壓力反應。</span>
              <span className="block">最後給你更適合自己的調整方式。</span>
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {premiumCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d8b4fe]/10 text-[#d8b4fe]">
                  <Sparkles size={24} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#e7ded0]/68">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07100d] py-16">
        <div className="shell">
          <div className="max-w-5xl">
            <p className="font-semibold text-[#f0c66d]">關係圖譜</p>
            <h2 className="mt-2 text-4xl font-semibold leading-[1.14] text-white md:text-5xl">
              <span className="block">兩個人的關係</span>
              <span className="block">不是合不合而已</span>
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e7ded0]/72">
              <span className="block">邀請伴侶、家人或同事完成測驗。</span>
              <span className="block">系統會比較你們的能量流向、衝突雷區、互補位置與長期合作節奏。</span>
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "伴侶共鳴",
                text: "看見情緒需求、親密節奏與容易誤會的地方。"
              },
              {
                title: "親子理解",
                text: "把孩子與照顧者的差異翻成更清楚的溝通方式。"
              },
              {
                title: "職場協作",
                text: "拆解決策速度、責任分工與壓力下的合作風險。"
              }
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#e7ded0]/68">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.055] p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-white">測驗完成後，產生專屬邀請碼</p>
                <p className="mt-2 leading-7 text-[#e7ded0]/68">
                  對方完成測驗後，會解鎖雙人雷達圖、差異提醒與建議對話。
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-[#f0c66d]">
                <LockKeyhole size={20} />
                <span className="font-semibold">結果頁解鎖</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
