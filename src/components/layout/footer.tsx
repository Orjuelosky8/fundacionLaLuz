import Link from 'next/link';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { Logo } from '@/components/icons';

const footerLinks = {
  "Navegación": [
    { label: "Servicios y Sedes", href: "/services-locations" },
    { label: "Herramientas IA", href: "/mental-health-assessment" },
    { label: "Contacto", href: "/contact" },
    { label: "Transparencia", href: "/financials" },
  ],
  "Fundación": [
      { label: "Nuestra Historia", href: "/" },
      { label: "Donar", href: "/contact" },
      { label: "Blog", href: "#" },
  ],
  "Legal": [
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos de Servicio", href: "#" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="flex flex-col col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Logo className="h-10 w-10 text-primary" />
              <span className="font-bold text-2xl font-headline text-foreground tracking-wider uppercase">LuzIA</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Plataforma de inteligencia artificial de la Fundación La Luz para el apoyo en salud mental y la rehabilitación de adicciones.
            </p>
             <div className="flex space-x-4 mt-6">
              <Link href="https://www.facebook.com/FundacionLaLuz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="https://www.instagram.com/fundacionlaluz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="https://www.youtube.com/channel/UCa7xY9j-2_jZ5y-YjZq4-wQ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-6 w-6" /></Link>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4 text-foreground">{title}</h3>
              <ul className="space-y-2 text-sm">
                {links.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fundación La Luz. Todos los derechos reservados. Una iniciativa para un futuro más brillante.</p>
           <p className="mt-2">Oficina Nacional: Calle 80 #116B-35, Bogotá (Barrio Alhambra)</p>
        </div>
      </div>
    </footer>
  );
}
