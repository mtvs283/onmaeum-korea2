"use client"

import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { href: "/dashboard", label: "학습 시작" },
  { href: "/dashboard", label: "커리큘럼" },
  { href: "/shorts", label: "쇼츠" },
  { href: "/culture", label: "한국문화알리미" },
  { href: "/board", label: "게시판" },
  { href: "/payment", label: "요금제" },
]

const languages = ["KR", "EN", "JP", "ZH"]

export function Navbar() {
  const [activeLang, setActiveLang] = useState("KR")
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/92 backdrop-blur-sm border-b border-earth/15">
      <div className="flex items-center justify-between px-5 md:px-12 py-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-3">
          <div>
            <span className="block text-[9px] tracking-[3px] text-fog uppercase whitespace-nowrap">
              한국어교육AI연구개발원
            </span>
            <span className="font-serif text-lg font-semibold text-bark tracking-wide whitespace-nowrap">
              온마음 한국어
            </span>
          </div>
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] text-earth font-light hover:text-bark transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-1">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`text-[10px] px-2 py-1 rounded cursor-pointer transition-all ${
                  activeLang === lang
                    ? "bg-warm text-bark font-medium"
                    : "text-fog hover:text-bark"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <Link
            href="/login"
            className="bg-bark text-cream px-5 py-2 rounded-full text-xs hover:bg-ink transition-colors whitespace-nowrap"
          >
            무료 시작
          </Link>
        </div>

        {/* 모바일: 언어 + 햄버거 */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex gap-1">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`text-[10px] px-1.5 py-1 rounded cursor-pointer transition-all ${
                  activeLang === lang
                    ? "bg-warm text-bark font-medium"
                    : "text-fog hover:text-bark"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* 햄버거 버튼 */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1.5 cursor-pointer"
            aria-label="메뉴 열기"
          >
            <span className={`block w-5 h-0.5 bg-bark transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-bark transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-bark transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="md:hidden border-t border-earth/15 bg-cream/97 px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-earth font-light py-3 border-b border-earth/10 hover:text-bark transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-bark text-cream px-5 py-3 rounded-full text-sm text-center hover:bg-ink transition-colors"
          >
            무료로 시작하기
          </Link>
        </div>
      )}
    </nav>
  )
}
