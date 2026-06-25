import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-bg-main pt-24 pb-32 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-action-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center text-center">
        <FadeIn direction="up" className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-action-tertiary text-action-primary border border-action-primary/20 text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
            <Mail size={16} />
            Contact Me
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight mb-6">
            Let's build something <br className="hidden md:block" />
            <span className="text-action-primary">extraordinary.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={150} direction="up">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you're looking for a dedicated software engineer, a passionate intern, or just have a question, my inbox is always open. I'll get back to you as soon as possible!
          </p>
        </FadeIn>

        <FadeIn delay={300} direction="up" className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
          <a
            href="mailto:marshq23@gmail.com"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-action-primary text-white rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-action-primary/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              Say Hello
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-px h-8 bg-border-main mx-2" />

            <div className="flex items-center gap-2 text-text-secondary px-5 py-3.5 rounded-full bg-bg-secondary border border-border-main shadow-sm">
              <MapPin size={18} className="text-action-primary" />
              <span className="font-medium">Jakarta, ID</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
