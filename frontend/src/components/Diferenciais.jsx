import { motion } from "framer-motion";
import { Shield, Truck, Award, Headphones } from "lucide-react";

const diferenciais = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Produtos de alto padrão com garantia de qualidade em todos os itens.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística eficiente para entregar seus materiais no prazo certo.",
  },
  {
    icon: Award,
    title: "Marcas Premium",
    description: "Trabalhamos apenas com as melhores marcas do mercado.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Equipe técnica pronta para auxiliar em seu projeto.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const Diferenciais = () => {
  return (
    <section 
      id="diferenciais" 
      data-testid="diferenciais-section"
      className="py-20 md:py-32 bg-gray-50"
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
            Por que escolher a Molduflex?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compromisso com excelência em cada detalhe do seu projeto
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                data-testid={`diferencial-card-${index}`}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-molduflex-orange to-molduflex-orange-light rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="w-14 h-14 bg-molduflex-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-molduflex-orange transition-colors duration-300">
                  <Icon className="w-7 h-7 text-molduflex-orange group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
