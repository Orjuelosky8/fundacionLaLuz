export type Testimonial = {
  name: string;
  role: string;
  avatarUrl: string;
  quote: string;
};

export type Location = {
  name: string;
  address: string;
  phone: string;
  hours: string;
};

export type ResourceCard = {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
    href: string;
    type: 'quiz' | 'resource';
}
