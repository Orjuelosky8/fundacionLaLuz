'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { locations } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const contactImage = PlaceHolderImages.find((img) => img.id === 'contact-header');

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  phone: z.string().min(7, { message: 'Por favor ingresa un número de teléfono válido.' }),
  location: z.string().min(1, { message: 'Por favor selecciona una sede.' }),
  reason: z.string().min(10, { message: 'La razón del contacto debe tener al menos 10 caracteres.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      location: '',
      reason: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Mensaje Enviado',
      description: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
    });
    form.reset();
  }

  return (
    <>
      <div className="relative h-64 w-full bg-primary">
        {contactImage && (
             <Image
                src={contactImage.imageUrl}
                alt={contactImage.description}
                data-ai-hint={contactImage.imageHint}
                fill
                className="object-cover"
              />
        )}
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-primary-foreground font-headline">Contáctanos</h1>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-headline">Ponte en contacto</h2>
            <p className="text-muted-foreground mb-8">
              Estamos aquí para ayudarte. Completa el formulario y uno de nuestros especialistas se comunicará contigo.
            </p>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary"/>
                    <span>(+57) 601 234 5678</span>
                </div>
                 <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary"/>
                    <span>contacto@luzia.org</span>
                </div>
                 <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1"/>
                    <span>Sede Principal: Calle Falsa 123, Bogotá, Colombia</span>
                </div>
            </div>
          </div>
          <div>
            <Card className="p-6 shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu número de teléfono" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sede de preferencia</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una sede" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {locations.map((loc) => (
                              <SelectItem key={loc.name} value={loc.name}>
                                {loc.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Razón del contacto</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Cuéntanos cómo podemos ayudarte"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Enviar Mensaje</Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
