import { Heart } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1C2B22] text-white py-10 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="text-sm text-white/70 font-medium">
          © {currentYear} Muhammad Radhiya Arshq. All rights reserved.
        </div>

        {/* Built With */}
        <div className="flex items-center gap-2 text-sm text-white/70 font-medium">
          Built with <Heart size={16} className="text-action-secondary fill-current animate-pulse" /> using React & Tailwind
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">GitHub</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Resume</a>
        </div>
      </div>
    </footer>
  );
}