import { useState } from "react";
import { Menu, X, Home, Box, Feather, User } from 'lucide-react';
import { cn } from "../lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', icon: <Home size={18} />, href: '#about' },
        { name: 'Projects', icon: <Box size={18} />, href: '#projects' },
        { name: 'Experience', icon: <Feather size={18} />, href: '#experience' },
        { name: 'Contact', icon: <User size={18} />, href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4">
            <div
                className={cn(
                    "max-w-7xl mx-auto bg-surface-container-green-1 transition-all duration-300 ease-in-out shadow-sm overflow-hidden",
                    isOpen ? "rounded-[2rem]" : "rounded-full"
                )}
            >
                {/* Navbar Header / Top section */}
                <div className="px-6 py-4 flex items-center relative z-20">

                    {/* Bagian Kiri: Logo Q */}
                    <div className="flex-1">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#E4FFE7] rounded-2xl font-logo text-2xl font-bold text-text-primary shadow-sm">
                            Q
                        </div>
                    </div>

                    {/* Bagian Tengah: Menu Desktop */}
                    <div className="hidden md:flex items-center justify-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-2 text-text-primary font-bold hover:text-action-primary transition-colors"
                            >
                                {link.icon}
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Bagian Kanan: Hamburger Button HP (atau area kosong di Desktop untuk menyeimbangkan posisi) */}
                    <div className="flex-1 flex justify-end">
                        <button
                            className="md:hidden text-text-primary p-2 focus:outline-none cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Menu Dropdown HP (Animasi height/opacity bisa di-improve, untuk saat ini pakai toggle) */}
                {isOpen && (
                    <div className="md:hidden flex flex-col gap-6 px-8 pb-8 pt-2 relative z-10 border-t border-action-primary/10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-4 text-text-primary font-bold text-lg hover:text-action-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.icon}
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}