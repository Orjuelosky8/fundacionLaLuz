import type { Testimonial, Location } from './definitions';
import { PlaceHolderImages } from './placeholder-images';

const testimonialImage1 = PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl || '';
const testimonialImage2 = PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl || '';
const testimonialImage3 = PlaceHolderImages.find(p => p.id === 'testimonial-3')?.imageUrl || '';

export const testimonials: Testimonial[] = [
  {
    name: 'Ana García',
    role: 'Familiar de paciente',
    avatarUrl: testimonialImage1,
    quote: 'LuzIA nos dio las herramientas para entender y apoyar a nuestro hijo. La guía fue clara y compasiva, un verdadero salvavidas en un momento de crisis.',
  },
  {
    name: 'Carlos Vera',
    role: 'Usuario en recuperación',
    avatarUrl: testimonialImage2,
    quote: 'La autoevaluación me ayudó a poner en palabras lo que sentía. A partir de ahí, el plan de bienestar personalizado ha sido clave en mi progreso diario.',
  },
  {
    name: 'Dr. Sofia Reyes',
    role: 'Profesional Aliada',
    avatarUrl: testimonialImage3,
    quote: 'Integrar las herramientas de LuzIA en nuestra práctica nos ha permitido ofrecer un apoyo más completo y basado en datos a nuestros pacientes. Es el futuro de la salud mental.',
  },
];

export const locations: Location[] = [
  {
    name: 'Sede Principal - Bogotá',
    address: 'Calle Falsa 123, Chapinero, Bogotá, Colombia',
    phone: '(+57) 601 234 5678',
    hours: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
  },
  {
    name: 'Centro de Apoyo - Medellín',
    address: 'Avenida Siempre Viva 742, El Poblado, Medellín, Colombia',
    phone: '(+57) 604 876 5432',
    hours: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
  },
  {
    name: 'Unidad de Bienestar - Cali',
    address: 'Carrera 100 #5-169, Ciudad Jardín, Cali, Colombia',
    phone: '(+57) 602 345 6789',
    hours: 'Martes a Sábado: 10:00 AM - 7:00 PM',
  },
];
