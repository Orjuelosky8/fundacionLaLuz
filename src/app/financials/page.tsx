import Image from 'next/image';
import { Download } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const financialsImage = PlaceHolderImages.find((img) => img.id === 'financials-header');

const financialDocs = [
  {
    year: '2023',
    documents: [
      { name: 'Informe Anual 2023', url: '/placeholder.pdf' },
      { name: 'Estados Financieros Auditados 2023', url: '/placeholder.pdf' },
    ],
  },
  {
    year: '2022',
    documents: [
      { name: 'Informe Anual 2022', url: '/placeholder.pdf' },
      { name: 'Estados Financieros Auditados 2022', url: '/placeholder.pdf' },
    ],
  },
  {
    year: '2021',
    documents: [
      { name: 'Informe Anual 2021', url: '/placeholder.pdf' },
      { name: 'Estados Financieros Auditados 2021', url: '/placeholder.pdf' },
    ],
  },
];


export default function FinancialsPage() {
  return (
    <div className="bg-background">
      <div className="relative h-80 w-full">
        {financialsImage && (
             <Image
                src={financialsImage.imageUrl}
                alt={financialsImage.description}
                data-ai-hint={financialsImage.imageHint}
                fill
                className="object-cover"
              />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30 flex items-center justify-center">
            <h1 className="text-6xl font-headline text-primary-foreground font-bold tracking-wider uppercase">Transparencia Financiera</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4 text-primary">Nuestras Cuentas</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
                En Fundación La Luz, creemos en la total transparencia como pilar de la confianza. La gestión responsable de los recursos es fundamental para nuestro compromiso con pacientes, familias y aliados. Aquí puedes acceder a nuestros informes financieros y ver cómo cada contribución se traduce en restaurar vidas y construir futuros.
            </p>
        </div>
        
        <Accordion type="single" collapsible defaultValue="2023" className="w-full space-y-4">
            {financialDocs.map(item => (
                <AccordionItem key={item.year} value={item.year} className="bg-card/50 border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-3xl font-headline text-foreground hover:no-underline">
                        Año {item.year}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {item.documents.map(doc => (
                                <Card key={doc.name} className="bg-secondary/30 border-border">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-foreground">{doc.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <a href={doc.url} download className="block aspect-video bg-black/20 rounded-md mb-4 flex items-center justify-center group relative overflow-hidden">
                                           <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center flex-col gap-2">
                                                <Download className="w-10 h-10 text-primary transform group-hover:scale-110 transition-transform duration-300"/>
                                                <span className="text-primary-foreground font-semibold">Descargar</span>
                                           </div>
                                            <object data={doc.url} type="application/pdf" width="100%" height="100%">
                                                <p className="p-4 text-center text-sm text-muted-foreground">
                                                    Previsualización no disponible.
                                                </p>
                                            </object>
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
