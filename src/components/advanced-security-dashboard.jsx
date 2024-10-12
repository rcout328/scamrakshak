'use client'

import React, { useState, useEffect } from 'react'
import { Shield, AlertTriangle, Fingerprint, ChevronRight, Lock, Zap, Globe } from "lucide-react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updatePosition)

    return () => window.removeEventListener('mousemove', updatePosition);
  }, [])

  return (
    <div
      className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        background: 'radial-gradient(circle, rgba(221, 255, 0, 1) 0%, rgba(221, 255, 0, 0) 70%)'
      }} />
  );
}


export function AdvancedSecurityDashboard() {
  const [activeTab, setActiveTab] = useState('realtime')

  return (
    <div className="relative z-10">
      <header className="text-center mb-12">
        <p className="text-[#ddff00] mb-2 animate-pulse">Security</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Fast and Safe
          <br />
          <span className="text-[#ddff00]">
            Access Every Time
          </span>
        </h1>
        <p className="text-gray-400">Protect your information with ease and confidence.</p>
      </header>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={`bg-gray-800 bg-opacity-50 p-6 rounded-lg transition-all duration-300 ${activeTab === 'realtime' ? 'ring-2 ring-[#ddff00]' : ''}`}
            onMouseEnter={() => setActiveTab('realtime')}>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div
                className="absolute inset-0 bg-[#ddff00] rounded-full opacity-20 animate-ping"></div>
              <div
                className="absolute inset-4 bg-gray-700 rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-[#ddff00]" />
              </div>
              <div className="absolute top-0 right-0">
                <span
                  className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Warning
                </span>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Real-Time Monitoring</h2>
            <p className="text-gray-400 text-sm">Track and analyze security events as they happen.</p>
          </div>

          <div
            className={`bg-gray-800 bg-opacity-50 p-6 rounded-lg transition-all duration-300 ${activeTab === 'highlights' ? 'ring-2 ring-[#ddff00]' : ''}`}
            onMouseEnter={() => setActiveTab('highlights')}>
            <h2 className="text-xl font-semibold mb-4">Security Highlights</h2>
            <p className="text-gray-400 text-sm mb-4">Key milestones in our journey to provide top-tier security.</p>
            <ul className="space-y-3">
              {[
                { icon: Lock, text: "SecureAccess platform introduced.", highlight: "Launch" },
                { icon: Zap, text: "Multi-factor authentication integrated.", highlight: "MFA Added" },
                { icon: Fingerprint, text: "Fingerprint authentication launched.", highlight: "Biometric", special: true },
                { icon: Globe, text: "Global data centers established.", highlight: "Expansion" },
                { icon: Shield, text: "Continuous security enhancements.", highlight: "Updates" },
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <item.icon
                    className="w-5 h-5 text-[#ddff00] mr-2 flex-shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-gray-300 text-sm">
                    {item.text}{" "}
                    <span
                      className={`text-[#ddff00] ${item.special ? "bg-gray-700 px-2 py-1 rounded-full" : ""}`}>
                      {item.highlight}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`bg-gray-800 bg-opacity-50 p-6 rounded-lg transition-all duration-300 ${activeTab === 'biometric' ? 'ring-2 ring-[#ddff00]' : ''}`}
            onMouseEnter={() => setActiveTab('biometric')}>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {["P", "{", "}", "|", ":", '"', "?", "/"].map((key, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-2 text-center rounded transition-colors hover:bg-[#ddff00] hover:text-white cursor-pointer">
                  {key}
                </div>
              ))}
            </div>
            <div
              className="bg-[#ddff00] text-black p-4 rounded-lg flex items-center justify-between mb-4 cursor-pointer hover:bg-[#b3cc00] transition-colors">
              <Fingerprint className="w-6 h-6" />
              <span className="font-semibold">Biometric</span>
              <ChevronRight className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Biometric Authentication</h2>
            <p className="text-gray-400 text-sm">Secure your data with fast, reliable fingerprint access.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
