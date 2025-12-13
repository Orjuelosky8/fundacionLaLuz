'use server';

import {
  assessMentalStateAndSuggestResources,
  type AssessMentalStateInput,
} from '@/ai/flows/assess-mental-state-and-suggest-resources';
import {
  offerPersonalizedWellnessRecommendations,
  type PersonalizedWellnessRecommendationsInput,
} from '@/ai/flows/offer-personalized-wellness-recommendations';
import {
  provideSubstanceUseRiskGuidance,
  type ProvideSubstanceUseRiskGuidanceInput,
} from '@/ai/flows/provide-substance-use-risk-guidance';

export async function runMentalStateAssessment(
  input: AssessMentalStateInput
) {
  try {
    const result = await assessMentalStateAndSuggestResources(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in mental state assessment:', error);
    return { success: false, error: 'Failed to get assessment. Please try again.' };
  }
}

export async function getWellnessRecommendations(
  input: PersonalizedWellnessRecommendationsInput
) {
  try {
    const result = await offerPersonalizedWellnessRecommendations(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in wellness recommendations:', error);
    return { success: false, error: 'Failed to get recommendations. Please try again.' };
  }
}

export async function getSubstanceUseGuidance(
  input: ProvideSubstanceUseRiskGuidanceInput
) {
  try {
    const result = await provideSubstanceUseRiskGuidance(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in substance use guidance:', error);
    return { success: false, error: 'Failed to get guidance. Please try again.' };
  }
}
