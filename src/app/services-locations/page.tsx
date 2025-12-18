import Image from 'next/image';
import { GitBranch, Activity, Handshake, Brain, Syringe, Users, MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { locations } from '@/lib/data';
import { Button } from '@/components/ui/button';

const services = [
    {
        icon: GitBranch,
        title: "Rehabilitación Residencial",
        description: "Programas de internamiento 24/7 en un entorno controlado y seguro, con supervisión médica y terapéutica constante para interrumpir el consumo.",
    },
    {
        icon: Activity,
        title: "Tratamiento Ambulatorio",
        description: "Programas flexibles que permiten continuar la rehabilitación sin internamiento completo, asistiendo a sesiones terapéuticas y de consejería regulares.",
    },
    {
        icon: Brain,
        title: "Consulta Externa en Salud Mental",
        description: "Servicios especializados en psicología, psiquiatría y toxicología, disponibles de forma presencial o por telemedicina para pacientes y familias.",
    },
    {
        icon: Syringe,
        title: "Pruebas Toxicológicas",
        description: "Realización de pruebas de laboratorio que detectan más de 20 sustancias, apoyando el diagnóstico y monitoreo de la abstinencia.",
    },
    {
        icon: Users,
        title: "Apoyo Psicoterapéutico y Familiar",
        description: "Sesiones individuales y grupales para pacientes y familiares, junto a terapia ocupacional para reestructurar proyectos de vida saludables.",
    },
    {
        icon: Handshake,
        title: "Seguimiento Post-Rehabilitación",
        description: "Programas de apoyo continuo tras el egreso para facilitar la transición, prevenir recaídas y mantener la sobriedad a largo plazo.",
    },
];


export default function ServicesLocationsPage() {
  return (
    <div className="bg-background">
      <div className="relative h-80 w-full">
         <Image
            src="/programas/HeaderProgramas.png"
            alt="Programas y Sedes Header"
            fill
            className="object-cover"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30 flex items-center justify-center">
            <h1 className="text-6xl font-headline text-primary-foreground font-bold tracking-wider uppercase">Programas y Sedes</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Services Section */}
        <section className="mb-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-headline font-bold mb-4 text-primary">Un Modelo de Atención Integral</h2>
                <p className="text-muted-foreground max-w-4xl mx-auto">
                    Ofrecemos una atención que abarca desde la prevención hasta la intervención terapéutica y la reintegración social, con un modelo clínico-comunitario basado en evidencia científica y un profundo enfoque humano.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                     <Card key={service.title} className="bg-card/90 border-border hover:border-primary transition-all duration-300 flex flex-col text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
                        <CardHeader className="items-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                <service.icon className="h-8 w-8" />
                            </div>
                            <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        {/* Locations Section */}
        <section>
            <div className="text-center mb-16">
                <h2 className="text-4xl font-headline font-bold mb-4 text-primary">Nuestras Sedes de Rehabilitación</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Contamos con tres sedes debidamente habilitadas por el Ministerio de Salud, donde atendemos tanto a pacientes particulares como a personas remitidas por EPS.
                </p>
            </div>
            <div className="space-y-8">
                {locations.map((location) => (
                    <Card key={location.name} className="overflow-hidden shadow-lg bg-card/90 border-border transition-shadow hover:shadow-primary/20">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                             <div className="md:col-span-2 p-8">
                                <CardTitle className="text-3xl font-headline text-foreground mb-4">{location.name}</CardTitle>
                                <div className="space-y-3 text-muted-foreground">
                                    <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>{location.address}</p>
                                    <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary"/>{location.phone}</p>
                                    <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary"/>{location.hours}</p>
                                </div>
                            </div>
                            <div className="bg-secondary/10 p-8 flex flex-col justify-center items-start">
                                <h3 className="font-semibold text-lg text-foreground mb-2">¿Cómo llegar?</h3>
                                <p className="text-sm text-muted-foreground mb-4">Obtén la dirección en tu aplicación de mapas.</p>
                                <Button asChild>
                                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`} target="_blank" rel="noopener noreferrer">
                                        Abrir en Mapas
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}
