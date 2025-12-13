'use server';
/**
 * @fileOverview An AI agent that assesses a user's mental state and suggests resources.
 *
 * - assessMentalStateAndSuggestResources - A function that handles the mental state assessment process.
 * - AssessMentalStateInput - The input type for the assessMentalStateAndSuggestResources function.
 * - AssessMentalStateOutput - The return type for the assessMentalStateAndSuggestResources function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessMentalStateInputSchema = z.object({
  description: z.string().describe('The description of the user\'s mental state including stress, anxiety, and depression levels.'),
});
export type AssessMentalStateInput = z.infer<typeof AssessMentalStateInputSchema>;

const AssessMentalStateOutputSchema = z.object({
  assessment: z.string().describe('An assessment of the user\'s mental state based on the provided description.'),
  suggestions: z.string().describe('Suggestions for appropriate resources and plans to improve the user\'s mental state.'),
});
export type AssessMentalStateOutput = z.infer<typeof AssessMentalStateOutputSchema>;

export async function assessMentalStateAndSuggestResources(input: AssessMentalStateInput): Promise<AssessMentalStateOutput> {
  return assessMentalStateAndSuggestResourcesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assessMentalStateAndSuggestResourcesPrompt',
  input: {schema: AssessMentalStateInputSchema},
  output: {schema: AssessMentalStateOutputSchema},
  prompt: `You are a mental health expert. Assess the user's mental state and provide suggestions for appropriate resources and plans based on the following description:

Description: {{{description}}}

Assessment:
{{{assessment}}}
Suggestions:
{{{suggestions}}}`,
});

const assessMentalStateAndSuggestResourcesFlow = ai.defineFlow(
  {
    name: 'assessMentalStateAndSuggestResourcesFlow',
    inputSchema: AssessMentalStateInputSchema,
    outputSchema: AssessMentalStateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
