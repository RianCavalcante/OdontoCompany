import React from 'react';
import { Smile, Sparkles, ShieldCheck, User, Stethoscope, CalendarCheck } from 'lucide-react';
import { Service, Testimonial, ContactInfo, NavLink } from './types';

export const THEME_COLOR = '#02B53D';

export const CONTACT_INFO: ContactInfo = {
  phone: '(85) 2139-8899',
  whatsapp: '5585981844048', // (85) 98184-4048
  address: 'Rua Tenente Jurandir Alencar 122 - Messejana, Fortaleza, Brazil',
  addressUrl: 'https://share.google/DQ226OE7kNdrTc4Ws',
  email: 'messejana@odontocompany.com', // Email inferido pelo padrão, ou placeholder
  hours: ['Seg - Sex: 08h às 19h', 'Sáb: 08h às 13h']
};

export const RT_INFO = "RT: Lourdes G. A. Lima | CRO: 12.138";

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Tratamentos', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Localização', href: '#contato' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Ortodontia',
    description: 'Aparelhos modernos para alinhar seu sorriso com eficiência.',
    fullDescription: 'Tratamentos ortodônticos completos para crianças e adultos. Trabalhamos com aparelhos fixos metálicos, estéticos (safira/porcelana) e alinhadores invisíveis para garantir o melhor resultado estético e funcional.',
    icon: <Smile size={28} />,
    imageUrl: 'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Clareamento Dental',
    description: 'Sorriso mais branco e brilhante com segurança.',
    fullDescription: 'Procedimentos de clareamento a laser ou caseiro supervisionado. Utilizamos as melhores técnicas para remover manchas e devolver o brilho natural dos seus dentes sem causar sensibilidade excessiva.',
    icon: <Sparkles size={28} />,
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Implantes',
    description: 'Recupere sua autoestima e a função mastigatória.',
    fullDescription: 'Soluções definitivas para a perda de dentes. Nossos implantes são feitos com materiais biocompatíveis de alta qualidade, garantindo durabilidade, conforto e um aspecto extremamente natural.',
    icon: <ShieldCheck size={28} />,
    imageUrl: 'https://images.unsplash.com/photo-1445582305881-22442475475c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Clínica Geral',
    description: 'Prevenção, limpeza e restaurações para sua saúde bucal.',
    fullDescription: 'Check-up completo, profilaxia (limpeza), aplicação de flúor e restaurações. O cuidado básico essencial para manter seus dentes e gengivas saudáveis e prevenir doenças bucais.',
    icon: <Stethoscope size={28} />,
    imageUrl: 'https://images.unsplash.com/photo-1598256989494-02630f6dc069?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Próteses',
    description: 'Reabilitação oral com conforto e qualidade.',
    fullDescription: 'Próteses fixas e removíveis desenhadas para se adaptar perfeitamente à sua boca. Devolvemos a estética do sorriso e a eficiência da mastigação com peças personalizadas.',
    icon: <User size={28} />,
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Odontopediatria',
    description: 'Cuidado especial para o sorriso dos pequenos.',
    fullDescription: 'Atendimento lúdico e especializado para crianças. Acompanhamos o desenvolvimento da dentição desde os primeiros anos, focando na prevenção e na criação de bons hábitos de higiene.',
    icon: <CalendarCheck size={28} />,
    imageUrl: 'https://images.unsplash.com/photo-1609840112855-9c84e76d0d21?q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    role: 'Tratamento de Implante',
    content: 'A estrutura é impressionante e o atendimento da Dra. Lourdes foi excelente. Recuperei meu sorriso.',
    imageUrl: 'https://picsum.photos/id/64/150/150'
  },
  {
    id: '2',
    name: 'Fernanda Oliveira',
    role: 'Ortodontia',
    content: 'Coloquei meu aparelho aqui e o resultado está sendo muito rápido. A equipe é nota 10!',
    imageUrl: 'https://picsum.photos/id/91/150/150'
  },
  {
    id: '3',
    name: 'Juliana Costa',
    role: 'Clareamento',
    content: 'Fiz o clareamento para o meu casamento e amei. Ficou super natural e branquinho.',
    imageUrl: 'https://picsum.photos/id/65/150/150'
  }
];

// MANTENDO AS IMAGENS ORIGINAIS CONFORME SOLICITADO
export const HERO_IMAGE = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop';
export const ABOUT_IMAGE_DEFAULT = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop';
