import type React from "react"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"
import { Suspense } from "react"
import Script from "next/script"

export const metadata = {
  title: "Marco Stamm - Comunicação Profissional para Prefeituras | Treinamento em 30 Dias",
  description:
    "Transforme sua equipe em uma estrutura de comunicação profissional em 30 dias. Especialista com 20+ anos de experiência em jornalismo e comunicação pública. Sem contratar ninguém novo.",
  keywords:
    "comunicação prefeitura, treinamento comunicação pública, assessoria comunicação municipal, jornalismo político, mídia training prefeito, comunicação institucional, gestão pública comunicação",
  authors: [{ name: "Marco Stamm" }],
  creator: "Marco Stamm",
  publisher: "Marco Stamm",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marcostamm.com.br",
    siteName: "Marco Stamm - Comunicação para Prefeituras",
    title: "Marco Stamm - Comunicação Profissional para Prefeituras",
    description:
      "Transforme sua equipe em uma estrutura de comunicação profissional em 30 dias. Especialista com 20+ anos de experiência.",
    images: [
      {
        url: "/images/hero-professional.png",
        width: 1200,
        height: 630,
        alt: "Marco Stamm - Especialista em Comunicação para Prefeituras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Stamm - Comunicação Profissional para Prefeituras",
    description: "Transforme sua equipe em uma estrutura de comunicação profissional em 30 dias.",
    images: ["/images/hero-professional.png"],
    creator: "@marcostamm",
  },
  alternates: {
    canonical: "https://marcostamm.com.br",
  },
  other: {
    "google-site-verification": "seu-codigo-google-verification",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#6B46C1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect para melhor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Marco Stamm - Comunicação para Prefeituras",
              description:
                "Especialista em comunicação para prefeituras do interior. Transformando equipes em estruturas profissionais há mais de 20 anos.",
              url: "https://marcostamm.com.br",
              telephone: "+55-51-99392-5730",
              email: "marco.stammm@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressRegion: "MT",
              },
              founder: {
                "@type": "Person",
                name: "Marco Stamm",
                jobTitle: "Jornalista e Especialista em Comunicação Pública",
                alumniOf: "Graduação em Jornalismo e Letras",
                worksFor: {
                  "@type": "Organization",
                  name: "O Globo, TV Globo, Assembleia Legislativa",
                },
              },
              serviceType: "Comunicação Pública",
              areaServed: "Brasil",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Comunicação",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Treinamento de Equipe de Comunicação",
                      description: "Transformação de equipes em estruturas de comunicação profissional em 30 dias",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mídia Training",
                      description: "Treinamento personalizado para prefeitos e secretários",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Meta Pixel do Facebook */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'SEU_PIXEL_ID_REAL_AQUI'); // Ex: '1234567890123456'
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_REAL_AQUI&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Suspense>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
