"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { trackConversion } from "./analytics"
import type { ReactNode } from "react"

interface ContactButtonProps {
  href: string
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
  className?: string
  children: ReactNode
  action: string
  category: string
  label: string
}

export function ContactButton({
  href,
  variant = "default",
  className,
  children,
  action,
  category,
  label,
}: ContactButtonProps) {
  const handleClick = () => {
    trackConversion(action, category, label)
  }

  return (
    <Button variant={variant} className={className} asChild>
      <Link href={href} onClick={handleClick}>
        {children}
      </Link>
    </Button>
  )
}
