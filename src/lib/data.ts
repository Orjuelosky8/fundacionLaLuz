import type { Testimonial, Location, ResourceCard } from './definitions';
import { PlaceHolderImages } from './placeholder-images';

const testimonialImage1 = PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl || '';
const testimonialImage2 = PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl || '';
const testimonialImage3 = PlaceHolderImages.find(p => p.id === 'testimonial-3')?.imageUrl || '';

export const testimonials: Testimonial[] = [
  {
    name: 'Ana García',
    role: 'Familiar de paciente',
    avatarUrl: testimonialImage1,
    quote: 'La Fundación nos dio las herramientas para entender y apoyar a nuestro hijo. La guía fue clara y compasiva, un verdadero salvavidas en un momento de crisis.',
  },
  {
    name: 'Carlos Vera',
    role: 'Usuario en recuperación',
    avatarUrl: testimonialImage2,
    quote: 'La autoevaluación con IA me ayudó a poner en palabras lo que sentía. A partir de ahí, el plan de bienestar personalizado ha sido clave en mi progreso diario.',
  },
  {
    name: 'Dr. Sofia Reyes',
    role: 'Profesional Aliada',
    avatarUrl: testimonialImage3,
    quote: 'Creer en cada paciente y dedicarles el tiempo necesario es nuestra misión. Verlos descubrir lo mejor de sí mismos es la mayor recompensa.',
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


export const quickQuizzes: ResourceCard[] = [
  {
    id: 'quiz-1',
    title: '¿Estoy listo para una relación? | Quiz divertido y gratuito',
    imageUrl: PlaceHolderImages.find(p => p.id === 'quiz-relationship')?.imageUrl || '',
    href: '#',
    type: 'quiz',
  },
  {
    id: 'quiz-2',
    title: 'El Quiz ACE: ¿Viviste traumas infantiles?',
    imageUrl: PlaceHolderImages.find(p => p.id === 'quiz-trauma')?.imageUrl || '',
    href: '#',
    type: 'quiz',
  },
  {
    id: 'quiz-3',
    title: '¿Cuál es mi lenguaje del amor? | El Quiz de los 5 Lenguajes',
    imageUrl: PlaceHolderImages.find(p => p.id === 'quiz-love-language')?.imageUrl || '',
    href: '#',
    type: 'quiz',
  },
   {
    id: 'quiz-4',
    title: 'Autoevaluación de Ansiedad y Estrés',
    imageUrl: PlaceHolderImages.find(p => p.id === 'quiz-anxiety')?.imageUrl || '',
    href: '/mental-health-assessment',
    type: 'quiz',
  },
];

export const therapyResources: ResourceCard[] = [
  {
    id: 'resource-1',
    title: '¿Es real la adicción a la tecnología en adolescentes?',
    description: 'Nuestras vidas giran en torno a la tecnología e internet más que nunca...',
    imageUrl: PlaceHolderImages.find(p => p.id === 'resource-tech-addiction')?.imageUrl || '',
    href: '#',
    type: 'resource',
  },
  {
    id: 'resource-2',
    title: '¿Qué es la Experiencia Somática? 4 Ejercicios para Sanar',
    description: 'Puede que hayas oído hablar de la terapia somática, pero te has preguntado...',
    imageUrl: PlaceHolderImages.find(p => p.id === 'resource-somatic')?.imageUrl || '',
    href: '#',
    type: 'resource',
  },
    {
    id: 'resource-3',
    title: 'Cómo apoyar a un ser querido con problemas de adicción',
    description: 'Descubre estrategias efectivas y compasivas para ser un pilar de apoyo.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'resource-support-addiction')?.imageUrl || '',
    href: '#',
    type: 'resource',
  },
   {
    id: 'resource-4',
    title: 'Mindfulness para principiantes: 5 técnicas sencillas',
    description: 'Inicia tu camino en el mindfulness y reduce el estrés con estas prácticas simples.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'resource-mindfulness')?.imageUrl || '',
    href: '#',
    type: 'resource',
  },
];
