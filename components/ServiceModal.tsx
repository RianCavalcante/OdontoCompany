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
        
        {/* Header (No Image) */}
        <div className="bg-gray-50 p-6 pr-12 border-b border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-[#02B53D]">
                 {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
            </div>
            <div>
                 <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                 <div className="h-1 w-12 bg-[#02B53D] rounded-full mt-1"></div>
            </div>
          
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
                <X size={20} />
            </button>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto">
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {service.fullDescription}
          </p>

          {/* CTA within Modal */}
          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Calendar size={20} className="text-[#02B53D]" />
              Agende sua consulta
            </h4>
            <p className="text-sm text-gray-500 mb-5">
              Entre em contato agora para verificar a disponibilidade para {service.title}.
            </p>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de agendar uma consulta de ${service.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3.5 rounded-lg text-white font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
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