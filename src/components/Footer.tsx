export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1C2B22] text-white py-10 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="text-sm text-white/70 font-medium">
          © {currentYear} Muhammad Radhiya Arshq. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          <a href="https://github.com/arshqiii" className="text-white/70 hover:text-white transition-colors text-sm font-medium">GitHub</a>
          <a href="https://www.linkedin.com/in/mradhiyaarshq/" className="text-white/70 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}