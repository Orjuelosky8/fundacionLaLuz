'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

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
  { href: '/services-locations', label: 'Servicios y Sedes' },
  {
    label: 'Herramientas IA',
    subLinks: [
      {
        href: '/mental-health-assessment',
        label: 'Evaluación de Salud Mental',
      },
      { href: '/wellness-recommendations', label: 'Planes de Bienestar' },
      {
        href: '/substance-use-risk',
        label: 'Reducción de Riesgo',
      },
    ],
  },
  { href: '/financials', label: 'Transparencia' },
  { href: '/contact', label: 'Contacto' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block font-headline text-lg">
            LuzIA
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) =>
            link.subLinks ? (
              <DropdownMenu.Root key={link.label}>
                <DropdownMenu.Trigger asChild>
                  <button
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none',
                      link.subLinks.some((sl) => pathname === sl.href) &&
                        'text-foreground'
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="w-48 bg-background border rounded-md shadow-lg">
                  {link.subLinks.map((subLink) => (
                    <DropdownMenu.Item key={subLink.href} asChild>
                      <Link
                        href={subLink.href}
                        className={cn(
                          'block px-4 py-2 text-sm text-muted-foreground hover:bg-muted',
                          pathname === subLink.href &&
                            'text-foreground bg-muted'
                        )}
                      >
                        {subLink.label}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className={cn(
                  'text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                  pathname === link.href && 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Logo className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg">LuzIA</span>
                </Link>
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.subLinks ? (
                      <div>
                        <span className="px-4 py-2 font-semibold text-foreground">
                          {link.label}
                        </span>
                        <div className="flex flex-col space-y-2 pl-8 pt-2">
                          {link.subLinks.map((subLink) => (
                            <SheetClose key={subLink.href} asChild>
                              <Link
                                href={subLink.href}
                                className="text-muted-foreground hover:text-foreground"
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
                          className="px-4 py-2 font-semibold text-foreground"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
