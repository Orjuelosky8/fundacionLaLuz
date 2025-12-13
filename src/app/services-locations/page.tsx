import Image from 'next/image';
import { BrainCircuit, Bot, ShieldCheck, MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { locations } from '@/lib/data';
import { Button } from '@/components/ui/button';

const servicesImage = PlaceHolderImages.find((img) => img.id === 'services-header');

export default function ServicesLocationsPage() {
  return (
    <>
      <div className="relative h-64 w-full bg-primary">
        {servicesImage && (
             <Image
                src={servicesImage.imageUrl}
                alt={servicesImage.description}
                data-ai-hint={servicesImage.imageHint}
                fill
                className="object-cover"
              />
        )}
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-primary-foreground font-headline">Servicios y Sedes</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Services Section */}
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 font-headline">Nuestros Servicios Digitales</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Aprovechamos la tecnología de inteligencia artificial para ofrecer apoyo accesible y personalizado, disponible en cualquier momento y lugar.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader className="items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <BrainCircuit className="h-8 w-8" />
                        </div>
                        <CardTitle>Evaluación de Salud Mental</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Utiliza nuestra herramienta de IA para una evaluación inicial de tu estado de ánimo, estrés y ansiedad. Recibe sugerencias y recursos para dar el siguiente paso.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader className="items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <Bot className="h-8 w-8" />
                        </div>
                        <CardTitle>Planes de Bienestar Personalizados</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Obtén recomendaciones de telemedicina, nutrición y ejercicio adaptadas a tus necesidades y metas de bienestar, generadas por nuestra IA.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader className="items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <CardTitle>Reducción de Riesgo de Sustancias</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Herramienta de IA que ofrece guía y recursos para la reducción de riesgos asociados al uso de sustancias, para individuos y sus familias.</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        {/* Locations Section */}
        <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 font-headline">Nuestras Sedes Físicas</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Encuentra un espacio seguro y profesional en nuestras sedes. Estamos listos para recibirte y acompañarte en tu proceso.
                </p>
            </div>
            <div className="space-y-8">
                {locations.map((location) => (
                    <Card key={location.name} className="overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                             <div className="md:col-span-2 p-6">
                                <CardTitle className="text-2xl font-headline mb-4">{location.name}</CardTitle>
                                <div className="space-y-3 text-muted-foreground">
                                    <p className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-primary"/>{location.address}</p>
                                    <p className="flex items-center"><Phone className="w-5 h-5 mr-3 text-primary"/>{location.phone}</p>
                                    <p className="flex items-center"><Clock className="w-5 h-5 mr-3 text-primary"/>{location.hours}</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-6 flex flex-col justify-center items-center md:items-start">
                                <h3 className="font-semibold mb-2">¿Cómo llegar?</h3>
                                <p className="text-sm text-muted-foreground mb-4 text-center md:text-left">Obtén la dirección en tu aplicación de mapas.</p>
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
    </>
  );
}