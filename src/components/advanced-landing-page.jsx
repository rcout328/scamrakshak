"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Shield, ChevronDown, Menu as MenuIcon, MousePointer2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { IntegrationDashboard } from "./integration-dashboard"
import { AdvancedSecurityDashboard } from "./advanced-security-dashboard"
import { AdvancedFooter } from "./advanced-footer"
import {  Header } from "./header"
import Link from 'next/link'

export default function AdvancedLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    };
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#083239] to-[#051e22] text-white relative overflow-hidden cursor-none">
      {/* Custom Cursor */}
      <div
        className="fixed z-50 pointer-events-none transition-all duration-100 ease-out"
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}>
        <MousePointer2 className="w-6 h-6 text-green-300" />
      </div>
      
      {/* Background with green circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-300/10 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
      
      {/* Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 mt-20">
        <h2 className="text-[#ddff00] text-xl mb-2 animate-fade-in-up">ScamRakshak</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight animate-fade-in-up animation-delay-300">
          <span className="md:inline">
            Your Security at Your Fingertips
            <br />
            Fast and Safe Access Every Time!
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300 animate-fade-in-up animation-delay-500">
          ScamRakshakcess offers top-tier biometric authentication for fast, secure access to your data. Protect your
          information with ease and confidence.
        </p>
       
        
        {/* Integration Dashboard */}
        <section className="w-full mt-20">
          <h2 className="text-2xl font-bold mb-8 text-[#ddff00]">Integration Dashboard</h2>
          <IntegrationDashboard />
        </section>
        
        {/* Advanced Security Dashboard */}
        <section className="w-full mt-20">
          <AdvancedSecurityDashboard />
        </section>
      </main>
      
      {/* Advanced Footer */}
      <AdvancedFooter />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#ddff00]/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ddff00]/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ddff00]/30 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
    </div>
  );
}

// Add these styles to your global CSS file
const styles = `
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-700 {
  animation-delay: 700ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

/* Hide default cursor */
body {
  cursor: none;
}
`
