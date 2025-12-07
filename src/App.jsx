import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, Instagram, Facebook, Linkedin, ChevronLeft, ChevronRight, Pin } from 'lucide-react';

// About & Profile
import profileImg from './assets/metzger-photo.webp';

// Real Estate Listings
import estate1 from './assets/real-estate-1.webp';
import estate2 from './assets/real-estate-2.webp';
import estate3 from './assets/real-estate-3.webp';

// Services
import service1 from './assets/service-1.webp';
import service2 from './assets/service-2.webp';
import service3 from './assets/service-3.webp';

// Partners / Logos
import partner1 from './assets/partner-1.webp';
import partner2 from './assets/partner-2.webp';
import partner3 from './assets/partner-3.webp';
import partner4 from './assets/partner-4.webp';

// Gallery / Hero Images
import heroBg from './assets/photo-gallery-4.webp'; 
import contactBg from './assets/photo-gallery-2.webp';

const listings = [
  {
    id: 1,
    image: estate1,
    price: "$1,490,999",
    address: "5520 N Leslie Street, Pahrump, NV",
    specs: "3 Beds • 4 Baths • 2,780 SqFt",
    tag: "Virtual Showing",
    link: "https://theridgerealty.idxbroker.com/idx/details/listing/c015/2710513/5520-N-Leslie-Street-Pahrump-NV?widgetReferer=true"
  },
  {
    id: 2,
    image: estate2,
    price: "$1,450,000",
    address: "2221 W Windsong Lane, Pahrump, NV",
    specs: "3 Beds • 3 Baths • 1,876 SqFt",
    tag: "Virtual Showing",
    link: "https://theridgerealty.idxbroker.com/idx/details/listing/c015/2705063/2221-W-Windsong-Lane-Pahrump-NV?widgetReferer=true"
  },
  {
    id: 3,
    image: estate3,
    price: "$1,285,000",
    address: "3780 E Kellogg Road, Pahrump, NV",
    specs: "1 Beds • 9 Baths • 572 SqFt",
    tag: "Virtual Showing",
    link: "https://theridgerealty.idxbroker.com/idx/details/listing/c015/2656180/3780-E-Kellogg-Road-Pahrump-NV?widgetReferer=true"
  }
];

const services = [
  { image: service1, title: "Buying Strategy", desc: "Curating exclusive opportunities in tight inventory markets." },
  { image: service2, title: "Luxury Sales", desc: "Sophisticated marketing for world-class properties." },
  { image: service3, title: "Investment Advisory", desc: "Data-driven analysis for high-ROI real estate portfolios." },
];

const partners = [partner1, partner2, partner3, partner4];

