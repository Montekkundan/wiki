import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  showModeToggle?: boolean;
}


export function Footer({ className, showModeToggle = true }: SiteFooterProps) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href="https://github.com/montekkundan"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Montek
            </a>
            .The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        </div>
        <div className="flex items-center gap-4 text-sm md:text-md">
        test
        </div>
         <ModeToggle />
      </div>
    </footer>
  )
}