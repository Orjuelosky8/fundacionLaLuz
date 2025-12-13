
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
    message:
      'Por favor, describe tu situación con al menos 50 caracteres para una evaluación precisa.',
  }),
});

export default function MentalHealthAssessmentForm() {
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
    <>
      <div className="p-1 mb-4 border border-amber-300 bg-amber-50 rounded-md">
         <p className="text-xs text-amber-800">
            <strong>Importante:</strong> Esta herramienta no reemplaza el diagnóstico de un profesional. Es un primer paso para entender mejor tu estado actual.
        </p>
      </div>

      {!result ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mi situación es...</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ej: Últimamente me he sentido muy abrumado en el trabajo, me cuesta dormir y no tengo energía..."
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
      ) : (
        <div className="space-y-6 animate-in fade-in duration-500">
          <h2 className="text-xl font-bold text-center font-headline">
            Resultados de tu Evaluación
          </h2>
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <ClipboardCheck className="text-primary h-5 w-5" /> Evaluación
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 prose prose-sm max-w-none text-foreground">
              <p>{result.assessment}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <Sparkles className="text-accent h-5 w-5" /> Sugerencias
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 prose prose-sm max-w-none text-foreground">
              <p>{result.suggestions}</p>
            </CardContent>
          </Card>
            <Button onClick={() => { setResult(null); form.reset() }} variant="outline" className="w-full">
                Realizar otra evaluación
            </Button>
        </div>
      )}
    </>
  );
}

