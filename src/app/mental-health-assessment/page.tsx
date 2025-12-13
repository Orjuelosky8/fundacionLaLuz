'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import { Loader2, Sparkles, ClipboardCheck } from 'lucide-react';

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
import { useToast } from '@/hooks/use-toast';
import { runMentalStateAssessment } from '@/lib/actions';
import type { AssessMentalStateOutput } from '@/ai/flows/assess-mental-state-and-suggest-resources';

const formSchema = z.object({
  description: z.string().min(50, {
    message: 'Por favor, describe tu situación con al menos 50 caracteres para una evaluación precisa.',
  }),
});

export default function MentalHealthAssessmentPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AssessMentalStateOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    const response = await runMentalStateAssessment(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error en la Evaluación',
        description: response.error,
      });
    }

    setIsLoading(false);
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-4 text-primary">Evaluación de Salud Mental con IA</h1>
        <p className="text-lg text-muted-foreground">
          Describe cómo te sientes, tus niveles de estrés, ansiedad o cualquier otra preocupación. Nuestra IA te proporcionará una evaluación inicial y sugerencias de apoyo.
        </p>
        <p className="text-sm text-amber-700 mt-2">
            <strong>Importante:</strong> Esta herramienta no reemplaza el diagnóstico de un profesional. Es un primer paso para entender mejor tu estado actual.
        </p>
      </div>

      <Card className="shadow-lg bg-card/90">
        <CardHeader>
            <CardTitle className="text-2xl font-headline">Describe tu estado actual</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mi situación es...</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ej: Últimamente me he sentido muy abrumado en el trabajo, me cuesta dormir y no tengo energía para hacer las cosas que antes disfrutaba..."
                        className="resize-y min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analizando...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Obtener Evaluación de IA
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {result && (
        <div className="mt-12 space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-center font-headline">Resultados de tu Evaluación</h2>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><ClipboardCheck className="text-primary"/> Evaluación de la IA</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-foreground">
                    <p>{result.assessment}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Sparkles className="text-accent"/> Sugerencias y Recursos</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-foreground">
                     <p>{result.suggestions}</p>
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
