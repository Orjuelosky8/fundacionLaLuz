'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, X, BrainCircuit, Bot, ShieldCheck } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Logo } from '@/components/icons';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/services-locations', label: 'Programas' },
  {
    label: 'Herramientas IA',
    subLinks: [
      {
        href: '/mental-health-assessment',
        label: 'Evaluación de Salud Mental',
        icon: Bot,
        description: 'Analiza tu estado de ánimo y estrés.'
      },
      { 
        href: '/wellness-recommendations', 
        label: 'Planes de Bienestar',
        icon: BrainCircuit,
        description: 'Recomendaciones personalizadas.'
      },
      {
        href: '/substance-use-risk',
        label: 'Guía de Reducción de Riesgo',
        icon: ShieldCheck,
        description: 'Orientación sobre uso de sustancias.'
      },
    ],
  },
  { href: '/financials', label: 'Transparencia' },
  { href: '/contact', label: 'Contacto' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-bold sm:inline-block font-headline text-2xl text-foreground tracking-wider uppercase">
            LuzIA
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex flex-1 justify-center items-center">
          {navLinks.map((link) =>
            link.subLinks ? (
              <DropdownMenu.Root key={link.label}>
                <DropdownMenu.Trigger asChild>
                  <button
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none',
                      link.subLinks.some((sl) => pathname.startsWith(sl.href)) &&
                        'text-primary'
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="w-64 bg-background border-border/50 rounded-lg shadow-lg p-2"
                    sideOffset={15}
                  >
                    {link.subLinks.map((subLink) => (
                      <DropdownMenu.Item key={subLink.href} asChild>
                        <Link
                          href={subLink.href}
                          className={cn(
                            'flex gap-3 items-center w-full p-3 text-sm text-foreground rounded-md transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none',
                            pathname === subLink.href &&
                              'bg-accent/80 text-accent-foreground'
                          )}
                        >
                          <subLink.icon className="h-5 w-5 text-primary"/>
                          <div>
                            <p className="font-semibold">{subLink.label}</p>
                            <p className="text-xs text-muted-foreground">{subLink.description}</p>
                          </div>
                        </Link>
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className={cn(
                  'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                  pathname === link.href && 'text-primary'
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="hidden md:flex items-center justify-end">
          <Button asChild>
            <Link href="/contact">Donar</Link>
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background w-full p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                   <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline text-lg text-foreground">LuzIA</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <div className="flex flex-col space-y-4 p-4">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.subLinks ? (
                        <div>
                          <span className="px-4 py-2 font-semibold text-muted-foreground">
                            {link.label}
                          </span>
                          <div className="flex flex-col space-y-2 pl-8 pt-2">
                            {link.subLinks.map((subLink) => (
                              <SheetClose key={subLink.href} asChild>
                                <Link
                                  href={subLink.href}
                                  className="text-foreground hover:text-primary text-lg"
                                >
                                  {subLink.label}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={link.href!}
                            className="px-4 py-2 font-semibold text-foreground text-lg"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </div>
                 <div className="p-4 mt-auto border-t border-border/50">
                    <Button asChild className="w-full">
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Donar</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
