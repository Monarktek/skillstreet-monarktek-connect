import { useState } from "react";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  message: z.string().trim().min(1, "Please enter a message").max(2000, "Message is too long"),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-notification",
          recipientEmail: "alanh@monarktek.io",
          idempotencyKey: `contact-${result.data.email}-${Date.now()}`,
          templateData: result.data,
        },
      });
      if (error) throw error;
      toast({ title: "Message sent", description: "Thanks for reaching out. We'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Couldn't send message",
        description: "Something went wrong. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-14">
          <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
                Get in touch.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Partnerships, press, or questions about what we're working on. Reach out.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:alanh@monarktek.io"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" /> alanh@monarktek.io
                </a>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> Raleigh, NC
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us what's on your mind…"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}