const testimonials = [
  { id: 1, text: "Marci's understanding of the luxury market is unparalleled. He found us an off-market gem that exceeded every expectation.", author: "Jonathan & Claire R.", location: "Montecito Buyer" },
  { id: 2, text: "Selling a high-value property requires a specific skillset. Marci's marketing strategy was sophisticated and effective.", author: "The Sterling Family", location: "Santa Barbara Seller" },
  { id: 3, text: "Professional, discreet, and incredibly knowledgeable. Marci navigated a complex negotiation with ease.", author: "Dr. Evelyn Reed", location: "Hope Ranch Buyer" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
          <a href="#" className={`text-xl md:text-2xl font-serif font-bold leading-none transition-colors duration-300 ${scrolled || isOpen ? 'text-luxury-black' : 'text-white'}`}>
            MARCI METZGER
          </a>
          
          <div className={`hidden md:flex space-x-10 ${scrolled ? 'text-luxury-black' : 'text-white'}`}>
            {['Home', 'About', 'Listings', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-luxury-gold transition-colors text-xs uppercase tracking-[0.1em] font-medium">
                {item}
              </a>
            ))}
          </div>

          {!isOpen && (
            <button 
              onClick={() => setIsOpen(true)} 
              className={`md:hidden focus:outline-none transition-colors duration-300 ${scrolled ? 'text-luxury-black' : 'text-white'}`}
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </nav>

      <div 
        className={`fixed inset-0 w-screen h-screen bg-white z-[100] flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-6 right-6 text-luxury-black p-4"
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center space-y-12">
          {['Home', 'About', 'Listings', 'Services', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)} 
              className="text-luxury-black text-3xl font-serif font-normal tracking-wide hover:text-luxury-gold transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="pt-8 border-t border-gray-100 w-1/3 flex justify-center space-x-8">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marciandlauren_nvrealtors/" className="text-luxury-black hover:text-luxury-gold transition-colors"><Instagram size={20} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/MarciHomes/" className="text-luxury-black hover:text-luxury-gold transition-colors"><Facebook size={20} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marci-metzger-30642496/" className="text-luxury-black hover:text-luxury-gold transition-colors"><Linkedin size={20} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" className="text-luxury-black hover:text-luxury-gold transition-colors" aria-label="Yelp">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.0001 19.34L10.4301 13.56L4.50012 14.12C4.16012 14.15 3.97012 13.75 4.19012 13.51L8.79012 8.46L6.50012 2.89C6.38012 2.58 6.72012 2.31 6.99012 2.49L11.8501 5.7L16.7101 2.49C16.9801 2.31 17.3201 2.58 17.2001 2.89L14.9101 8.46L19.5101 13.51C19.7301 13.75 19.5401 14.15 19.2001 14.12L13.2701 13.56L12.0001 19.34Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

              </svg>
            </a>
        </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => (
  <header id="home" className="relative h-screen min-h-[700px] flex items-center justify-start">
    <div className="absolute inset-0">
      <img 
        src={heroBg} 
        alt="Luxury Real Estate Background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
    </div>

    <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
      <div className="max-w-3xl pt-20">
        <h2 className="text-luxury-gold text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-semibold">The Ridge Realty Group - Pahrump Realtor</h2>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8">
          Curating The <br/>
          <span className="italic font-light">Exceptional</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
          Connecting discerning clients with the premier properties along the American Riviera.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#listings" className="bg-luxury-gold border-2 border-luxury-gold text-white px-10 py-4 uppercase tracking-[0.15em] text-sm font-bold hover:bg-transparent hover:text-white transition-all duration-300 text-center">
            View Collection
          </a>
          <a href="#contact" className="border-2 border-white text-white px-10 py-4 uppercase tracking-[0.15em] text-sm font-bold hover:bg-white hover:text-luxury-black transition-all duration-300 text-center">
            Inquire Info
          </a>
        </div>
      </div>
    </div>
  </header>
);

const About = () => (
  <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6 md:px-12 relative">
      <span className="absolute top-0 right-0 text-[20rem] leading-none font-serif text-soft-gray select-none -z-10 opacity-50">M</span>
      
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <div className="lg:w-5/12 relative flex justify-center lg:justify-end">
          <div className="relative z-10 w-64 md:w-80 lg:max-w-md shadow-2xl">
            <div className="aspect-[3/4] relative">
              <img 
                src={profileImg} 
                alt="Marci Metzger" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-luxury-gold -z-10"></div>
          </div>
        </div>

        <div className="lg:w-7/12">
          <h4 className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-bold mb-4">A Different Approach</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-8 leading-tight">Beyond the Transaction</h2>
          <div className="text-gray-600 leading-relaxed space-y-6 text-lg font-light">
            <p>
              In the realm of luxury real estate, success is not measured merely by sales volume, but by the enduring relationships built and the seamless execution of complex goals.
            </p>
            <p>
              With over a decade focused on the nuances of the coastal market, I offer my clients more than just access to listings; I provide strategic insight, unwavering discretion, and a concierge-level service that continues long after the keys change hands.
            </p>
          </div>
          
          <div className="mt-12 pt-12 border-t border-gray-100">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Trusted By</p>
            <div className="flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((partner, index) => (
                <img key={index} src={partner} alt="Partner Logo" className="h-8 md:h-10 w-auto object-contain" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Listings = () => (
  <section id="listings" className="py-16 md:py-24 bg-soft-gray">
    <div className="container mx-auto px-6 md:px-12">
      
      <div className="flex flex-row justify-between items-end mb-10 md:mb-16">
        <div>
          <h4 className="text-luxury-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-2 md:mb-3">Portfolio</h4>
          <h2 className="text-3xl md:text-5xl font-serif text-luxury-black leading-none">Featured</h2>
        </div>
        
        <a href="#" className="flex items-center text-luxury-gold hover:text-luxury-black transition-colors font-medium uppercase tracking-wider text-[10px] md:text-sm pb-1 md:pb-2">
          View All <span className="hidden md:inline">&nbsp;Properties</span> <ArrowRight size={14} className="ml-1 md:ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {listings.map((item) => (
          <a 
            href={item.link} 
            key={item.id} 
            className="group relative block bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <span className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-luxury-black text-[10px] md:text-xs px-4 py-2 uppercase tracking-widest font-bold z-10 shadow-sm">
                {item.tag}
              </span>
              <img 
                src={item.image} 
                alt={item.address} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-luxury-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-serif text-luxury-black mb-2 group-hover:text-luxury-gold transition-colors">{item.price}</h3>
              <p className="text-gray-600 mb-6 text-base font-light">{item.address}</p>
              <div className="border-t border-gray-100 pt-6 text-xs md:text-sm text-gray-500 font-medium tracking-wider uppercase flex justify-between items-center">
                <span>{item.specs}</span>
                <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-luxury-gold" />
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-16 md:py-24 bg-luxury-black text-white relative overflow-hidden">
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-sm text-luxury-gold uppercase tracking-[0.3em] mb-6">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-serif">A Bespoke Service Experience</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {services.map((service, index) => (
          <div key={index} className="bg-luxury-black p-12 hover:bg-white/5 transition-colors duration-500 group text-center md:text-left relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
              <img src={service.image} alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif mb-4 text-white group-hover:text-luxury-gold transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), 6000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="py-16 md:py-24 bg-soft-gray overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden relative min-h-[350px] flex items-center">
            {testimonials.map((item, index) => (
              <div 
                key={item.id}
                className={`absolute w-full transition-all duration-700 ease-in-out transform
                  ${index === current ? 'opacity-100 translate-x-0 z-20' : 
                    index < current ? 'opacity-0 -translate-x-full z-10' : 
                    'opacity-0 translate-x-full z-10'}`}
              >
                <div className="flex flex-col items-center text-center px-4 md:px-20">
                  <div className="mb-8 text-luxury-gold">
                   <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.570 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <p className="text-2xl md:text-4xl font-serif leading-snug text-luxury-black mb-10 italic">
                    "{item.text}"
                  </p>
                  <div>
                    <h5 className="text-lg font-bold tracking-wider uppercase">{item.author}</h5>
                    <span className="text-luxury-gold text-sm tracking-widest uppercase font-medium">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-12 space-x-8">
            <button onClick={prevSlide} className="p-3 border border-luxury-black/20 rounded-full hover:border-luxury-gold hover:text-luxury-gold transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current ? 'bg-luxury-gold w-6' : 'bg-luxury-black/30'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="p-3 border border-luxury-black/20 rounded-full hover:border-luxury-gold hover:text-luxury-gold transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row bg-soft-gray shadow-2xl overflow-hidden">
        <div className="lg:w-5/12 relative min-h-[400px]">
           <img 
              src={contactBg} 
              alt="Luxury Interior" 
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-luxury-black/50 mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-0 p-12 text-white z-10">
              <h3 className="text-3xl font-serif mb-4">Private Consultation</h3>
              <div className="space-y-3 font-light">
                <p className="flex items-center"><Pin className="mr-4 text-luxury-gold" size={20} /> 3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
                <p className="flex items-center"><Phone className="mr-4 text-luxury-gold" size={20} /> (206) 919-6886 / (425) 941-2560</p>
                <p className="flex items-center"><Mail className="mr-4 text-luxury-gold" size={20} /> marcimetzger@gmail.com</p>
              </div>
            </div>
        </div>
        
        <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
          <h4 className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-bold mb-6">Inquire</h4>
          <h2 className="text-4xl font-serif text-luxury-black mb-8">Begin Your Conversation</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input type="text" id="name" placeholder=" " className="block w-full border-b border-gray-300 py-3 focus:outline-none focus:border-luxury-gold bg-transparent peer" />
                <label htmlFor="name" className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-gold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs">Your Name</label>
              </div>
               <div className="relative">
                <input type="tel" id="phone" placeholder=" " className="block w-full border-b border-gray-300 py-3 focus:outline-none focus:border-luxury-gold bg-transparent peer" />
                <label htmlFor="phone" className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-gold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs">Phone Number</label>
              </div>
            </div>
            <div className="relative">
              <input type="email" id="email" placeholder=" " className="block w-full border-b border-gray-300 py-3 focus:outline-none focus:border-luxury-gold bg-transparent peer" />
              <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-gold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs">Email Address</label>
            </div>
            <div className="relative">
              <textarea id="message" rows="4" placeholder=" " className="block w-full border-b border-gray-300 py-3 focus:outline-none focus:border-luxury-gold bg-transparent peer resize-none"></textarea>
              <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-gold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs">How can we assist?</label>
            </div>
            <button className="bg-luxury-black text-white px-12 py-4 w-full md:w-auto uppercase tracking-[0.15em] text-sm font-bold hover:bg-luxury-gold transition-colors duration-300">
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Location = () => (
  <section id="location" className="w-full h-[400px] md:h-[500px] bg-gray-200">
    <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.272515167396!2d-115.95782812540088!3d36.18425370218006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c639760f7b12f3%3A0xa05207dd285dc73c!2sTHE%20RIDGE%20REALTY%20GROUP!5e0!3m2!1sen!2sph!4v1765088290777!5m2!1sen!2sph" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Santa Barbara Office Location"
      ></iframe>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="md:w-1/3">
        <span className="text-2xl font-serif font-bold text-luxury-black">MARCI METZGER</span>
        <p className="text-sm text-gray-500 mt-6 leading-relaxed uppercase tracking-wider">
          Pahrump Realtor <br/> Luxury Real Estate Brokerage
        </p>
      </div>
      <div className="md:w-1/3 grid grid-cols-2 gap-8">
        <div>
          <h5 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h5>
          <ul className="space-y-4 text-sm text-gray-600 font-medium tracking-wider">
            <li><a href="#home" className="hover:text-luxury-gold transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-luxury-gold transition-colors">About</a></li>
            <li><a href="#listings" className="hover:text-luxury-gold transition-colors">Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold uppercase tracking-widest mb-6">Connect</h5>
           <div className="flex space-x-6">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marciandlauren_nvrealtors/" className="text-luxury-black hover:text-luxury-gold transition-colors"><Instagram size={20} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/MarciHomes/" className="text-luxury-black hover:text-luxury-gold transition-colors"><Facebook size={20} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marci-metzger-30642496/" className="text-luxury-black hover:text-luxury-gold transition-colors"><Linkedin size={20} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" className="text-luxury-black hover:text-luxury-gold transition-colors" aria-label="Yelp">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.0001 19.34L10.4301 13.56L4.50012 14.12C4.16012 14.15 3.97012 13.75 4.19012 13.51L8.79012 8.46L6.50012 2.89C6.38012 2.58 6.72012 2.31 6.99012 2.49L11.8501 5.7L16.7101 2.49C16.9801 2.31 17.3201 2.58 17.2001 2.89L14.9101 8.46L19.5101 13.51C19.7301 13.75 19.5401 14.15 19.2001 14.12L13.2701 13.56L12.0001 19.34Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-wider">
      <p>© 2025 Marci Metzger. All Rights Reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="font-sans selection:bg-luxury-gold selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Listings />
      <TestimonialSlider />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;