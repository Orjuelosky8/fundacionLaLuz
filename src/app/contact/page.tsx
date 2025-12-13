'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageSquare, Send, Building } from 'lucide-react';

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
import { Card, CardContent } from '@/components/ui/card';

const contactImage = PlaceHolderImages.find((img) => img.id === 'contact-header');

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  phone: z.string().min(7, { message: 'Por favor ingresa un número de teléfono válido.' }),
  location: z.string().min(1, { message: 'Por favor selecciona una sede.' }),
  reason: z.string().min(10, { message: 'La razón del contacto debe tener al menos 10 caracteres.' }),
});

const contactChannels = [
    {
        icon: Phone,
        title: "Líneas Telefónicas",
        details: ["Bogotá: 300 829 4982", "Antioquia: 304 448 5555", "Chinauta: 302 218 4853"],
        action: "Llamar",
        href: "tel:+573008294982"
    },
    {
        icon: MessageSquare,
        title: "Atención vía WhatsApp",
        details: ["Inicia una conversación directa con un asesor para orientación inmediata."],
        action: "Chatear Ahora",
        href: "https://wa.me/573008294982"
    },
    {
        icon: Building,
        title: "Oficina Principal",
        details: ["Calle 80 #116B-35, Bogotá", "Barrio Alhambra"],
        action: "Ver en Mapa",
        href: "https://www.google.com/maps/search/?api=1&query=Calle+80+%23116B-35,+Bogot%C3%A1"
    }
]

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
    <div className="bg-background">
      <div className="relative h-80 w-full">
        {contactImage && (
             <Image
                src={contactImage.imageUrl}
                alt={contactImage.description}
                data-ai-hint={contactImage.imageHint}
                fill
                className="object-cover"
              />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30 flex items-center justify-center">
            <h1 className="text-6xl font-headline text-primary-foreground font-bold tracking-wider uppercase">Contáctanos</h1>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4 text-primary">Estamos aquí para ayudarte</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Utiliza el canal que prefieras para recibir información, apoyo o vincularte a nuestras iniciativas. Un profesional de la fundación se comunicará para brindar una asesoría inicial sin costo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {contactChannels.map(channel => (
                <Card key={channel.title} className="bg-card/50 border-border hover:border-primary transition-all duration-300 flex flex-col">
                   <CardContent className="p-6 flex-grow">
                        <channel.icon className="w-10 h-10 text-primary mb-4"/>
                        <h3 className="font-headline text-2xl text-foreground mb-2">{channel.title}</h3>
                        <div className="text-muted-foreground text-sm space-y-1">
                            {channel.details.map((detail, i) => <p key={i}>{detail}</p>)}
                        </div>
                   </CardContent>
                   <div className="p-6 pt-0">
                     <Button asChild className="w-full rounded-full">
                        <a href={channel.href} target="_blank" rel="noopener noreferrer">{channel.action}</a>
                     </Button>
                   </div>
                </Card>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-headline font-bold mb-4 text-primary">Envíanos un Mensaje</h2>
            <p className="text-muted-foreground mb-8">
              Si prefieres, completa el siguiente formulario y uno de nuestros especialistas se comunicará contigo a la brevedad.
            </p>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1"/>
                    <div>
                        <span className="font-semibold text-foreground">Notificaciones Judiciales</span>
                        <p className="text-sm text-muted-foreground">representantelegal@fundacionlaluz.net</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <Card className="p-8 shadow-2xl bg-card/80 backdrop-blur-sm border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} className="bg-input/50" />
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
                            <Input placeholder="Tu número de teléfono" {...field} className="bg-input/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sede de preferencia</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-input/50">
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
                            className="resize-none bg-input/50"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full rounded-full">
                    <Send className="mr-2 h-4 w-4"/>
                    Enviar Mensaje
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
