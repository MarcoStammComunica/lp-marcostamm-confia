"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"

// ID de medição do GA4
const GA_MEASUREMENT_ID = "G-PXLN843YYS"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // Track page view with UTM parameters
      const utmSource = searchParams.get("utm_source")
      const utmMedium = searchParams.get("utm_medium")
      const utmCampaign = searchParams.get("utm_campaign")
      const utmContent = searchParams.get("utm_content")
      const utmTerm = searchParams.get("utm_term")

      window.gtag?.("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
        custom_map: {
          custom_parameter_1: "utm_source",
          custom_parameter_2: "utm_medium",
          custom_parameter_3: "utm_campaign",
        },
      })

      // Track UTM parameters if present
      if (utmSource || utmMedium || utmCampaign) {
        window.gtag?.("event", "utm_tracking", {
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          utm_content: utmContent,
          utm_term: utmTerm,
          page_location: window.location.href,
        })
      }
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}

// Função para rastrear eventos de conversão com UTMs
export function trackConversion(action: string, category: string, label: string, value?: number) {
  if (typeof window !== "undefined" && window.gtag) {
    // Google Analytics
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      page_location: window.location.href,
      utm_source: new URLSearchParams(window.location.search).get("utm_source"),
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
    })

    // Facebook Pixel
    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_name: label,
        content_category: category,
        value: value,
        currency: "BRL",
      })
    }

    console.log(`Conversão rastreada: ${action} - ${category} - ${label}`)
  }
}

// Função para rastrear scroll depth
export function trackScrollDepth() {
  if (typeof window !== "undefined") {
    let maxScroll = 0
    const trackingPoints = [25, 50, 75, 90, 100]

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent

        trackingPoints.forEach((point) => {
          if (scrollPercent >= point && maxScroll < point + 5) {
            window.gtag?.("event", "scroll_depth", {
              event_category: "engagement",
              event_label: `${point}%`,
              value: point,
            })
          }
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }
}

// Função para rastrear tempo na página
export function trackTimeOnPage() {
  if (typeof window !== "undefined") {
    const startTime = Date.now()

    const trackTime = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)

      if (timeSpent >= 30) {
        // 30 segundos
        window.gtag?.("event", "time_on_page", {
          event_category: "engagement",
          event_label: "30_seconds",
          value: timeSpent,
        })
      }

      if (timeSpent >= 60) {
        // 1 minuto
        window.gtag?.("event", "time_on_page", {
          event_category: "engagement",
          event_label: "1_minute",
          value: timeSpent,
        })
      }

      if (timeSpent >= 180) {
        // 3 minutos
        window.gtag?.("event", "time_on_page", {
          event_category: "engagement",
          event_label: "3_minutes",
          value: timeSpent,
        })
      }
    }

    const interval = setInterval(trackTime, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }
}
