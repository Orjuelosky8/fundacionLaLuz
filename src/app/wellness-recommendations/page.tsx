'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import { Loader2, Sparkles, Stethoscope, Apple, Dumbbell } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { getWellnessRecommendations } from '@/lib/actions';
import type { PersonalizedWellnessRecommendationsOutput } from '@/ai/flows/offer-personalized-wellness-recommendations';

const formSchema = z.object({
  healthData: z.string().min(50, { message: 'Por favor, proporciona datos de salud con al menos 50 caracteres.' }),
  wellnessGoals: z.string().min(10, { message: 'Tus objetivos deben tener al menos 10 caracteres.' }),
});

export default function WellnessRecommendationsPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedWellnessRecommendationsOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      healthData: '',
      wellnessGoals: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    const response = await getWellnessRecommendations(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error al Generar Plan',
        description: response.error,
      });
    }
    setIsLoading(false);
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-4 text-primary">Plan de Bienestar con IA</h1>
        <p className="text-lg text-muted-foreground">
          Describe tu información de salud y tus metas. Nuestra IA creará un plan con recomendaciones de telemedicina, nutrición y ejercicio para ti.
        </p>
      </div>

      <Card className="shadow-lg bg-card/90">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Crea tu Plan de Bienestar</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="healthData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Datos de Salud</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe tu historial médico, condiciones actuales, estilo de vida (sueño, dieta), alergias, etc."
                        className="resize-y min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="wellnessGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mis Metas de Bienestar</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ej: Quiero reducir el estrés, mejorar mi calidad de sueño y tener más energía durante el día."
                        className="resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generando Recomendaciones...</>
                ) : (
                  <><Sparkles className="mr-2 h-4 w-4" /> Generar Mi Plan con IA</>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {result && (
        <div className="mt-12 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-center font-headline mb-8">Tu Plan de Bienestar Personalizado</h2>
            <Accordion type="single" collapsible defaultValue="telemedicine" className="w-full space-y-2">
                <AccordionItem value="telemedicine" className="bg-card/90 border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                        <div className='flex items-center gap-3'>
                            <Stethoscope className="text-primary h-6 w-6"/>
                            Telemedicina
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="prose prose-sm max-w-none text-foreground p-4 pt-0">
                        <p>{result.telemedicineRecommendations}</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="nutrition" className="bg-card/90 border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                        <div className='flex items-center gap-3'>
                           <Apple className="text-accent h-6 w-6"/>
                           Nutrición
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="prose prose-sm max-w-none text-foreground p-4 pt-0">
                        <p>{result.nutritionRecommendations}</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="exercise" className="bg-card/90 border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                       <div className='flex items-center gap-3'>
                           <Dumbbell className="text-secondary h-6 w-6"/>
                            Ejercicio
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="prose prose-sm max-w-none text-foreground p-4 pt-0">
                        <p>{result.exerciseRecommendations}</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      )}
    </div>
  );
}
