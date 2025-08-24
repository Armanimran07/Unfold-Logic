"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-emerald-500" />
            <span className="text-xl font-bold text-slate-900">UnfoldLogic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Testimonials
            </Link>
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-emerald-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/testimonials"
                className="text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600 w-fit">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
