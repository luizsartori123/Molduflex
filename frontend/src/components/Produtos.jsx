import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5511922903862";

const produtos = [
  {
    id: "climatizacao",
    title: "Climatização e Refrigeração",
    description: "Soluções completas para conforto térmico e instalação em ambientes residenciais e comerciais.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    span: "md:col-span-2",
  },
  {
    id: "cozinha",
    title: "Cozinha",
    description: "Acabamentos, cubas e materiais para cozinhas modernas e funcionais.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    span: "",
  },
  {
    id: "revestimento",
    title: "Revestimento",
    description: "Pisos, azulejos e revestimentos de alta qualidade para todos os ambientes.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    span: "",
  },
  {
    id: "banheiro",
    title: "Banheiro",
    description: "Ralos em inox, pias e gabinetes que garantem acabamento premium para banheiros sofisticados.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    span: "",
  },
  {
    id: "tintas",
    title: "Tintas",
    description: "Cores e texturas que transformam qualquer ambiente com qualidade superior.",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=600&q=80",
    span: "",
  },
  {
    id: "pedras",
    title: "Pedras e Rochas",
    description: "Mármores, granitos e pedras naturais para acabamentos exclusivos.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    span: "md:col-span-2",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Produtos = () => {
  const handleProductClick = (productTitle) => {
    const message = `Olá! Gostaria de saber mais sobre ${productTitle}.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section 
      id="produtos" 
      data-testid="produtos-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-molduflex-orange/10 text-molduflex-orange text-sm font-semibold rounded-full mb-4">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Linha de Produtos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre tudo o que você precisa para sua obra em um só lugar
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {produtos.map((produto, index) => (
            <motion.div
              key={produto.id}
              variants={itemVariants}
              data-testid={`produto-card-${produto.id}`}
              onClick={() => handleProductClick(produto.title)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${produto.span} h-[280px] md:h-[320px]`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={produto.image}
                  alt={produto.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {produto.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
                    {produto.description}
                  </p>
                  <div className="flex items-center gap-2 text-molduflex-orange font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-molduflex-orange rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
