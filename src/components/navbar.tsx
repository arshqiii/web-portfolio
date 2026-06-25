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
        <div>
            {/* Backdrop Blur (klik di luar navbar akan menutup menu) */}
            <button
                type="button"
                className={cn(
                    "fixed inset-0 w-full h-full bg-black/10 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 border-none outline-none",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
            />

            <nav className="fixed top-0 left-0 right-0 z-50 p-4">
                <div
                    className={cn(
                        "max-w-7xl mx-auto bg-surface-container-green-1 transition-all duration-300 ease-in-out shadow-sm overflow-hidden",
                        "rounded-[2rem]"
                    )}
                >
                    {/* Navbar Header / Top section */}
                    <div className="px-6 py-4 flex items-center relative z-20">

                        {/* Bagian Kiri: Logo Q */}
                        <div className="flex-1">
                            <a
                                href="#hero"
                                className="inline-flex items-center justify-center w-12 h-12 bg-[#E4FFE7] rounded-2xl font-logo text-2xl font-bold text-text-primary shadow-sm select-none hover:scale-105 transition-transform"
                                onClick={() => setIsOpen(false)}
                                title="Back to Top"
                            >
                                Q
                            </a>
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

                    {/* Menu Dropdown HP (Animasi smooth dengan CSS grid) */}
                    <div
                        className={cn(
                            "md:hidden grid transition-all duration-300 ease-in-out",
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}
                    >
                        {/* Menu Dropdown HP (Animasi smooth dengan CSS grid + Cubic Bezier) */}
                        <div
                            className={cn(
                                "md:hidden grid transition-all duration-500 cubic-bezier-[0.4,0,0.2,1]",
                                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}
                        >
                            <div className="overflow-hidden">
                                {/* Kontainer list link dengan animasi transisi tambahan */}
                                <div
                                    className={cn(
                                        "flex flex-col gap-6 px-8 pb-8 pt-4 border-t border-action-primary/10 transition-transform duration-500 cubic-bezier-[0.4,0,0.2,1]",
                                        isOpen ? "translate-y-0" : "-translate-y-4"
                                    )}
                                >
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="flex items-center gap-4 text-text-primary font-bold text-lg hover:text-action-primary transition-colors group"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {/* Efek hover kecil pada ikon saat menu disentuh */}
                                            <span className="group-hover:scale-110 transition-transform duration-200">
                                                {link.icon}
                                            </span>
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}