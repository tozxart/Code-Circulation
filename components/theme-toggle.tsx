"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-md transition-colors">
        <Palette className="w-4 h-4" />
        <span className="text-sm">السمة</span>
      </button>
    )
  }

  const themes = [
    { name: "root", label: "داكن", icon: <Palette className="w-4 h-4" /> },
    { name: "slate", label: "الحالي", icon: <Palette className="w-4 h-4" /> },
    { name: "blue", label: "أزرق", icon: <Moon className="w-4 h-4" /> },
    { name: "original", label: "الأصلي", icon: <Sun className="w-4 h-4" /> },
  ]

  const getButtonBgClass = () => {
    if (theme === "root") return "bg-slate-700 hover:bg-slate-600"
    if (theme === "blue") return "bg-blue-700 hover:bg-blue-600"
    if (theme === "original") return "bg-indigo-700 hover:bg-indigo-600"
    return "bg-slate-700 hover:bg-slate-600" // default slate theme
  }

  const getDropdownBgClass = () => {
    if (theme === "root") return "bg-slate-700"
    if (theme === "blue") return "bg-blue-700"
    if (theme === "original") return "bg-indigo-700"
    return "bg-slate-700" // default slate theme
  }

  const getHoverBgClass = () => {
    if (theme === "root") return "hover:bg-slate-600"
    if (theme === "blue") return "hover:bg-blue-600"
    if (theme === "original") return "hover:bg-indigo-600"
    return "hover:bg-slate-600" // default slate theme
  }

  const getSelectedBgClass = () => {
    if (theme === "root") return "bg-slate-500"
    if (theme === "blue") return "bg-blue-500"
    if (theme === "original") return "bg-indigo-500"
    return "bg-emerald-500" // default slate theme
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 ${getButtonBgClass()} text-white px-3 py-2 rounded-md transition-colors`}
      >
        {theme === "blue" ? (
          <Moon className="w-4 h-4" />
        ) : theme === "original" ? (
          <Sun className="w-4 h-4" />
        ) : theme === "root" ? (
          <Palette className="w-4 h-4" />
        ) : (
          <Palette className="w-4 h-4" />
        )}
        <span className="text-sm">السمة</span>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full right-0 mt-2 ${getDropdownBgClass()} rounded-md shadow-lg overflow-hidden z-50`}
        >
          <div className="p-2 min-w-[150px]">
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name)
                  setIsOpen(false)
                }}
                className={`flex items-center gap-2 w-full text-right px-3 py-2 rounded-md text-sm ${
                  theme === t.name ? `${getSelectedBgClass()} text-white` : `${getHoverBgClass()} text-white`
                }`}
              >
                {t.icon}
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
