
'use client';

import { useChatbotModal } from '@/hooks/use-chatbot-modal';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import MentalHealthAssessmentForm from './MentalHealthAssessmentForm';
import { LuziaIcon } from '../icons';

const ChatbotModal = () => {
  const { isOpen, closeModal, topic } = useChatbotModal();

  const getTopicContent = () => {
    switch (topic) {
      case 'mental-health':
        return {
          title: 'Evaluación de Salud Mental',
          description:
            'Describe cómo te sientes, y nuestra IA te proporcionará una evaluación inicial y sugerencias de apoyo.',
          form: <MentalHealthAssessmentForm />,
        };
      // Can add other topics here
      default:
        return {
          title: 'Asistente de Bienestar',
          description: '¿En qué puedo ayudarte hoy?',
          form: <MentalHealthAssessmentForm />,
        };
    }
  };

  const { title, description, form } = getTopicContent();

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[425px] h-[80vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <LuziaIcon className="w-10 h-10 text-primary" />
            </div>
            <div>
              <DialogTitle className="font-headline text-2xl text-primary">
                {title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-grow overflow-y-auto px-6 pb-6">
          {form}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotModal;
