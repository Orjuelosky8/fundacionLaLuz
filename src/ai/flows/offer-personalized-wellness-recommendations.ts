// OfferPersonalizedWellnessRecommendations.ts
'use server';
/**
 * @fileOverview A personalized wellness recommendation AI agent.
 *
 * - offerPersonalizedWellnessRecommendations - A function that provides personalized wellness recommendations.
 * - PersonalizedWellnessRecommendationsInput - The input type for the offerPersonalizedWellnessRecommendations function.
 * - PersonalizedWellnessRecommendationsOutput - The return type for the offerPersonalizedWellnessRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedWellnessRecommendationsInputSchema = z.object({
  healthData: z
    .string()
    .describe(
      'Comprehensive health data of the user, including medical history, current conditions, lifestyle, and preferences.'
    ),
  wellnessGoals: z
    .string()
    .describe(
      'The wellness goals of the user. e.g. lose weight, reduce stress, improve sleep'
    ),
});
export type PersonalizedWellnessRecommendationsInput = z.infer<
  typeof PersonalizedWellnessRecommendationsInputSchema
>;

const PersonalizedWellnessRecommendationsOutputSchema = z.object({
  telemedicineRecommendations: z
    .string()
    .describe('Personalized telemedicine recommendations.'),
  nutritionRecommendations: z
    .string()
    .describe('Personalized nutrition recommendations.'),
  exerciseRecommendations: z
    .string()
    .describe('Personalized exercise recommendations.'),
});
export type PersonalizedWellnessRecommendationsOutput = z.infer<
  typeof PersonalizedWellnessRecommendationsOutputSchema
>;

export async function offerPersonalizedWellnessRecommendations(
  input: PersonalizedWellnessRecommendationsInput
): Promise<PersonalizedWellnessRecommendationsOutput> {
  return offerPersonalizedWellnessRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedWellnessRecommendationsPrompt',
  input: {schema: PersonalizedWellnessRecommendationsInputSchema},
  output: {schema: PersonalizedWellnessRecommendationsOutputSchema},
  prompt: `You are a personalized wellness assistant that provides telemedicine, nutrition, and exercise recommendations based on the user's health data and wellness goals.

  Health Data: {{{healthData}}}
  Wellness Goals: {{{wellnessGoals}}}

  Provide personalized telemedicine, nutrition, and exercise recommendations tailored to the user's individual needs.`,
});

const offerPersonalizedWellnessRecommendationsFlow = ai.defineFlow(
  {
    name: 'offerPersonalizedWellnessRecommendationsFlow',
    inputSchema: PersonalizedWellnessRecommendationsInputSchema,
    outputSchema: PersonalizedWellnessRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
