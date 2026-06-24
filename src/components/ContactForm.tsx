import { Button } from './Button';

export function ContactForm() {
  return (
    <div className="bg-surface-container-main rounded-[2rem] border border-action-primary/20 shadow-sm p-6 sm:p-8 md:p-10 transition-all hover:shadow-md w-full">
      <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-text-primary font-semibold ml-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="bg-action-tertiary border border-action-primary/30 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-action-primary/50 focus:border-action-primary transition-all"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-text-primary font-semibold ml-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your.email@example.com"
            className="bg-action-tertiary border border-action-primary/30 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-action-primary/50 focus:border-action-primary transition-all"
          />
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-text-primary font-semibold ml-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here..."
            className="bg-action-tertiary border border-action-primary/30 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-action-primary/50 focus:border-action-primary transition-all resize-y"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-2">
          <Button 
            type="submit" 
            size="lg"
            className="bg-surface-container-green-1 hover:bg-surface-container-green-2 text-text-primary border border-action-primary/40 shadow-sm"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
