import React from 'react';
import { X, Calendar } from 'lucide-react';
import { Service } from '../types';
import { CONTACT_INFO, THEME_COLOR } from '../constants';

interface Props {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<Props> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-fade-in-up flex flex-col max-h-[90vh]">
        {/* Header with Image */}
        <div className="relative h-48">
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-4 left-6 flex items-center gap-4">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md text-white border border-white/30">
              {React.cloneElement(service.icon as React.ReactElement, { color: 'white', size: 24 })}
            </div>
            <h3 className="text-2xl font-bold text-white shadow-sm">{service.title}</h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          <p className="text-gray-600 leading-relaxed mb-6">
            {service.fullDescription}
          </p>

          {/* CTA within Modal */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Calendar size={18} className="text-[#02B53D]" />
              Agende sua consulta
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              Entre em contato agora para verificar a disponibilidade para {service.title}.
            </p>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de agendar uma consulta de ${service.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-lg text-white font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: THEME_COLOR }}
            >
              Agendar via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;