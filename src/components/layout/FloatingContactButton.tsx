'use client';

import { useState } from 'react';
import { MessageSquare, Bot, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const WhatsAppIcon = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.486-.137-.05-.274-.074-.412.074-.138.148-.533.679-.65 1.025-.118.346-.236.395-.433.346-.197-.05-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.118-.198-.012-.307.06-.41.065-.094.148-.222.222-.296.074-.074.099-.124.148-.222.05-.098.025-.197-.025-.271-.05-.074-.412-.985-.56-1.353-.14-.354-.28-.307-.41.307-.12.005-.27.005-.41.005-.138 0-.357.05-.533.248-.176.198-.666.656-.666 1.601 0 .943.68 1.858.78 2.007.098.149 1.352 2.063 3.285 2.87.468.196.837.313 1.12.396.36.102.678.087.917.05.27-.04.835-.341.953-.666.118-.324.118-.6.088-.666-.02-.05-.137-.08-.296-.13zM12 2.002C6.477 2.002 2 6.479 2 12.002s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.25c-4.555 0-8.25-3.695-8.25-8.25s3.695-8.25 8.25-8.25 8.25 3.695 8.25 8.25-3.695 8.25-8.25 8.25z" />
    </svg>
  );

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      label: 'Chatear por WhatsApp',
      icon: WhatsAppIcon,
      href: 'https://wa.me/573008294982',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      label: 'Hablar con el Chatbot de IA',
      icon: Bot,
      href: '/mental-health-assessment',
      target: '_self',
      rel: ''
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
                variant="secondary"
                className="rounded-full h-16 w-16 shadow-lg flex items-center justify-center relative group"
                asChild
              >
                <Link href={option.href} target={option.target} rel={option.rel}>
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
            "h-16 w-16 rounded-full shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-110",
            isOpen && 'rotate-45'
          )}
        >
            {isOpen ? <X className="h-8 w-8" /> : <Phone className="h-8 w-8 animate-pulse" />}
        </Button>
      </div>
    </div>
  );
}
