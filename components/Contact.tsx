"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "No. 35 Ndele Street, Bishop House, D-Line, Port Harcourt, Rivers State, Nigeria",
    link: "https://maps.google.com/?q=No.+35+Ndele+Street+D-Line+Port+Harcourt+Nigeria",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+234 913 452 3615",
    link: "tel:+2349134523615",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@xlinkseducationalandtravels.org",
    link: "mailto:info@xlinkseducationalandtravels.org",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 8:00am – 6:00pm  |  Sat: 9:00am – 3:00pm",
    link: null,
  },
];

const services = [
  "University Admissions",
  "Visa Processing",
  "IELTS Preparation",
  "French Language",
  "German Language",
  "Spanish Language",
  "Flight Booking",
  "Accommodation",
  "Airport Pickup",
  "Document Authentication",
  "Travel Insurance",
  "General Enquiry",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id='contact'
      className='section-padding bg-gradient-to-b from-emerald-50/50 to-background dark:from-emerald-950/20 dark:to-background'
      aria-labelledby='contact-heading'
      ref={ref}>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='text-center mb-14'>
          <span className='inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3'>
            Get In Touch
          </span>
          <h2
            id='contact-heading'
            className='text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4'>
            Start Your <span className='gradient-text'>Journey Today</span>
          </h2>
          <p className='text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
            Ready to study abroad? Fill in the form below and one of our expert
            advisors will get back to you within 24 hours — completely free
            consultation.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-5 gap-10'>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='lg:col-span-2 space-y-5'>
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className='flex flex-col sm:flex-row items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-md transition-all duration-200'>
                  <div className='w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center flex-shrink-0'>
                    <Icon
                      className='w-5 h-5 text-emerald-600 dark:text-emerald-400'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1'>
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className='text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors wrap-break-word'>
                        {item.value}
                      </a>
                    ) : (
                      <p className='text-sm font-semibold text-gray-800 dark:text-gray-200 wrap-break-word'>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Map embed placeholder */}
            <a
              href='https://maps.google.com/?q=D-Line+Port+Harcourt+Nigeria'
              target='_blank'
              rel='noopener noreferrer'
              className='block relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-800 to-teal-900 aspect-video hover:shadow-lg transition-shadow'
              aria-label='View our location on Google Maps'>
              <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center'>
                <MapPin
                  className='w-10 h-10 text-emerald-300 mb-3'
                  aria-hidden='true'
                />
                <p className='font-bold text-base'>Find Us on the Map</p>
                <p className='text-sm text-white/70 mt-1'>
                  D-Line, Port Harcourt
                </p>
                <span className='mt-4 text-xs bg-white/20 px-3 py-1.5 rounded-full font-medium'>
                  Open in Google Maps →
                </span>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='lg:col-span-3'>
            <div className='bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm'>
              {submitted ? (
                <div className='flex flex-col items-center justify-center py-12 text-center'>
                  <CheckCircle2
                    className='w-16 h-16 text-emerald-500 mb-4'
                    aria-hidden='true'
                  />
                  <h3 className='text-2xl font-black text-gray-900 dark:text-white mb-2'>
                    Message Sent!
                  </h3>
                  <p className='text-gray-500 dark:text-gray-400 mb-6'>
                    Your enquiry has been sent to our team. We will respond
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className='px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl'>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label='Contact form'>
                  <h3 className='text-xl font-black text-gray-900 dark:text-white mb-6'>
                    Book a Free Consultation
                  </h3>
                  <div className='grid sm:grid-cols-2 gap-4 mb-4'>
                    <div className='space-y-1.5'>
                      <Label htmlFor='name' className='font-bold'>
                        Full Name *
                      </Label>
                      <Input
                        id='name'
                        name='name'
                        type='text'
                        required
                        autoComplete='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Your full name'
                        className='py-4.5'
                      />
                    </div>
                    <div className='space-y-1.5'>
                      <Label htmlFor='email' className='font-bold'>
                        Email Address *
                      </Label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        required
                        autoComplete='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder='you@example.com'
                        className='py-4.5'
                      />
                    </div>
                  </div>
                  <div className='grid sm:grid-cols-2 gap-4 mb-4'>
                    <div className='space-y-1.5'>
                      <Label htmlFor='phone' className='font-bold'>
                        Phone / WhatsApp
                      </Label>
                      <Input
                        id='phone'
                        name='phone'
                        type='tel'
                        autoComplete='tel'
                        value={form.phone}
                        onChange={handleChange}
                        placeholder='+234 xxx xxx xxxx'
                        className='py-4.5'
                      />
                    </div>
                    <div className='space-y-1.5'>
                      <Label htmlFor='service' className='font-bold'>
                        Service of Interest
                      </Label>
                      <Select
                        value={form.service}
                        onValueChange={(v) =>
                          setForm((prev) => ({ ...prev, service: v }))
                        }>
                        <SelectTrigger id='service' className='w-full py-4.5'>
                          <SelectValue placeholder='Select a service' />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className='mb-6 space-y-1.5'>
                    <Label htmlFor='message' className='font-bold'>
                      Your Message *
                    </Label>
                    <Textarea
                      id='message'
                      name='message'
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder='Tell us about your study abroad goals, your destination of interest, and any questions you have...'
                      className='resize-none'
                    />
                  </div>
                  <button
                      type='submit'
                      disabled
                    // disabled={loading}
                    className='w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-60 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-200 hover:-translate-y-0.5 text-base'>
                    {loading ? (
                      <span className='flex items-center gap-2'>
                        <svg
                          className='animate-spin w-5 h-5'
                          viewBox='0 0 24 24'
                          fill='none'
                          aria-hidden='true'>
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          />
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className='w-5 h-5' aria-hidden='true' />
                      </>
                    )}
                  </button>
                  {error && (
                    <p className='text-sm text-red-500 text-center mt-3'>{error}</p>
                  )}
                  <p className='text-xs text-gray-400 dark:text-gray-600 text-center mt-3'>
                    Free consultation • No commitment required • Response within
                    24 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
