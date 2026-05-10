import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const features = [
  {
    icon: "🤖",
    title: "AI 맞춤 학습",
    description: "GPT 기반 AI가 당신의 수준과 목표에 맞춰 학습 경로를 실시간으로 설계합니다.",
    tag: "Personalized",
    dark: true,
  },
  {
    icon: "🎬",
    title: "K-콘텐츠 학습",
    description: "드라마, K-팝 가사로 자연스러운 한국어 표현을 익히세요.",
    tag: "Immersive",
    dark: false,
  },
  {
    icon: "🎤",
    title: "발음 분석 & 교정",
    description: "AI가 당신의 발음을 실시간 분석하고 자연스러운 억양까지 코칭합니다.",
    tag: "Speech AI",
    dark: false,
  },
  {
    icon: "💬",
    title: "AI 챗봇 대화",
    description: "카페, 여행, 직장 등 실제 상황별 롤플레이 대화로 말하기 실력을 키워요.",
    tag: "Conversation",
    dark: false,
  },
  {
    icon: "📱",
    title: "쇼츠로 배우기",
    description: "1-3분 짧은 영상으로 핵심 표현과 문법을 빠르게 학습하세요.",
    tag: "Shorts",
    dark: false,
  },
  {
    icon: "🎓",
    title: "수료증 발급",
    description: "각 레벨 완료 시 공식 수료증이 발급됩니다. LinkedIn에 공유해보세요.",
    tag: "Certificate",
    dark: false,
  },
]

const journeySteps = [
  {
    num: 1,
    title: "레벨 테스트",
    desc: "5분 AI 테스트로 현재 실력을 정확히 진단하고, 맞춤 커리큘럼을 받으세요.",
  },
  {
    num: 2,
    title: "AI 맞춤 학습",
    desc: "매일 AI가 추천하는 학습 콘텐츠로 듣기, 말하기, 읽기, 쓰기를 균형 있게 학습합니다.",
  },
  {
    num: 3,
    title: "챗봇 실전 연습",
    desc: "배운 표현을 AI 챗봇과의 대화에서 바로 연습하고 피드백을 받으세요.",
  },
  {
    num: 4,
    title: "레벨 달성",
    desc: "TOPIK 기준 레벨을 달성하고, 공식 수료증을 받아 실력을 증명하세요.",
  },
]

const shorts = [
  { char: "안", category: "입문", title: "안녕하세요 발음 완벽 가이드" },
  { char: "존", category: "초급", title: "존댓말 vs 반말 핵심 차이" },
  { char: "감", category: "중급", title: "감정 표현 20가지 핵심 정리" },
  { char: "드", category: "문화", title: "K-드라마에서 쓰는 실제 표현들" },
]

const testimonials = [
  {
    initial: "Y",
    name: "Yuki T.",
    country: "일본",
    text: "3개월 만에 드라마를 자막 없이 볼 수 있게 됐어요! AI 챗봇으로 매일 연습한 덕분이에요.",
  },
  {
    initial: "S",
    name: "Sarah M.",
    country: "미국",
    text: "한국어 학습 앱은 많이 써봤지만, 온마음 한국어의 발음 분석 기능이 정말 최고예요.",
  },
  {
    initial: "C",
    name: "Carlos R.",
    country: "멕시코",
    text: "쇼츠로 출퇴근 시간에 학습하고, 주말엔 AI 챗봇으로 대화 연습해요. 정말 효율적이에요!",
  },
]

