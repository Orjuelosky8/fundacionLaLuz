
'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

const navigationLinks = [
    { label: "Servicios y Sedes", href: "/services-locations" },
    { label: "Evaluación IA", href: "/mental-health-assessment" },
    { label: "Contacto", href: "/contact" },
    { label: "Transparencia", href: "/financials" },
];

const foundationLinks = [
    { label: "Nuestra Historia", href: "/#about" },
    { label: "Donar (Plan Padrino)", href: "/contact" },
    { label: "Blog", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos de Servicio", href: "#" },
];


export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Desktop Layout: 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8 text-left">
          {/* Left Column */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navegación</h3>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map(link => (
                <li key={`${link.label}-${link.href}`}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          
          {/* Center Column */}
          <div className="flex flex-col items-center text-center">
             <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                  src="/logoFundacionLaLuz.png"
                  alt="Logo Fundacion la Luz"
                  width={80}
                  height={32}
                  priority
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
             Una iniciativa de la Fundación La Luz para brindar apoyo accesible, confidencial y basado en tecnología para la salud mental y la rehabilitación.
            </p>
             <div className="flex space-x-6 mt-6">
              <Link href="https://www.facebook.com/FundacionLaLuz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"><Facebook className="h-6 w-6" /></Link>
              <Link href="https://www.instagram.com/fundacionlaluz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"><Instagram className="h-6 w-6" /></Link>
              <Link href="https://www.youtube.com/channel/UCa7xY9j-2_jZ5y-YjZq4-wQ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"><Youtube className="h-6 w-6" /></Link>
            </div>
          </div>
          
          {/* Right Column */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Nosotros</h3>
            <ul className="space-y-2 text-sm">
              {foundationLinks.map(link => (
                <li key={`${link.label}-${link.href}`}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Layout: Centered */}
        <div className="md:hidden flex flex-col items-center text-center">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                  src="/logoFundacionLaLuz.png"
                  alt="Logo Fundacion la Luz"
                  width={80}
                  height={32}
                  priority
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
             Una iniciativa de la Fundación La Luz para brindar apoyo accesible, confidencial y basado en tecnología para la salud mental y la rehabilitación.
            </p>
            <div className="flex space-x-6 mt-6">
              <Link href="https://www.facebook.com/FundacionLaLuz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"><Facebook className="h-6 w-6" /></Link>
              <Link href="https://www.instagram.com/fundacionlaluz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"><Instagram className="h-6 w-6" /></Link>
              <Link href="https://www.youtube.com/channel/UCa7xY9j-2_jZ5y-YjZq4-wQ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"><Youtube className="h-6 w-6" /></Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8 w-full max-w-sm">
                <div>
                    <h3 className="font-semibold mb-4 text-foreground">Navegación</h3>
                    <ul className="space-y-2 text-sm">
                        {navigationLinks.map(link => (
                            <li key={`${link.label}-${link.href}`}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4 text-foreground">Nosotros</h3>
                    <ul className="space-y-2 text-sm">
                        {foundationLinks.map(link => (
                            <li key={`${link.label}-${link.href}`}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fundación La Luz. Restaurando Vidas, Construyendo Futuros.</p>
           <p className="mt-2">Oficina Nacional: Calle 80 #116B-35, Bogotá (Barrio Alhambra)</p>
        </div>
      </div>
    </footer>
  );
}
