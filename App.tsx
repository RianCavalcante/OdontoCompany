import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, MessageCircle, Clock, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './components/WhatsAppIcon';
import ServiceModal from './components/ServiceModal';
import ImageGenerator from './components/ImageGenerator';
import { CONTACT_INFO, NAV_LINKS, SERVICES, TESTIMONIALS, HERO_IMAGE, THEME_COLOR, RT_INFO } from './constants';
import { Service } from './types';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappMessage = "Olá, gostaria de agendar uma avaliação na OdontoCompany Messejana.";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* Top Bar - Contact Info */}
      <div className="bg-gray-900 text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-[#02B53D]" /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-[#02B53D]" /> {CONTACT_INFO.hours[0]}</span>
            <span className="flex items-center gap-2 text-gray-400">{RT_INFO}</span>
          </div>
          <div className="flex gap-4">
             <a href={CONTACT_INFO.addressUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#02B53D] transition-colors flex items-center gap-1">
               <MapPin size={14} /> Como Chegar
             </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${scrolled ? 'bg-[#02B53D] text-white' : 'bg-white text-[#02B53D]'}`}>
              <span className="font-bold text-xl">O</span>
            </div>
            <div className={`font-bold text-xl tracking-tight leading-none ${scrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
              OdontoCompany <br/> <span style={{ color: scrolled ? THEME_COLOR : 'white' }}>Messejana</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium hover:text-[#02B53D] transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-white font-medium text-sm transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
              style={{ backgroundColor: THEME_COLOR }}
            >
              <WhatsAppIcon size={18} />
              Agendar via WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 font-medium py-2 border-b border-gray-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg text-white font-bold text-center flex justify-center items-center gap-2 mt-2"
              style={{ backgroundColor: THEME_COLOR }}
            >
              <WhatsAppIcon size={20} /> Agendar Consulta
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Clínica Odontológica" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left w-full pt-20">
          <div className="md:max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#02B53D]/20 border border-[#02B53D]/40 text-white backdrop-blur-sm text-sm font-semibold mb-6">
              Dentista e consultório odontológico
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              A maior do mundo <br/> <span className="text-[#02B53D]">é pra você também!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              Equipe especializada em Ortodontia, Clareamento e tratamentos completos.
              Venha sorrir com a OdontoCompany Messejana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#servicos"
                onClick={(e) => scrollToSection(e, '#servicos')}
                className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Nossos Tratamentos
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-white font-bold transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                style={{ backgroundColor: THEME_COLOR }}
              >
                <WhatsAppIcon size={20} /> Agendar Agora
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 hidden md:block">
          <span className="text-sm">Role para baixo</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tratamentos Especializados</h2>
            <div className="w-20 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: THEME_COLOR }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos com uma estrutura completa em Messejana para cuidar do seu sorriso com tecnologia e conforto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 relative overflow-hidden flex flex-col h-full"
              >
                {/* Imagem do Serviço */}
                <div className="h-48 w-full overflow-hidden relative bg-gray-100">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col flex-grow relative">
                  {/* Ícone Flutuante */}
                  <div className="absolute -top-8 left-6 p-3 rounded-xl bg-white shadow-md text-[#02B53D]">
                    {service.icon}
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#02B53D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-4 flex items-center text-[#02B53D] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                      Saiba mais <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Gemini AI Image Gen */}
      <section id="sobre" className="py-20 bg-green-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* AI Image Component */}
            <div className="order-2 lg:order-1 h-[400px] lg:h-[500px]">
              <ImageGenerator />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                OdontoCompany <span style={{ color: THEME_COLOR }}>Messejana</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Somos apaixonados por transformar sorrisos. A OdontoCompany Messejana traz para você o que há de mais moderno na odontologia mundial. Nossa clínica foi projetada para oferecer conforto, acessibilidade e tecnologia de ponta.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Utilizamos inteligência artificial para otimizar nossos processos e planejar o design do sorriso perfeito para cada paciente. Veja ao lado uma visualização do nosso padrão de qualidade.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Equipe multidisciplinar com RT Especializada',
                  'Equipamentos de Raio-X e Scanner Digital',
                  'Planos acessíveis e flexíveis',
                  'Atendimento humanizado para todas as idades'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#02B53D]/20 text-[#02B53D]">
                      <ShieldCheck size={14} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Stories style) */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Histórias de Sorrisos</h2>
            <p className="text-gray-600">Veja a transformação de quem confia na OdontoCompany Messejana.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="w-full sm:w-[300px] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
                <div className="p-6 flex-1 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-green-50">
                    <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex gap-1 mb-3 text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic text-sm mb-4">"{t.content}"</p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <span className="text-xs text-[#02B53D] font-medium">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contato" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-[#02B53D]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Endereço</h3>
                    <p className="text-gray-400 mb-2">{CONTACT_INFO.address}</p>
                    <a 
                      href={CONTACT_INFO.addressUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#02B53D] text-sm hover:underline"
                    >
                      Ver no Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-[#02B53D]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefones</h3>
                    <p className="text-gray-400">{CONTACT_INFO.phone}</p>
                    <p className="text-gray-400 mt-1 flex items-center gap-2">
                      <WhatsAppIcon size={14} /> (85) 98184-4048
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-[#02B53D]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horário de Atendimento</h3>
                    {CONTACT_INFO.hours.map((h, i) => (
                      <p key={i} className="text-gray-400">{h}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
                  <p>{RT_INFO}</p>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="h-[400px] w-full bg-gray-800 rounded-2xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0827284488!2d-38.4947!3d-3.8322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDknNTUuOSJTIDM4wrAyOSc0MC45Ilc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                title="Google Maps"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white text-gray-900 p-3 rounded-lg shadow-lg text-xs font-bold pointer-events-none">
                📍 OdontoCompany Messejana
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} OdontoCompany Messejana. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs opacity-60">{RT_INFO}</p>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 rounded-full text-white shadow-2xl z-50 hover:scale-110 transition-transform"
        style={{ backgroundColor: '#25D366' }}
      >
        <WhatsAppIcon size={32} />
      </a>

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService} 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
}

export default App;