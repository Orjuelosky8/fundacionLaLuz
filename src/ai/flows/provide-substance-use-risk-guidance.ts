'use server';
/**
 * @fileOverview An AI-driven tool that offers guidance and resources for substance use risk reduction.
 *
 * - provideSubstanceUseRiskGuidance - A function that handles the substance use risk reduction process.
 * - ProvideSubstanceUseRiskGuidanceInput - The input type for the provideSubstanceUseRiskGuidance function.
 * - ProvideSubstanceUseRiskGuidanceOutput - The return type for the provideSubstanceUseRiskGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProvideSubstanceUseRiskGuidanceInputSchema = z.object({
  userDetails: z
    .string()
    .describe(
      'Details about the user, including age, gender, and any relevant background information.'
    ),
  substanceUseHistory: z
    .string()
    .describe('A detailed history of the user substance use, if any.'),
  familyHistory: z
    .string()
    .describe('Relevant family history related to substance use or mental health.'),
  concerns: z
    .string()
    .describe('Specific concerns or questions the user has regarding substance use.'),
});
export type ProvideSubstanceUseRiskGuidanceInput = z.infer<
  typeof ProvideSubstanceUseRiskGuidanceInputSchema
>;

const ProvideSubstanceUseRiskGuidanceOutputSchema = z.object({
  riskAssessment: z
    .string()
    .describe('An assessment of the user risk level for substance use.'),
  guidance: z
    .string()
    .describe('Personalized guidance and recommendations for risk reduction.'),
  resources: z
    .string()
    .describe('A list of relevant resources and support options.'),
});
export type ProvideSubstanceUseRiskGuidanceOutput = z.infer<
  typeof ProvideSubstanceUseRiskGuidanceOutputSchema
>;

export async function provideSubstanceUseRiskGuidance(
  input: ProvideSubstanceUseRiskGuidanceInput
): Promise<ProvideSubstanceUseRiskGuidanceOutput> {
  return provideSubstanceUseRiskGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'provideSubstanceUseRiskGuidancePrompt',
  input: {schema: ProvideSubstanceUseRiskGuidanceInputSchema},
  output: {schema: ProvideSubstanceUseRiskGuidanceOutputSchema},
  prompt: `You are an AI assistant designed to provide guidance and resources for substance use risk reduction. Based on the information provided, assess the user risk level, offer personalized recommendations, and suggest relevant resources.

User Details: {{{userDetails}}}
Substance Use History: {{{substanceUseHistory}}}
Family History: {{{familyHistory}}}
Concerns: {{{concerns}}}

Respond in a compassionate and supportive manner.

Risk Assessment:
Guidance:
Resources: `,
});

const provideSubstanceUseRiskGuidanceFlow = ai.defineFlow(
  {
    name: 'provideSubstanceUseRiskGuidanceFlow',
    inputSchema: ProvideSubstanceUseRiskGuidanceInputSchema,
    outputSchema: ProvideSubstanceUseRiskGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
