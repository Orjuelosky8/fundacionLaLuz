'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeartHandshake,
  Stethoscope,
  Users,
  BrainCircuit,
  Bot,
  ShieldCheck,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { testimonials } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

const personas = [
  {
    id: 'family-persona',
    title: 'Soy Familiar o Amigo',
    description: 'Encuentra recursos y obtén orientación para apoyar a tu ser querido en su proceso de recuperación.',
    icon: Users,
    href: '/contact',
    backContent: 'La Fundación La Luz ofrece grupos de apoyo, terapia familiar y talleres educativos para que aprendas a ser un pilar fundamental en la recuperación de tu ser querido, cuidando también de tu propio bienestar.'
  },
  {
    id: 'treatment-persona',
    title: 'Busco Tratamiento',
    description: 'Explora nuestros programas y utiliza nuestras herramientas de IA para dar el primer paso hacia tu bienestar.',
    icon: HeartHandshake,
    href: '/services-locations',
    backContent: 'Ofrecemos un camino personalizado hacia tu bienestar, combinando terapias de vanguardia, apoyo médico y un entorno seguro. La evaluación inicial con IA es tu primer paso, confidencial y sin costo.'
  },
  {
    id: 'ally-persona',
    title: 'Soy Aliado o Empresa',
    description: 'Conoce cómo podemos colaborar para ampliar el alcance de nuestros tratamientos y programas de prevención.',
    icon: Stethoscope,
    href: '/contact',
    backContent: 'Colabora con nosotros a través de alianzas corporativas, programas de voluntariado o el Plan Padrino. Juntos, podemos amplificar el impacto y construir futuros llenos de esperanza para más personas.'
  },
]

const InfiniteTestimonials = () => {
    return (
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex animate-scroll">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <Card key={index} className="flex flex-col justify-between bg-card border-t-4 border-secondary mx-4 w-[350px] shrink-0">
                        <CardContent className="pt-6">
                            <blockquote className="text-foreground text-lg">"{testimonial.quote}"</blockquote>
                        </CardContent>
                        <CardHeader className="flex-row items-center gap-4 pt-4">
                            <Avatar className="h-14 w-14 border-2 border-primary">
                                <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};


export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-center px-4 overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover scale-105"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/70 to-background" />
        
        <div className="relative z-10 flex flex-col items-center">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
              LuzIA
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground font-light tracking-wide">
             Tu Aliado Inteligente en Salud Mental y Rehabilitación
            </p>
            <p className="mt-2 max-w-4xl text-md md:text-lg text-muted-foreground">
              Una iniciativa de la <strong className="font-semibold text-primary">Fundación La Luz</strong> para brindar apoyo accesible, confidencial y basado en tecnología.
            </p>
            <div className="mt-10 flex gap-4">
              <Button asChild size="lg">
                <Link href="/mental-health-assessment">Prueba la Evaluación IA</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services-locations">Nuestros Programas</Link>
              </Button>
            </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-16 md:py-24 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
            Un Camino para Cada Necesidad
          </h2>
           <p className="text-muted-foreground text-lg">
              Ya sea que busques ayuda para ti, para un ser querido, o desees colaborar con nuestra causa, tenemos un punto de partida para ti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona) => {
             const personaImage = PlaceHolderImages.find((img) => img.id === persona.id);
             return (
              <div key={persona.id} className="group perspective-1000">
                <div className="relative h-full w-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  {/* Front of Card */}
                  <div className="absolute w-full h-full backface-hidden">
                    <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:shadow-primary/10">
                      <div className="relative h-64 w-full">
                        {personaImage && (
                          <Image
                            src={personaImage.imageUrl}
                            alt={persona.title}
                            fill
                            className="object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6">
                          <div className="p-3 bg-background/80 rounded-lg backdrop-blur-sm inline-block mb-2">
                            <persona.icon className="h-8 w-8 text-primary"/>
                          </div>
                          <h3 className="font-headline text-3xl text-white">{persona.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-6 bg-card">
                        <p className="text-muted-foreground">{persona.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Back of Card */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <Card className="h-full bg-primary text-primary-foreground flex flex-col justify-center items-center p-6">
                      <CardHeader>
                          <CardTitle className="text-2xl text-center font-headline">{persona.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-center text-primary-foreground/90">{persona.backContent}</p>
                      </CardContent>
                      <Button variant="secondary" asChild><Link href={persona.href}>Saber Más</Link></Button>
                    </Card>
                  </div>
                </div>
              </div>
          )})}
        </div>
      </section>

       {/* AI Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
              Innovación y Tecnología a tu Servicio
            </h2>
            <p className="text-muted-foreground text-lg">
              Integramos inteligencia artificial para ofrecerte herramientas de apoyo inmediatas y personalizadas, disponibles 24/7 de forma anónima y segura.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300 border-t-4 border-primary">
              <CardHeader className="text-center items-center">
                  <div className="p-4 bg-primary/10 rounded-full inline-block">
                    <Bot className="h-8 w-8 text-primary"/>
                  </div>
                  <CardTitle className="font-headline text-2xl pt-2">Evaluación de Salud Mental</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                  <p className="text-muted-foreground">Analiza tu estado de ánimo y niveles de estrés a través de una conversación guiada por IA para obtener una orientación inicial.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300 border-t-4 border-accent">
              <CardHeader className="text-center items-center">
                   <div className="p-4 bg-accent/10 rounded-full inline-block">
                    <BrainCircuit className="h-8 w-8 text-accent"/>
                  </div>
                  <CardTitle className="font-headline text-2xl pt-2">Planes de Bienestar</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                  <p className="text-muted-foreground">Recibe recomendaciones personalizadas de nutrición, ejercicio y telemedicina según tus metas y estado de salud.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300 border-t-4 border-luz-yellow">
              <CardHeader className="text-center items-center">
                  <div className="p-4 bg-luz-yellow/10 rounded-full inline-block">
                    <ShieldCheck className="h-8 w-8 text-luz-yellow"/>
                  </div>
                  <CardTitle className="font-headline text-2xl pt-2">Guía de Reducción de Riesgo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                  <p className="text-muted-foreground">Obtén orientación y recursos sobre el consumo de sustancias para ti o para un familiar, de forma confidencial.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
              Historias que Inspiran
            </h2>
             <p className="text-muted-foreground text-lg">
                El impacto de la Fundación La Luz, contado por quienes han formado parte de nuestra comunidad.
            </p>
          </div>
          <InfiniteTestimonials />
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Tu camino hacia el bienestar comienza aquí. Contacta con nuestros
            especialistas o explora nuestras herramientas de IA hoy mismo.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/contact">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
