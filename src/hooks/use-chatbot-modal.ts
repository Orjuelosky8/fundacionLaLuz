
'use client';
import { create } from 'zustand';

type ChatbotTopic = 'mental-health' | 'substance-use' | 'wellness';

interface ChatbotModalState {
  isOpen: boolean;
  topic: ChatbotTopic;
  openModal: (topic: ChatbotTopic) => void;
  closeModal: () => void;
}

export const useChatbotModal = create<ChatbotModalState>((set) => ({
  isOpen: false,
  topic: 'mental-health',
  openModal: (topic) => set({ isOpen: true, topic }),
  closeModal: () => set({ isOpen: false }),
}));

export function ChatbotModalProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
