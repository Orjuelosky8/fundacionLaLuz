'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import { Loader2, Sparkles, ClipboardCheck, LifeBuoy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { getSubstanceUseGuidance } from '@/lib/actions';
import type { ProvideSubstanceUseRiskGuidanceOutput } from '@/ai/flows/provide-substance-use-risk-guidance';

const formSchema = z.object({
  userDetails: z.string().min(10, { message: 'Por favor, proporciona algunos detalles sobre ti (ej. edad, género).' }),
  substanceUseHistory: z.string().optional(),
  familyHistory: z.string().optional(),
  concerns: z.string().min(20, { message: 'Describe tus preocupaciones con al menos 20 caracteres.' }),
});

export default function SubstanceUseRiskPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ProvideSubstanceUseRiskGuidanceOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userDetails: '',
      substanceUseHistory: '',
      familyHistory: '',
      concerns: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    const response = await getSubstanceUseGuidance(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error al Obtener Guía',
        description: response.error,
      });
    }
    setIsLoading(false);
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-4">Herramienta de Reducción de Riesgo</h1>
        <p className="text-lg text-muted-foreground">
          Comparte información sobre tu situación para recibir una evaluación de riesgo, guía personalizada y recursos de apoyo sobre el uso de sustancias. Toda la información es confidencial.
        </p>
         <p className="text-sm text-amber-700 mt-2">
            <strong>Importante:</strong> Esta herramienta es para orientación y no constituye un diagnóstico médico. Si estás en una crisis, busca ayuda profesional de inmediato.
        </p>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Información Confidencial</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="userDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detalles del usuario</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Hombre, 25 años" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="concerns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preocupaciones específicas</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ej: Estoy preocupado por mi consumo de alcohol los fines de semana..."
                        className="resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="substanceUseHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Historial de consumo (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe tu historial de consumo si te sientes cómodo."
                        className="resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="familyHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Historial familiar (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe si hay historial familiar relevante."
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
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Procesando...</>
                ) : (
                  <><Sparkles className="mr-2 h-4 w-4" /> Obtener Guía</>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {result && (
        <div className="mt-12 space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-center font-headline">Tu Guía Personalizada</h2>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><ClipboardCheck className="text-primary"/> Evaluación de Riesgo</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-foreground">
                    <p>{result.riskAssessment}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Sparkles className="text-accent"/> Guía y Recomendaciones</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-foreground">
                     <p>{result.guidance}</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><LifeBuoy className="text-luz-yellow"/> Recursos y Apoyo</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-foreground">
                     <p>{result.resources}</p>
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
