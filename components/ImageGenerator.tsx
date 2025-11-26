import React, { useState } from 'react';
import { Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import { generateClinicImage } from '../services/geminiService';
import { THEME_COLOR, ABOUT_IMAGE_DEFAULT } from '../constants';

const ImageGenerator: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>(ABOUT_IMAGE_DEFAULT);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const generated = await generateClinicImage();
      if (generated) {
        setImageUrl(generated);
      } else {
        // Fallback for demo if API key isn't set
        if (!process.env.API_KEY) {
           setError("Chave de API não configurada. Mostrando imagem estática.");
        } else {
           setError("Não foi possível gerar a imagem no momento.");
        }
      }
    } catch (e) {
      setError("Erro ao conectar com a IA.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl h-full min-h-[400px]">
      <img 
        src={imageUrl} 
        alt="Interior da Clínica" 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
      
      {/* Overlay controls */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm font-medium mb-1 flex items-center gap-1">
                <Sparkles size={14} className="text-yellow-400" />
                Visualização por IA
              </p>
              <h3 className="text-white font-bold text-xl">Ambiente Moderno</h3>
            </div>
            
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-white/30"
              title="Gerar nova visualização com IA"
            >
              <RefreshCw size={20} className={isLoading ? "animate-spin" : ""} />
            </button>
          </div>
          
          {error && (
            <div className="mt-2 text-red-200 text-xs flex items-center gap-1">
              <AlertCircle size={12} />
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;