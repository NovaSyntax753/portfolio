'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './Icons';
import MagneticWrapper from './MagneticWrapper';

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/tejasdhok', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/tejasdhok', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://x.com/TejasDhok28', label: 'X (Twitter)' },
];

const inputClasses =
  'peer bg-transparent border-b-2 border-white/10 px-0 py-3 text-chrome-2 placeholder-transparent focus:border-iridescent-a outline-none transition-all w-full font-mono text-lg';
const labelClasses = 
  'absolute left-0 -top-3.5 text-xs text-iridescent-a font-mono tracking-widest uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-chrome-1 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-iridescent-a pointer-events-none';

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneStr, setPhoneStr] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Obfuscate phone number from static HTML
    const p = ["+91", " 883", "007", "0427"].join("");
    setPhoneStr(p);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tejasdhok09@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '399e5131-010b-4456-b708-881279fff6f3');
    
    try {
      const endpoint = ['https://api', 'web3forms.com', 'submit'].join('.');
      const finalUrl = endpoint.replace('.submit', '/submit');
      
      await fetch(finalUrl, {
        method: 'POST',
        body: formData,
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 5000);
      
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-void py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-iridescent-b/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        
        <div className="text-center mb-16">
          <h2 className="text-[12vw] md:text-[140px] leading-none font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-text-primary to-white/10 select-none">
            SAY HELLO
          </h2>
          <p className="font-mono text-iridescent-a tracking-[0.3em] uppercase mt-4">
            Let&apos;s Build Something Incredible
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-chrome-1 text-lg mb-12 leading-relaxed font-body max-w-md">
                Have a project in mind or want to discuss opportunities? I&apos;m always open to new challenges and collaborations. Drop a message.
              </p>

              <div className="space-y-6 mb-16">
                {/* Email Item */}
                <div className="flex items-center gap-6 group">
                  <MagneticWrapper pullFactor={10} className="rounded-full">
                    <a href="mailto:tejasdhok09@gmail.com" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-iridescent-b/50 group-hover:bg-iridescent-b/10 transition-all duration-300">
                      <Mail className="w-5 h-5 text-chrome-2 group-hover:text-iridescent-b transition-colors" />
                    </a>
                  </MagneticWrapper>
                  <div>
                    <p className="text-xs text-iridescent-b/70 uppercase tracking-widest font-mono mb-1">
                      Email
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-chrome-2 text-lg font-body">tejasdhok09@gmail.com</p>
                      <button 
                        onClick={handleCopyEmail}
                        className="p-1.5 rounded-md hover:bg-surface transition-colors text-chrome-1 hover:text-iridescent-a flex items-center gap-1"
                        title="Copy Email"
                      >
                        {copied ? <CheckCircle2 className="w-4 h-4 text-iridescent-d" /> : <Copy className="w-4 h-4" />}
                        <span className="text-[10px] uppercase tracking-wider font-mono">{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-6 group">
                  <MagneticWrapper pullFactor={10} className="rounded-full">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-iridescent-b/50 group-hover:bg-iridescent-b/10 transition-all duration-300">
                      <Phone className="w-5 h-5 text-chrome-2 group-hover:text-iridescent-b transition-colors" />
                    </div>
                  </MagneticWrapper>
                  <div>
                    <p className="text-xs text-iridescent-b/70 uppercase tracking-widest font-mono mb-1">
                      Phone
                    </p>
                    <p className="text-chrome-2 text-lg font-body">{phoneStr || 'Loading...'}</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-6 group">
                  <MagneticWrapper pullFactor={10} className="rounded-full">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-iridescent-b/50 group-hover:bg-iridescent-b/10 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-chrome-2 group-hover:text-iridescent-b transition-colors" />
                    </div>
                  </MagneticWrapper>
                  <div>
                    <p className="text-xs text-iridescent-b/70 uppercase tracking-widest font-mono mb-1">
                      Location
                    </p>
                    <p className="text-chrome-2 text-lg font-body">Chandrapur, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-chrome-1 uppercase tracking-widest font-mono mb-6">Socials</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <MagneticWrapper key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-chrome-2 hover:text-iridescent-a hover:border-iridescent-a hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] bg-void transition-colors duration-300 relative z-10"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  </MagneticWrapper>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-surface border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group min-h-[500px] flex flex-col justify-center">
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-border-hover transition-colors duration-500 pointer-events-none" />

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute inset-0 z-20 bg-void/90 backdrop-blur-md flex flex-col items-center justify-center rounded-3xl"
                  >
                    <div className="w-24 h-24 rounded-full bg-iridescent-a/10 flex items-center justify-center mb-6 relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="absolute inset-0 rounded-full border-2 border-iridescent-a"
                      />
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <CheckCircle2 className="w-12 h-12 text-iridescent-a" />
                      </motion.div>
                    </div>
                    <h3 className="text-3xl font-heading text-chrome-2 mb-2">Transmission Sent</h3>
                    <p className="text-chrome-1 font-mono text-sm tracking-widest uppercase">I'll get back to you soon</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8 relative z-10 w-full"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="relative pt-4">
                        <input type="text" id="name" name="name" placeholder="John Doe" required className={inputClasses} />
                        <label htmlFor="name" className={labelClasses}>Name</label>
                      </div>

                      <div className="relative pt-4">
                        <input type="email" id="email" name="email" placeholder="john@example.com" required className={inputClasses} />
                        <label htmlFor="email" className={labelClasses}>Email</label>
                      </div>
                    </div>

                    <div className="relative pt-4">
                      <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required className={inputClasses} />
                      <label htmlFor="subject" className={labelClasses}>Subject</label>
                    </div>

                    <div className="relative pt-4">
                      <textarea id="message" name="message" rows={4} placeholder="How can we help you?" required className={`${inputClasses} resize-none`} />
                      <label htmlFor="message" className={labelClasses}>Message</label>
                    </div>

                    <MagneticWrapper pullFactor={5} className="w-full mt-8 block">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative overflow-hidden w-full py-4 rounded-xl font-mono text-sm tracking-widest uppercase text-white font-bold flex items-center justify-center gap-3 border-none bg-iridescent-a shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all disabled:opacity-50 group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-iridescent-a via-iridescent-b to-iridescent-a opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient-shift"></div>
                        <span className="relative z-10 flex items-center gap-2">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                          {!isSubmitting && <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
                        </span>
                      </button>
                    </MagneticWrapper>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