const plans = [
  {
    name: "새싹",
    price: "무료",
    period: "영원히",
    features: ["기초 레슨 5개", "일일 단어 5개", "커뮤니티 접근"],
    featured: false,
  },
  {
    name: "온기",
    price: "₩19,900",
    period: "/ 월",
    features: ["전체 커리큘럼", "AI 챗봇 무제한", "쇼츠 무제한", "수료증 발급"],
    featured: true,
    badge: "가장 인기",
  },
  {
    name: "마음",
    price: "₩39,900",
    period: "/ 월",
    features: ["온기 플랜 전체", "1:1 화상 수업 월 2회", "첨삭 우선 피드백", "전용 학습 매니저"],
    featured: false,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-12 pt-24 md:pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[30vw] font-bold text-earth/[0.04] pointer-events-none select-none tracking-tight">
          한
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-warm border border-earth/25 px-3.5 py-1.5 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-moss" />
            <span className="text-[11px] text-earth tracking-[2px] uppercase">
              AI-Powered Learning
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-bark mb-4 tracking-tight">
            마음으로 배우는
            <br />
            <span className="text-clay italic">한국어</span>의 온기
          </h1>

          <p className="text-[15px] text-earth leading-relaxed font-light max-w-md mb-10">
            AI가 당신만의 학습 경로를 설계합니다.
            <br />
            전 세계 42,000명이 이미 시작했어요.
          </p>

          <div className="flex items-center gap-4 md:gap-6 mb-12 flex-wrap">
            <Link
              href="/login"
              className="bg-bark text-cream px-8 py-3.5 rounded-full text-sm hover:bg-ink hover:-translate-y-0.5 transition-all"
            >
              무료로 시작하기
            </Link>
            <button className="bg-transparent text-earth px-6 py-3.5 rounded-full text-[13px] border border-earth/35 hover:border-bark hover:text-bark transition-all">
              체험 영상 보기
            </button>
          </div>

          <div className="flex gap-8 md:gap-10 pt-8 border-t border-earth/15">
            <div>
              <div className="font-serif text-3xl font-bold text-bark leading-none">42K+</div>
              <div className="text-[11px] text-fog mt-1">전 세계 학습자</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-bark leading-none">98%</div>
              <div className="text-[11px] text-fog mt-1">만족도</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-bark leading-none">120+</div>
              <div className="text-[11px] text-fog mt-1">국가</div>
            </div>
          </div>
        </div>

        {/* 히어로 이미지 - 모바일에서는 숨김 */}
        <div className="relative z-10 hidden md:flex items-center justify-center h-[500px]">
          <div className="w-[420px] h-[560px] relative flex items-center justify-center">
            <img src="/내사진2.png" alt="사진" className="w-[380px] h-[500px] object-cover object-center rounded-3xl mx-auto translate-x-[-200px]" />
            <div className="absolute top-4 left-4 bg-bark/90 rounded-xl px-3 py-2 text-center">
              <div className="w-3.5 h-3.5 rounded-full bg-cream/85 mx-auto mb-1" />
              <div className="text-[8px] text-cream/70 tracking-wide">AI TUTOR</div>
            </div>
            <div className="absolute bottom-20 right-4 bg-cream/95 border border-earth/20 rounded-xl px-4 py-3">
              <div className="text-[9px] text-fog tracking-[1.5px] uppercase mb-1">현재 레벨</div>
              <div className="font-serif text-sm font-semibold text-bark">B1 중급</div>
              <div className="text-[11px] text-earth mt-0.5">TOPIK II 준비 중</div>
            </div>
            <div className="absolute top-24 right-8 bg-cream/95 border border-earth/20 rounded-xl px-4 py-3">
              <div className="text-[9px] text-fog tracking-[1.5px] uppercase mb-1">오늘 학습</div>
              <div className="font-serif text-sm font-semibold text-bark">24분</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-5 md:px-12 py-14 md:py-24">
        <div className="text-[10px] tracking-[4px] text-fog uppercase mb-4 font-light">
          Features
        </div>
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-bark leading-tight mb-2">
          왜 온마음 한국어인가요?
        </h2>
        <p className="text-sm text-earth font-light max-w-lg leading-relaxed">
          AI 기술과 K-콘텐츠를 결합한 새로운 학습 경험
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px] mt-12 bg-earth/10 rounded-2xl overflow-hidden">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-7 md:p-10 transition-colors ${feature.dark
                ? "bg-bark hover:bg-ink"
                : "bg-warm hover:bg-[#E8E0D5]"
                }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-6 ${feature.dark ? "bg-cream/10" : "bg-earth/10"
                  }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`font-serif text-lg font-semibold mb-3 leading-snug ${feature.dark ? "text-cream" : "text-bark"
                  }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-[13px] leading-relaxed font-light ${feature.dark ? "text-cream/70" : "text-earth"
                  }`}
              >
                {feature.description}
              </p>
              <span
                className={`inline-block mt-5 text-[10px] tracking-[2px] uppercase px-2.5 py-1 rounded-full ${feature.dark
                  ? "bg-cream/10 text-cream/60"
                  : "bg-earth/10 text-fog"
                  }`}
              >
                {feature.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-warm px-5 md:px-12 py-14 md:py-24">
        <div className="text-[10px] tracking-[4px] text-fog uppercase mb-4 font-light">
          Learning Journey
        </div>
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-bark leading-tight mb-2">
          4단계 학습 여정
        </h2>
        <p className="text-sm text-earth font-light max-w-lg leading-relaxed">
          AI가 처음부터 끝까지 함께합니다
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20 items-center mt-12">
          <div className="flex flex-col">
            {journeySteps.map((step, idx) => (
              <div
                key={step.num}
                className="flex gap-6 py-6 border-b border-earth/15 cursor-pointer transition-all"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5 ${idx === 0
                    ? "bg-bark text-cream"
                    : "bg-earth/10 text-earth"
                    }`}
                >
                  {step.num}
                </div>
                <div>
                  <div
                    className={`font-serif text-base font-semibold mb-1 ${idx === 0 ? "text-bark" : "text-earth"
                      }`}
                  >
                    {step.title}
                  </div>
                  <p className="text-xs text-fog leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-cream rounded-3xl border border-earth/20 overflow-hidden">
            <div className="bg-bark px-6 py-4 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-clay/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-moss/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-fog/60" />
            </div>
            <div className="p-6 md:p-8">
              <div className="bg-warm rounded-2xl border border-earth/15 p-3.5 mb-3 max-w-[85%]">
                <p className="text-[13px] text-ink leading-relaxed">
                  안녕하세요! 오늘은 카페 주문 연습을 해볼게요.
                  제가 직원이고, 당신이 손님이에요. 준비되셨나요?
                </p>
              </div>
              <div className="bg-bark rounded-2xl p-3.5 ml-auto max-w-[75%]">
                <p className="text-[13px] text-cream leading-relaxed">
                  네! 아메리카노 한 잔 주세요.
                </p>
              </div>
              <div className="flex gap-1 items-center mt-4 bg-warm rounded-2xl border border-earth/15 p-3.5 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-fog animate-bounce" />
                <div className="w-1.5 h-1.5 rounded-full bg-fog animate-bounce delay-75" />
                <div className="w-1.5 h-1.5 rounded-full bg-fog animate-bounce delay-150" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shorts Section */}
      <section className="bg-bark px-5 md:px-12 py-14 md:py-24">
        <div className="text-[10px] tracking-[4px] text-cream/35 uppercase mb-4 font-light">
          Shorts
        </div>
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-cream leading-tight mb-2">
          쇼츠로 배우는 한국어
        </h2>
        <p className="text-sm text-cream/60 font-light max-w-lg leading-relaxed">
          1-3분 짧은 영상으로 핵심만 빠르게
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {shorts.map((short, idx) => (
            <div
              key={idx}
              className="bg-cream/[0.07] rounded-2xl aspect-[9/16] max-h-[260px] border border-cream/10 relative overflow-hidden cursor-pointer hover:bg-cream/10 hover:-translate-y-1 transition-all flex items-end"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[100px] font-bold text-cream/[0.07] select-none">
                {short.char}
              </div>
              <div className="p-3.5 relative z-10">
                <div className="text-[9px] tracking-[2px] text-cream/40 uppercase mb-1">
                  {short.category}
                </div>
                <div className="text-xs text-cream/85 leading-snug">{short.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-5 md:px-12 py-14 md:py-24">
        <div className="text-[10px] tracking-[4px] text-fog uppercase mb-4 font-light">
          Testimonials
        </div>
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-bark leading-tight mb-2">
          학습자들의 이야기
        </h2>
        <p className="text-sm text-earth font-light max-w-lg leading-relaxed">
          전 세계 42,000명이 온마음 한국어와 함께하고 있습니다
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-warm rounded-2xl p-6 md:p-8 border border-earth/10"
            >
              <div className="font-serif text-5xl text-earth/15 leading-none mb-2">
                &ldquo;
              </div>
              <p className="text-[13px] text-earth leading-relaxed font-light mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-bark flex items-center justify-center text-[13px] text-cream font-medium">
                  {t.initial}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-bark">{t.name}</div>
                  <div className="text-[11px] text-fog">{t.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-warm px-5 md:px-12 py-14 md:py-24">
        <div className="text-[10px] tracking-[4px] text-fog uppercase mb-4 font-light">
          Pricing
        </div>
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-bark leading-tight mb-2">
          당신에게 맞는 플랜
        </h2>
        <p className="text-sm text-earth font-light max-w-lg leading-relaxed">
          7일 무료 체험으로 시작하세요
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 md:p-10 relative transition-all hover:-translate-y-1 ${plan.featured
                ? "bg-bark"
                : "bg-cream border border-earth/15"
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-clay text-cream text-[10px] tracking-[2px] uppercase px-3.5 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              <div
                className={`text-[11px] tracking-[3px] uppercase mb-4 font-light ${plan.featured ? "text-cream/60" : "text-fog"
                  }`}
              >
                {plan.name}
              </div>
              <div
                className={`font-serif text-5xl font-bold leading-none ${plan.featured ? "text-cream" : "text-bark"
                  }`}
              >
                {plan.price}
              </div>
              <div
                className={`text-[13px] mt-1 mb-8 ${plan.featured ? "text-cream/45" : "text-fog"
                  }`}
              >
                {plan.period}
              </div>
              <ul className="mb-8">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2.5 text-[13px] py-2 border-b font-light ${plan.featured
                      ? "text-cream/80 border-cream/10"
                      : "text-earth border-earth/10"
                      }`}
                  >
                    <span className={plan.featured ? "text-cream/60" : "text-moss"}>
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3.5 rounded-full text-[13px] cursor-pointer transition-all ${plan.featured
                  ? "bg-cream text-bark hover:bg-blush"
                  : "bg-transparent text-bark border border-earth/35 hover:bg-bark hover:text-cream"
                  }`}
              >
                {plan.featured ? "7일 무료 체험" : "시작하기"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 md:px-12 py-14 md:py-24 text-center">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-bark leading-tight mb-4">
          지금 바로 시작하세요
        </h2>
        <p className="text-sm text-earth font-light max-w-md mx-auto leading-relaxed mb-8">
          7일 무료 체험, 카드 정보 없이 시작합니다.
          <br />
          언제든 취소 가능해요.
        </p>
        <Link
          href="/login"
          className="inline-block bg-bark text-cream px-10 py-4 rounded-full text-sm hover:bg-ink hover:-translate-y-0.5 transition-all"
        >
          무료로 시작하기
        </Link>
      </section>

      <Footer />
    </div>
  )
}
