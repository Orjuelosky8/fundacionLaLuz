import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import { Logo } from '@/components/icons';

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-headline">LuzIA</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Ofreciendo luz y apoyo en el camino hacia el bienestar mental.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services-locations" className="text-muted-foreground hover:text-primary">Servicios</Link></li>
              <li><Link href="/mental-health-assessment" className="text-muted-foreground hover:text-primary">Herramientas IA</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
              <li><Link href="/financials" className="text-muted-foreground hover:text-primary">Transparencia</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LuzIA Foundation. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
