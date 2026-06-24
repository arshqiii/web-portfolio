import { ContactForm } from '../components/ContactForm';
import { Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-bg-main pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">

        {/* Left Column: Text */}
        <div className="flex flex-col flex-1 w-full text-center lg:text-left pt-4">
          <div className="mb-8 inline-block mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Contact me.</h2>
            <div className="h-1.5 w-24 bg-text-primary mt-2 rounded-full mx-auto lg:mx-0"></div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
            Let's build something great together.
          </h3>

          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            Whether you're looking for a dedicated software engineer, a passionate intern, or just have a question, feel free to reach out!
          </p>

          <p className="text-lg text-text-secondary leading-relaxed mb-12">
            I'll make sure to get back to you as soon as possible.
          </p>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
            <div className="flex items-center gap-4 text-text-primary font-medium group">
              <div className="w-12 h-12 rounded-full bg-action-tertiary flex items-center justify-center border border-action-primary/20 group-hover:bg-action-secondary transition-colors">
                <Mail size={22} className="text-action-primary group-hover:text-white transition-colors" />
              </div>
              <a href="mailto:marshq23@gmail.com" className="hover:text-action-primary transition-colors text-lg">
                marshq23@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-text-primary font-medium group">
              <div className="w-12 h-12 rounded-full bg-action-tertiary flex items-center justify-center border border-action-primary/20 group-hover:bg-action-secondary transition-colors">
                <MapPin size={22} className="text-action-primary group-hover:text-white transition-colors" />
              </div>
              <span className="text-lg">Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-[500px] xl:w-[550px] flex-shrink-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
