import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Fira_Code } from "next/font/google";
import "../globals.css";
import CursorGlow from "@/components/CursorGlow";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: "400",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tejas Dhok | Full-Stack Developer — Next.js, TypeScript, Supabase",
  description:
    "Full-Stack Developer with 6 months professional internship experience. Building production web apps with Next.js, TypeScript, React, and Supabase. Available for full-time roles, June 2026.",
  keywords: [
    "Tejas Dhok",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Nagpur developer",
    "fresher full stack developer India",
    "Next.js developer India",
    "hire full stack developer 2026",
  ],
  authors: [{ name: "Tejas Dhok" }],
  creator: "Tejas Dhok",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tejasdhok.dev",
    title: "Tejas Dhok | Full-Stack Developer — Next.js, TypeScript, Supabase",
    description:
      "Full-Stack Developer with 6 months professional internship experience. Building production web apps with Next.js, TypeScript, React, and Supabase. Available for full-time roles, June 2026.",
    siteName: "Tejas Dhok Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tejas Dhok | Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Dhok | Full-Stack Developer — Next.js, TypeScript, Supabase",
    description:
      "Full-Stack Developer with 6 months professional internship experience. Building production web apps with Next.js, TypeScript, React, and Supabase. Available for full-time roles, June 2026.",
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
        <link rel="canonical" href="https://tejasdhok.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tejas Dhok",
              url: "https://tejasdhok.dev",
              email: "tejasdhok09@gmail.com",
              jobTitle: "Full Stack Developer",
              description:
                "Full-Stack Developer with 6 months professional internship experience. Building production web apps with Next.js, TypeScript, React, and Supabase. Available for full-time roles, June 2026.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nagpur",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "G. H. Raisoni College of Engineering, Nagpur",
              },
              worksFor: {
                "@type": "Organization",
                name: "QuickFusion Innovations",
              },
              sameAs: [
                "https://github.com/NovaSyntax753",
                "https://www.linkedin.com/in/tejas-dhok-329983371/",
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
