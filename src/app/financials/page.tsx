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
    <>
      <div className="relative h-64 w-full bg-primary">
        {financialsImage && (
             <Image
                src={financialsImage.imageUrl}
                alt={financialsImage.description}
                data-ai-hint={financialsImage.imageHint}
                fill
                className="object-cover"
              />
        )}
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-primary-foreground font-headline">Transparencia Financiera</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-headline">Nuestras Cuentas</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
                En LuzIA, creemos en la total transparencia como pilar de la confianza. Aquí puedes acceder a nuestros informes financieros anuales y ver cómo cada contribución se traduce en apoyo y recuperación para nuestra comunidad.
            </p>
        </div>
        
        <Accordion type="single" collapsible defaultValue="2023" className="w-full">
            {financialDocs.map(item => (
                <AccordionItem key={item.year} value={item.year}>
                    <AccordionTrigger className="text-2xl font-headline">
                        Año {item.year}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                            {item.documents.map(doc => (
                                <Card key={doc.name}>
                                    <CardHeader>
                                        <CardTitle className="text-lg">{doc.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                                            {/* PDF embedding can be complex and impact performance. 
                                                A proper implementation would use a library like react-pdf.
                                                For this example, we show a placeholder. */}
                                            <object data={doc.url} type="application/pdf" width="100%" height="100%">
                                                <p className="p-4 text-center text-sm text-muted-foreground">
                                                    Tu navegador no soporta la previsualización de PDF. 
                                                    Puedes <a href={doc.url} download className="underline text-primary">descargarlo aquí</a>.
                                                </p>
                                            </object>
                                        </div>
                                        <Button asChild className="w-full">
                                            <a href={doc.url} download>
                                                <Download className="mr-2 h-4 w-4"/>
                                                Descargar PDF
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </>
  );
}
