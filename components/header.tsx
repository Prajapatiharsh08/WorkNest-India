"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* ✅ Logo + Title */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <div className="cursor-pointer text-left">
            <h1 className="text-lg md:text-xl font-bold text-foreground">
              Globuz India
            </h1>
            <p className="text-[11px] md:text-xs text-muted-foreground italic">
              Where Ideas Take Flight
            </p>
          </div>
        </button>

        {/* ✅ Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("partner")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Join as a Partner
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact Us
          </button>
          <Button
            onClick={() => scrollToSection("partner")}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Get Started
          </Button>
        </div>

        {/* ✅ Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* ✅ Mobile Navigation (Visible & Working Properly) */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 w-full bg-background/95 backdrop-blur-md shadow-md border-t border-border transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          <button
            onClick={() => scrollToSection("home")}
            className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("partner")}
            className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
          >
            Join as a Partner
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
          >
            Contact Us
          </button>
          <Button
            onClick={() => scrollToSection("partner")}
            className="bg-primary hover:bg-primary/90 text-white w-full mt-2"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
