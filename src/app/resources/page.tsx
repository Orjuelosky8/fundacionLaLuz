
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { quickQuizzes, therapyResources, podcastEpisodes } from '@/lib/data';
import type { ResourceCard } from '@/lib/definitions';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const podcastBg = PlaceHolderImages.find(p => p.id === 'podcast-bg');

const SpotifyIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2">
    <title>Spotify</title>
    <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.925 17.34c-.2.325-.583.433-.9.242-2.5-1.542-5.75-1.892-9.584-1.042-.375.1-.75-.117-.85-.492-.1-.375.117-.75.492-.85C11.025 14.3 14.6 14.6 17.458 16.35c.317.2.433.583.242.9zM18.8 14.125c-.242.392-.7.5-1.092.258-2.858-1.75-6.85-2.25-10.85-1.225-.45.117-.9-.183-1.017-.633-.116-.45.183-.9.633-1.017 4.458-1.125 8.95-0.566 12.233 1.4.4.24.508.7.258 1.092zm.1-3.25c-.292.475-.85.633-1.325.342-3.225-1.983-8.15-2.55-12.025-1.383-.542.158-1.1-.15-1.258-.692-.158-.542.15-1.1.692-1.258C8.9 6.7 14.283 7.325 17.94 9.55c.475.292.633.85.342 1.325z"/>
  </svg>
);

const ApplePodcastsIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2">
        <title>Apple Podcasts</title>
        <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.213 18.834h-.053c-1.033 0-2.004-.388-2.73-1.085a4.03 4.03 0 0 1-1.16-2.962c0-1.95 1.223-3.34 3.193-3.34.42 0 .91.084 1.455.234v-1.14c0-.75.027-1.52.064-2.17h1.492v7.32c0 .54-.01 1.02-.02 1.47-.01.45-.02.63-.02.63s0 .002.002.003h-1.63a.53.53 0 0 1-.505-.63v-1.32zm.1-3.41c-.56-.16-1.01-.22-1.3-.22-.75 0-1.3.38-1.3.98 0 .5.4.85 1.15.85.38 0 .8-.09 1.15-.24v-1.37zM19.72 14.8c0 2.4-1.78 4.03-4.22 4.03-1.38 0-2.5-.54-3.32-1.35v1.2h-1.48V9.17h1.48v1.17c.8-.84 1.9-1.34 3.27-1.34 2.47 0 4.27 1.62 4.27 4.02v1.78zm-1.6-1.78c0-1.5-1.1-2.4-2.6-2.4s-2.6 1-2.6 2.4v3.3c0 1.5 1.1 2.4 2.6 2.4s2.6-1 2.6-2.4v-3.3z" />
    </svg>
);


