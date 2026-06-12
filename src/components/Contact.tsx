'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import SectionTitle from '@/components/SectionTitle';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tejasdhok09@gmail.com',
    href: 'mailto:tejasdhok09@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(+91) 8830070427',
    href: 'tel:+918830070427',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chandrapur, Maharashtra, India',
  },
];

const socialLinks = [
  {
    icon: GithubIcon,
    href: 'https://github.com/tejasdhok',
    label: 'GitHub',
  },
  {
    icon: LinkedinIcon,
    href: 'https://linkedin.com/in/tejasdhok',
    label: 'LinkedIn',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const inputClasses =
  'bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#8888a0] focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/20 outline-none transition-all w-full';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="CONTACT" subtitle="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.h3
              variants={fadeUp}
              custom={0}
              className="text-2xl font-bold text-white mb-4"
            >
              Let&apos;s work together
            </motion.h3>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-[#8888a0] mb-8 leading-relaxed"
            >
              Have a project in mind or want to discuss opportunities? Feel free
              to reach out. I&apos;m always open to new challenges and
              collaborations.
            </motion.p>

            {/* Contact Items */}
            <div className="space-y-5 mb-8">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    custom={index + 2}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#00d4ff]/30 transition-colors">
                      <Icon className="w-5 h-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8888a0] uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-white text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="flex gap-3"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8888a0] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.form
              variants={fadeUp}
              custom={0}
              action="https://api.web3forms.com/submit"
              method="POST"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-[#8888a0] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-[#8888a0] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-[#8888a0] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-[#8888a0] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message..."
                    required
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
