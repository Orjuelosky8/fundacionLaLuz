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
  Building,
  Target,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end text-center pb-20 md:pb-32 px-4">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/20">
            Fundación La Luz
          </Badge>
          <h1 className="font-headline text-6xl font-bold md:text-8xl text-primary-foreground uppercase tracking-wider">
            Restaurando Vidas, Construyendo Futuros
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-muted-foreground">
            Pioneros en Latinoamérica con más de 27 años de trayectoria en la
            rehabilitación de adicciones y el cuidado de la salud mental.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/services-locations">Nuestros Programas</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">
              <Link href="/contact">Habla con nosotros</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* History and Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-5xl text-primary">
              Historia y Misión
            </h2>
            <p className="text-muted-foreground">
              La Fundación La Luz es una Institución Prestadora de Servicios de
              Salud (IPS) de carácter privado, sin ánimo de lucro, con más de 27
              años de trayectoria en Colombia. Fundada a mediados de la década
              de 1990, ha sido pionera en Latinoamérica en la implementación de
              modelos de tratamiento de adicciones basados en evidencia
              científica.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
              “Creer en cada uno de nuestros pacientes, dedicarles el tiempo
              necesario y proporcionarles las herramientas que necesitan para
              desarrollar su potencial y descubrir lo mejor en ellos”.
            </blockquote>
            <p className="text-muted-foreground">
              Esta misión evidencia un enfoque humanizado, donde cada paciente
              es valorado de forma individual, recibiendo acompañamiento
              cercano y las herramientas para su crecimiento personal.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transform rotate-3 translate-y-4">
               <Image src="https://picsum.photos/seed/history1/300/400" alt="Hope and recovery" fill className="object-cover"/>
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transform -rotate-2 -translate-y-4">
               <Image src="https://picsum.photos/seed/history2/300/400" alt="Building a new future" fill className="object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives and Vision Section */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-5xl text-primary mb-4">
              Objetivos y Visión a Futuro
            </h2>
            <p className="max-w-4xl mx-auto text-muted-foreground mb-12">
              Brindar soluciones reales e integrales de alta calidad tanto en la prevención de las adicciones como en su intervención terapéutica, consolidándonos como líderes innovadores en rehabilitación y salud mental a nivel nacional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
                    <CardHeader>
                        <Target className="h-10 w-10 text-primary mb-2"/>
                        <CardTitle className="font-headline text-2xl">Atención Integral</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Garantizar una atención clínica, psicológica y social que cumpla con las normativas de salud pública, reconociendo la adicción como una enfermedad.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
                    <CardHeader>
                        <Bot className="h-10 w-10 text-primary mb-2"/>
                        <CardTitle className="font-headline text-2xl">Innovación Tecnológica</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Incorporar herramientas como IA, plataformas virtuales y neurotecnologías para una atención más personalizada, oportuna y preventiva.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
                    <CardHeader>
                        <Users className="h-10 w-10 text-primary mb-2"/>
                        <CardTitle className="font-headline text-2xl">Liderazgo y Expansión</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Ampliar nuestro alcance e impacto, manteniéndonos a la vanguardia en tratamientos y formando continuamente a nuestro equipo interdisciplinario.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                 <h2 className="font-headline text-5xl text-primary mb-4">
                  Impacto Social y Poblaciones Objetivo
                </h2>
                <p className="max-w-4xl mx-auto text-muted-foreground">
                    Abordamos la adicción desde un enfoque de salud pública, derechos humanos y reintegración comunitaria, con programas específicos para menores, mujeres, hombres y pacientes con doble diagnóstico.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 mb-4">
                        <div className="absolute inset-0 bg-primary rounded-full opacity-10"></div>
                        <div className="absolute inset-2 bg-primary rounded-full opacity-20"></div>
                        <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center">
                            <HeartHandshake className="w-10 h-10 text-primary-foreground"/>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Inclusión Familiar</h3>
                    <p className="text-muted-foreground text-sm">Capacitamos y asesoramos a las familias para que se conviertan en un sostén activo en la recuperación.</p>
                </div>
                 <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 mb-4">
                        <div className="absolute inset-0 bg-primary rounded-full opacity-10"></div>
                        <div className="absolute inset-2 bg-primary rounded-full opacity-20"></div>
                        <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center">
                            <ShieldCheck className="w-10 h-10 text-primary-foreground"/>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Reducción del Estigma</h3>
                    <p className="text-muted-foreground text-sm">Contribuimos a cambiar la percepción de la adicción, fomentando la compasión y la búsqueda de ayuda.</p>
                </div>
                 <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 mb-4">
                        <div className="absolute inset-0 bg-primary rounded-full opacity-10"></div>
                        <div className="absolute inset-2 bg-primary rounded-full opacity-20"></div>
                        <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center">
                            <Users className="w-10 h-10 text-primary-foreground"/>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Reintegración Social</h3>
                    <p className="text-muted-foreground text-sm">Apoyamos a los pacientes a retomar sus estudios, empleos y a establecer redes de apoyo positivas.</p>
                </div>
                 <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 mb-4">
                        <div className="absolute inset-0 bg-primary rounded-full opacity-10"></div>
                        <div className="absolute inset-2 bg-primary rounded-full opacity-20"></div>
                        <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center">
                            <Building className="w-10 h-10 text-primary-foreground"/>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Plan Padrino</h3>
                    <p className="text-muted-foreground text-sm">Invitamos a la comunidad a apadrinar tratamientos, convirtiéndose en faros de esperanza para quienes lo necesitan.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-5xl font-bold text-primary-foreground">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Tu camino hacia el bienestar comienza aquí. Contacta con nuestros
            especialistas o explora nuestras herramientas de IA hoy mismo.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
