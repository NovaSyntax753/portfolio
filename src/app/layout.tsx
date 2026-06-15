import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Fira_Code } from "next/font/google";
import "../globals.css";
import CursorGlow from "@/components/CursorGlow";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tejas Dhok | Full Stack Developer",
  description:
    "Full-stack developer skilled in Next.js, React, TypeScript, Python, REST APIs, and Supabase. Experienced in building responsive web applications, scalable backend systems, and AI-assisted development workflows.",
  keywords: [
    "Tejas Dhok",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Chandrapur",
    "India",
  ],
  authors: [{ name: "Tejas Dhok" }],
  creator: "Tejas Dhok",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tejasdhok.vercel.app",
    title: "Tejas Dhok | Full Stack Developer",
    description:
      "Full-stack developer building responsive web applications with Next.js, React, TypeScript, and Supabase.",
    siteName: "Tejas Dhok Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Dhok | Full Stack Developer",
    description:
      "Full-stack developer building responsive web applications with Next.js, React, TypeScript, and Supabase.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://tejasdhok.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tejas Dhok",
              url: "https://tejasdhok.vercel.app",
              email: "tejasdhok09@gmail.com",
              jobTitle: "Full Stack Developer",
              description:
                "Full-stack developer skilled in Next.js, React, TypeScript, Python, REST APIs, and Supabase.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chandrapur",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "G. H. Raisoni College of Engineering and Management, Nagpur",
              },
              worksFor: {
                "@type": "Organization",
                name: "QuickFusion Innovations",
              },
              sameAs: [
                "https://github.com/tejasdhok",
                "https://linkedin.com/in/tejasdhok",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "Tailwind CSS",
                "Supabase",
                "REST APIs",
                "Full Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${firaCode.variable} font-body antialiased overflow-x-hidden w-full bg-void text-chrome-2`}
      >
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
