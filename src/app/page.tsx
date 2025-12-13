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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { testimonials } from '@/lib/data';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
const familyImage = PlaceHolderImages.find((img) => img.id === 'family-persona');
const treatmentImage = PlaceHolderImages.find((img) => img.id === 'treatment-persona');
const allyImage = PlaceHolderImages.find((img) => img.id === 'ally-persona');

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
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
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="font-headline text-5xl font-bold md:text-7xl">
            Luz en tu camino
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Herramientas de IA para el bienestar mental y la recuperación.
            Confianza, estructura y apoyo a tu alcance.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg">
              <Link href="/services-locations">Descubre Nuestros Servicios</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Habla con nosotros</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-4xl font-bold text-foreground">
            Encuentra el apoyo que necesitas
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center">
                {familyImage && (
                  <div className="relative mb-4 h-40 w-full">
                    <Image
                      src={familyImage.imageUrl}
                      alt={familyImage.description}
                      data-ai-hint={familyImage.imageHint}
                      fill
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                )}
                <HeartHandshake className="mb-2 h-12 w-12 text-primary" />
                <CardTitle className="font-headline text-2xl">
                  Soy Familiar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6">
                  Recursos y guía para apoyar a tus seres queridos en su proceso
                  de recuperación.
                </p>
                <Button asChild variant="outline">
                  <Link href="/substance-use-risk">Guía Familiar</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center">
                {treatmentImage && (
                  <div className="relative mb-4 h-40 w-full">
                    <Image
                      src={treatmentImage.imageUrl}
                      alt={treatmentImage.description}
                      data-ai-hint={treatmentImage.imageHint}
                      fill
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                )}
                <Stethoscope className="mb-2 h-12 w-12 text-primary" />
                <CardTitle className="font-headline text-2xl">
                  Busco Tratamiento
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6">
                  Evalúa tu estado y descubre planes personalizados para tu
                  bienestar y salud mental.
                </p>
                <Button asChild variant="outline">
                  <Link href="/mental-health-assessment">Autoevaluación</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center">
                {allyImage && (
                  <div className="relative mb-4 h-40 w-full">
                    <Image
                      src={allyImage.imageUrl}
                      alt={allyImage.description}
                      data-ai-hint={allyImage.imageHint}
                      fill
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                )}
                <Users className="mb-2 h-12 w-12 text-primary" />
                <CardTitle className="font-headline text-2xl">
                  Soy EPS/Aliado
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6">
                  Colabora con nosotros para extender el alcance de nuestros
                  programas de salud.
                </p>
                <Button asChild variant="outline">
                  <Link href="/contact">Contacto Institucional</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge
            className="mb-4 bg-yellow-400 text-yellow-900"
            style={{
              backgroundColor: 'hsl(45 87% 63% / 0.2)',
              color: 'hsl(45 87% 30%)',
            }}
          >
            Nuestras Herramientas IA
          </Badge>
          <h2 className="mb-12 font-headline text-4xl font-bold text-foreground">
            Tecnología con propósito humano
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BrainCircuit className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Evaluación de Salud Mental
              </h3>
              <p>
                Analiza tu estado de ánimo y recibe sugerencias de recursos
                apropiados para ti.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Bot className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Plataforma de Bienestar
              </h3>
              <p>
                Recomendaciones personalizadas de telemedicina, nutrición y
                ejercicio.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Reducción de Riesgo
              </h3>
              <p>
                Guía y recursos sobre el uso de sustancias para individuos y
                familias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-4xl font-bold text-foreground">
            Historias que inspiran
          </h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="mx-auto w-full max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <Image
                          src={testimonial.avatarUrl}
                          alt={`Avatar of ${testimonial.name}`}
                          width={80}
                          height={80}
                          className="mb-4 rounded-full"
                          data-ai-hint="person face"
                        />
                        <p className="mb-4 font-body italic text-foreground">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-4xl font-bold text-secondary-foreground">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-foreground">
            Tu camino hacia el bienestar comienza aquí. Contacta con nuestros
            especialistas o explora nuestras herramientas de IA hoy mismo.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
