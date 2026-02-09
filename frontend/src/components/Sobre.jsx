import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "500+", label: "Projetos Realizados" },
  { value: "1000+", label: "Clientes Satisfeitos" },
  { value: "100%", label: "Compromisso" },
];

const beneficios = [
  "Atendimento personalizado para cada projeto",
  "Produtos de marcas reconhecidas no mercado",
  "Consultoria técnica especializada",
  "Preços competitivos e condições flexíveis",
];

export const Sobre = () => {
  return (
    <section 
      id="sobre" 
      data-testid="sobre-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-molduflex-orange/10 text-molduflex-orange text-sm font-semibold rounded-full mb-4">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Sobre a{" "}
              <span className="text-molduflex-orange">Molduflex</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A Molduflex é referência no mercado de materiais de construção e acabamentos. 
              Com anos de experiência, oferecemos soluções completas para projetos residenciais 
              e comerciais, sempre priorizando qualidade e satisfação dos nossos clientes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nossa missão é transformar projetos em realidade, fornecendo os melhores 
              materiais e um atendimento diferenciado que faz a diferença em cada obra.
            </p>

            <div className="space-y-4">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-molduflex-orange flex-shrink-0" />
                  <span className="text-gray-700">{beneficio}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-molduflex-orange/5 rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Equipe Molduflex trabalhando em projeto"
                className="relative rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  data-testid={`stat-card-${index}`}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:bg-molduflex-orange/5 transition-colors"
                >
                  <p className="text-3xl md:text-4xl font-bold text-molduflex-orange mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
