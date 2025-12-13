
'use client';

import { useState } from 'react';
import { Bot, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useChatbotModal } from '@/hooks/use-chatbot-modal';

const WhatsAppIcon = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="currentColor"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.48 1.32 4.94L2 22l5.3-1.48c1.39.78 2.96 1.19 4.59 1.19h.02c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.2 15.25c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.52.12-.15.23-.59.75-.73.9-.13.15-.27.17-.5.05-.23-.12-1-.36-1.9-1.18-.71-.64-1.18-1.44-1.32-1.68-.13-.23-.01-.36.11-.47.11-.11.23-.27.35-.41.12-.13.16-.23.24-.38.08-.15.04-.28-.02-.4-.06-.12-.52-1.25-.71-1.71-.19-.46-.39-.4-.52-.4-.14 0-.3 0-.46.01h-.02c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.12.17 1.75 2.67 4.24 3.74.59.25 1.05.4 1.41.52.59.18 1.13.16 1.56.1.48-.07 1.36-.55 1.55-1.09.19-.53.19-1 .13-1.09-.06-.08-.21-.13-.44-.25z" />
    </svg>
  );

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useChatbotModal();

  const handleChatbotClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openModal('mental-health');
    setIsOpen(false);
  };
  
  const contactOptions = [
    {
      label: 'Chatear por WhatsApp',
      icon: WhatsAppIcon,
      href: 'https://wa.me/573008294982',
      target: '_blank',
      rel: 'noopener noreferrer',
      bgColor: 'bg-[#25D366]'
    },
    {
      label: 'Hablar con el Chatbot de IA',
      icon: Bot,
      href: '#',
      onClick: handleChatbotClick,
      bgColor: 'bg-primary'
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-center gap-4">
        {isOpen && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
            {contactOptions.map((option, index) => (
              <Button
                key={index}
                className={cn("rounded-full h-16 w-16 shadow-lg flex items-center justify-center relative group", option.bgColor)}
                asChild
              >
                <Link 
                    href={option.href} 
                    target={option.target} 
                    rel={option.rel}
                    onClick={option.onClick as any}
                >
                  <option.icon />
                  <span className="absolute right-full mr-4 px-3 py-1.5 text-sm font-semibold text-background bg-foreground rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {option.label}
                  </span>
                </Link>
              </Button>
            ))}
          </div>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "h-16 w-16 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110",
            isOpen ? "bg-destructive rotate-[225deg]" : "bg-primary"
          )}
        >
            {isOpen ? <X className="h-8 w-8 transition-transform duration-300" /> : <Phone className="h-8 w-8 animate-pulse" />}
        </Button>
      </div>
    </div>
  );
}

