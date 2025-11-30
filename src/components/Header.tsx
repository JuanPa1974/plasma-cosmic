"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: "Sobre el Proyecto", href: "/proyecto-forma" },
        { name: "Módulos", href: "/modulos" },
        { name: "Formadores", href: "/formadores" },
        { name: "Créditos", href: "/creditos" },
    ];

    return (
        <header className="bg-goya-blue text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo + Nombre */}
                <Link href="/" className="flex items-center space-x-2">
                    <img
                        src="/logo-goya-training-2.png"
                        alt="Goya Training Logo"
                        className="h-10 w-auto"
                    />
                    <span className="font-bold text-lg tracking-wide">
                        GOYA TRAINING
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-goya-gold transition-colors font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-goya-blue border-t border-blue-800">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-goya-gold transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}