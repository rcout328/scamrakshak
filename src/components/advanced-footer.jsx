import React from 'react';
import { Shield, Twitter, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function AdvancedFooter() {
  return (
    <div className="relative z-10  text-white pt-20 pb-10 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-[#ddff00]" />
            <span className="text-xl font-bold">ScamRakshak</span>
          </div>
          <p className="text-sm text-gray-300">Protecting your digital world with cutting-edge security solutions.</p>
          <div className="flex space-x-4">
            <Twitter className="w-5 h-5 text-gray-400 hover:text-[#ddff00] cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-[#ddff00] cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-[#ddff00] cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#ddff00] cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ddff00]">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ddff00]">Services</h3>
          <ul className="space-y-2">
            {['Threat Detection', 'Data Encryption', 'Identity Protection', 'Cyber Consulting'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ddff00]">Stay Updated</h3>
          <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for the latest security insights.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-[#0a4b55] text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#ddff00]"
            />
            <Button className="bg-[#ddff00] text-[#083239] rounded-r-md hover:bg-[#b3cc00]">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; 2023 ScamRakshak. All rights reserved.</p>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ddff00]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ddff00]/5 rounded-full filter blur-3xl"></div>
    </div>
  );
}
