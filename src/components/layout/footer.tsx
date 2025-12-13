import Link from 'next/link';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { Logo } from '@/components/icons';

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Logo className="h-10 w-10 text-primary" />
              <span className="font-bold text-2xl font-headline text-primary-foreground tracking-wider uppercase">Fundación La Luz</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Institución Prestadora de Servicios de Salud (IPS) sin ánimo de lucro, pionera en Latinoamérica en modelos de tratamiento de adicciones basados en evidencia científica.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services-locations" className="text-muted-foreground hover:text-primary transition-colors">Servicios y Sedes</Link></li>
              <li><Link href="/mental-health-assessment" className="text-muted-foreground hover:text-primary transition-colors">Herramientas IA</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
              <li><Link href="/financials" className="text-muted-foreground hover:text-primary transition-colors">Transparencia</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/FundacionLaLuz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="https://www.instagram.com/fundacionlaluz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="https://www.youtube.com/channel/UCa7xY9j-2_jZ5y-YjZq4-wQ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fundación La Luz. Todos los derechos reservados.</p>
           <p className="mt-2">Oficina Nacional: Calle 80 #116B-35, Bogotá (Barrio Alhambra)</p>
        </div>
      </div>
    </footer>
  );
}
