import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const parceiros = [
  {
    name: "Amoedo",
    logo: "https://linhaplana.com/molduflex/img/amoedo.6643e1ae.png",
    url: "https://www.amoedo.com.br/",
  },
  {
    name: "Casa & Construção",
    logo: "https://linhaplana.com/molduflex/img/casa&construcao.781f2310.png",
    url: "https://www.casaeconstrucao.com.br/",
  },
  {
    name: "Chatuba",
    logo: "https://linhaplana.com/molduflex/img/chatuba.1d2f6e5f.svg",
    url: "https://www.chatuba.com.br/",
  },
  {
    name: "Dalla",
    logo: "https://linhaplana.com/molduflex/img/dalla.59812c0e.svg",
    url: "https://www.dalla.com.br/",
  },
  {
    name: "Emídio Pais",
    logo: "https://linhaplana.com/molduflex/img/emidio-pais.243ee064.png",
    url: "https://www.emidiopais.com.br/",
  },
  {
    name: "Ferreira Costa",
    logo: "https://linhaplana.com/molduflex/img/ferreira-costa.9d760d52.svg",
    url: "https://www.ferreiracosta.com/",
  },
  {
    name: "Leroy Merlin",
    logo: "https://linhaplana.com/molduflex/img/leroy-merlin.7a8036c8.png",
    url: "https://www.leroymerlin.com.br/",
  },
];

// Duplicar para criar efeito de loop infinito
const duplicatedParceiros = [...parceiros, ...parceiros, ...parceiros];

export const OndeEncontrar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  return (
    <section 
      id="onde-encontrar" 
      data-testid="onde-encontrar-section"
      className="py-16 md:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 bg-molduflex-orange/10 text-molduflex-orange text-sm font-semibold rounded-full mb-4">
            Nossos Parceiros
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Onde Encontrar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossos produtos estão disponíveis nos principais home centers do Brasil
          </p>
        </motion.div>
      </div>

      {/* Carrossel Infinito */}
      <div 
        ref={containerRef}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-12 md:gap-20"
          animate={{
            x: isHovered ? 0 : [0, -100 * parceiros.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedParceiros.map((parceiro, index) => (
            <motion.a
              key={`${parceiro.name}-${index}`}
              href={parceiro.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`parceiro-${parceiro.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              title={`Visitar ${parceiro.name}`}
            >
              <img
                src={parceiro.logo}
                alt={`Logo ${parceiro.name}`}
                className="h-full w-auto object-contain max-w-[150px] md:max-w-[180px]"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Gradientes nas bordas */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
      </div>

      {/* Badges de confiança */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
      >
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 text-molduflex-orange" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Entrega em todo Brasil</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 text-molduflex-orange" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">+7 redes parceiras</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 text-molduflex-orange" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Qualidade garantida</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
