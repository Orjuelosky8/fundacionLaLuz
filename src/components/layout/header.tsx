'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  ChevronDown,
  X,
  BrainCircuit,
  Bot,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useChatbotModal } from '@/hooks/use-chatbot-modal';

import Image from 'next/image';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useChatbotModal();

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/services-locations', label: 'Programas' },
    {
      label: 'Herramientas IA',
      subLinks: [
        {
          label: 'Evaluación de Salud Mental',
          icon: Bot,
          description: 'Analiza tu estado de ánimo y estrés.',
          action: () => openModal('mental-health'),
          href: '#',
        },
        {
          href: '/wellness-recommendations',
          label: 'Planes de Bienestar',
          icon: BrainCircuit,
          description: 'Recomendaciones personalizadas.',
        },
        {
          href: '/substance-use-risk',
          label: 'Guía de Reducción de Riesgo',
          icon: ShieldCheck,
          description: 'Orientación sobre uso de sustancias.',
        },
      ],
    },
    { href: '/financials', label: 'Transparencia' },
    { href: '/contact', label: 'Contacto' },
  ];

  const renderDesktopLink = (link: any) => {
    const isActive = link.href === pathname || (link.subLinks && link.subLinks.some((sl: any) => sl.href && pathname.startsWith(sl.href)));
    
    if (link.subLinks) {
      return (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className={cn(
                'group relative flex items-center gap-1 text-base font-medium text-foreground transition-colors hover:text-primary focus:outline-none',
                isActive && 'text-primary'
              )}
            >
              {link.label}
              <ChevronDown className="h-4 w-4" />
               <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                isActive ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="w-64 bg-background border-border/50 rounded-lg shadow-lg p-2 mt-2"
              sideOffset={15}
            >
              {link.subLinks.map((subLink: any) => (
                <DropdownMenu.Item key={subLink.label} asChild>
                  <Link
                    href={subLink.href || '#'}
                    onClick={subLink.action ? (e) => { e.preventDefault(); subLink.action(); } : undefined}
                    className={cn(
                      'flex gap-3 items-center w-full p-3 text-sm text-foreground rounded-md transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none cursor-pointer',
                       subLink.href && pathname === subLink.href && 'bg-accent/80 text-accent-foreground'
                    )}
                  >
                    <subLink.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">{subLink.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {subLink.description}
                      </p>
                    </div>
                  </Link>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      );
    }

    return (
      <Link
        href={link.href!}
        className={cn(
            'group relative text-base font-medium text-foreground transition-colors hover:text-primary',
            isActive && 'text-primary'
        )}
      >
        {link.label}
        <span className={cn(
            "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
            isActive ? "w-full" : "w-0 group-hover:w-full"
        )} />
      </Link>
    );
  }

  const renderMobileLink = (link: any) => {
    if (link.subLinks) {
      return (
         <div>
            <span className="px-4 py-2 font-semibold text-muted-foreground text-base">
              {link.label}
            </span>
            <div className="flex flex-col space-y-1 pl-6 pt-2">
              {link.subLinks.map((subLink: any) => (
                <SheetClose key={subLink.label} asChild>
                  <button
                    onClick={subLink.action ? (e) => { e.preventDefault(); subLink.action(); } : () => {
                      const targetLink = document.createElement('a');
                      targetLink.href = subLink.href;
                      targetLink.click();
                    }}
                    className="text-foreground hover:text-primary text-lg text-left flex items-center gap-3 py-2"
                  >
                    <subLink.icon className="h-5 w-5 text-primary" />
                    <span>{subLink.label}</span>
                  </button>
                </SheetClose>
              ))}
            </div>
          </div>
      );
    }
    return (
      <SheetClose asChild>
        <Link
          href={link.href!}
          className='px-4 py-3 font-semibold text-foreground text-lg w-full text-left rounded-md hover:bg-muted'
        >
          {link.label}
        </Link>
      </SheetClose>
    );
  };


  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex h-20 items-center justify-between">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background w-full max-w-sm p-0">
              <SheetHeader className="p-4 border-b border-border/50">
                <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src="/logoFundacionLaLuz.png"
                      alt="Logo Fundacion la Luz"
                      width={100}
                      height={40}
                      priority
                    />
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="flex flex-col space-y-2 p-4">
                    {navLinks.map((link) => (
                        <div key={link.label}>
                          {renderMobileLink(link)}
                        </div>
                    ))}
                </div>
                <div className="p-4 mt-auto border-t border-border/50">
                  <Button asChild className="w-full">
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Donar
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="shrink-0">
            <Image
              src="/logoFundacionLaLuz.png"
              alt="Logo Fundacion la Luz"
              width={100}
              height={40}
              priority
            />
          </Link>

          <Button asChild variant="ghost" size="icon">
              <Link href="/contact">
                  <HeartHandshake className="h-6 w-6" />
                  <span className="sr-only">Donar</span>
              </Link>
          </Button>
        </div>
      </header>
      
      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
        <div className="bg-primary text-primary-foreground text-center text-xs py-1 px-4">
          Probablemente podemos ayudarte
        </div>
        <div className="container flex h-[68px] items-center">
           <Link href="/" className="mr-8">
            <Image
                src="/logoFundacionLaLuz.png"
                alt="Logo Fundacion la Luz"
                width={80}
                height={32}
                priority
            />
            </Link>
            <nav className="flex gap-8 items-center mx-auto">
              {navLinks.map((link) => (
                  <div key={link.label}>{renderDesktopLink(link)}</div>
              ))}
            </nav>
            <Button asChild>
                <Link href="/contact">Donar</Link>
            </Button>
        </div>
      </header>
    </>
  );
}
