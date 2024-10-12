'use client'

import { useState, useEffect } from "react";
import { MenuIcon, X, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const menuItems = [
        { name: "HOME", href: "/" },
        { name: "PRICING", href: "/pricing" },
        { name: "CONTACT US", href: "/contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-4 md:px-6 bg-white/5 backdrop-blur-md mt-4 rounded-full mx-5 lg:mx-20 text-white">
                <Link href="/">
                    <span className="text-xl font-bold cursor-pointer">ScamRakshak</span>
                </Link>
                <div className="hidden lg:flex items-center space-x-6">
                    {menuItems.slice(0, 3).map((item) => (
                        <Link key={item.name} href={item.href}>
                            <span className="hover:text-[#ddff00] transition-colors cursor-pointer">{item.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    <div className="hidden lg:block">
                        <Button variant="secondary" className="bg-[#ddff00] text-[#083239] hover:bg-[#b3cc00]">
                            REQUEST DEMO
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </Button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 lg:hidden bg-[#083239] text-white overflow-y-auto"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-center p-6 border-b border-white/10">
                                <span className="text-xl font-bold">Menu</span>
                                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>
                            <nav className="flex flex-col space-y-1 p-6 flex-grow">
                                {menuItems.map((item, index) => (
                                    <motion.div 
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link href={item.href}>
                                            <span className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                                                {item.name}
                                                <ChevronRight className="h-5 w-5 text-[#ddff00]" />
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                            <div className="p-6 border-t border-white/10">
                                <Button variant="secondary" className="w-full bg-[#ddff00] text-[#083239] hover:bg-[#b3cc00]">
                                    REQUEST DEMO
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
