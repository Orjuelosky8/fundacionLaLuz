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
    name: 'Sede Bogotá',
    address: 'Calle 80 #116B-35, Barrio Alhambra, Bogotá',
    phone: '300 829 4982 / 311 636 8893',
    hours: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
  },
  {
    name: 'Sede Antioquia',
    address: 'Vereda la Clara, Caldas, Antioquia',
    phone: '304 448 5555 / 304 448 5556',
    hours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
  },
  {
    name: 'Sede Chinauta (Cundinamarca)',
    address: 'Km 68 Vía Melgar, Chinauta, Cundinamarca',
    phone: '302 218 4853 / 316 772 2262',
    hours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
  },
];