const ResourceSection = ({ title, resources, bgColor, id }: { title: string, resources: ResourceCard[], bgColor?: string, id: string }) => {
    return (
        <section id={id} className={`py-16 md:py-24 ${bgColor || ''}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="font-headline text-3xl md:text-4xl text-primary">{title}</h2>
                    <Button variant="link" asChild>
                        <Link href="#">Ver Todo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
                <div className="relative">
                    <div className="flex gap-6 pb-4 -mx-4 px-4 overflow-x-auto">
                        {resources.map(item => (
                            <div key={item.id} className="w-80 shrink-0">
                                {item.type === 'quiz' ? (
                                    <Link href={item.href}>
                                    <Card className="h-full flex flex-col items-center text-center p-6 bg-luz-yellow/20 hover:bg-luz-yellow/40 transition-colors duration-300 rounded-2xl shadow-lg border-0">
                                        <div className="relative h-32 w-32 mb-4">
                                            <Image src={item.imageUrl} alt={item.title} layout="fill" className="rounded-full object-cover"/>
                                        </div>
                                        <CardHeader className="p-0">
                                            <CardTitle className="font-sans text-lg font-semibold text-foreground">{item.title}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                    </Link>
                                ) : (
                                    <Link href={item.href}>
                                    <Card className="h-full flex flex-col bg-card hover:border-primary/50 transition-all duration-300 rounded-2xl shadow-lg overflow-hidden">
                                        <div className="relative h-48 w-full">
                                            <Image src={item.imageUrl} alt={item.title} layout="fill" className="object-cover"/>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </Card>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default function ResourcesPage() {
    const spotifyEmbed = '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4uA0C14WNcv4w73lHtIJAJ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    return (
        <div className="bg-background">
             <div className="relative h-80 w-full bg-primary/10">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex items-center justify-center">
                    <h1 className="text-6xl font-headline text-primary font-bold tracking-wider uppercase">Recursos</h1>
                </div>
            </div>
            
            <ResourceSection id="quizzes" title="Cuestionarios Rápidos" resources={quickQuizzes} />
            <ResourceSection id="therapeutic-resources" title="Recursos Terapéuticos" resources={therapyResources} bgColor="bg-muted/30" />
            
            <section id="podcasts-webinars" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-headline text-4xl md:text-5xl text-primary">Podcasts & Webinars</h2>
                        <p className="mt-4 text-muted-foreground">Discusiones interactivas, eventos y podcasts que abordan problemas de salud mental y te ayudan a encontrar un momento para reír, llorar o simplemente relajarte.</p>
                    </div>
                    
                    <Tabs defaultValue="podcasts" className="w-full">
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-primary/5">
                            <TabsTrigger value="podcasts" className="text-base">Podcasts</TabsTrigger>
                            <TabsTrigger value="webinars" className="text-base">Webinars</TabsTrigger>
                        </TabsList>
                        <TabsContent value="podcasts">
                           <div className="mt-12 rounded-2xl bg-amber-100/40 p-4 md:p-8 relative overflow-hidden">
                               <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center">
                                   <div className="md:col-span-1 z-10 w-full">
                                       <h3 className="font-headline text-3xl md:text-4xl text-amber-900/80">Listen <br /> Podcasts on</h3>
                                       <div className="space-y-3 mt-6">
                                            <Button className="w-full h-14 bg-black hover:bg-black/80 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                                <SpotifyIcon />
                                                <span>LISTEN ON</span>
                                                <span className="font-extrabold ml-1">Spotify</span>
                                            </Button>
                                            <Button className="w-full h-14 bg-white hover:bg-white/80 text-black rounded-full flex items-center justify-center text-lg font-bold border">
                                                <ApplePodcastsIcon />
                                                <span>Listen on</span>
                                                <span className="font-extrabold ml-1">Apple Podcasts</span>
                                            </Button>
                                       </div>
                                   </div>
                                   <div className="md:col-span-2 relative w-full">
                                        {podcastBg && (
                                            <Image 
                                                src={podcastBg.imageUrl} 
                                                alt="Podcast background" 
                                                fill
                                                className="object-cover object-center absolute inset-0 z-0 opacity-20 md:opacity-100"
                                            />
                                        )}
                                        <div className="relative flex gap-6 pb-4 -mx-4 px-4 overflow-x-auto z-10">
                                             {podcastEpisodes.map(episode => (
                                                <div key={episode.id} className="w-64 shrink-0">
                                                    <Card className="h-full flex flex-col bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 rounded-2xl shadow-lg overflow-hidden">
                                                        <div className="relative h-40 w-full">
                                                            <Image src={episode.imageUrl} alt={episode.title} layout="fill" className="object-cover"/>
                                                        </div>
                                                        <div className="p-4">
                                                            <p className="text-xs text-muted-foreground mb-1">{episode.date}</p>
                                                            <h3 className="font-semibold text-sm mb-2 text-foreground leading-tight">{episode.title}</h3>
                                                        </div>
                                                    </Card>
                                                </div>
                                             ))}
                                             <div className="w-24 shrink-0 flex items-center justify-center">
                                                <Button size="icon" variant="outline" className="rounded-full h-14 w-14 shadow-md">
                                                    <ChevronRight className="w-6 h-6"/>
                                                </Button>
                                             </div>
                                        </div>
                                   </div>
                               </div>
                           </div>
                           <div className="mt-16 text-center">
                                <h3 className="text-2xl font-headline text-primary mb-4">¿Interesado en el tema? ¡Escucha nuestro podcast informativo!</h3>
                                <div dangerouslySetInnerHTML={{ __html: spotifyEmbed }} />
                           </div>
                        </TabsContent>
                         <TabsContent value="webinars">
                            <div className="mt-12 text-center text-muted-foreground">
                                <p>Próximamente webinars y eventos en vivo.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </div>
    );
}

