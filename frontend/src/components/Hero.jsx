import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "5511922903862";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os produtos Molduflex.";
const LOGO_URL = "https://customer-assets.emergentagent.com/job_04f4feb0-a2f9-422f-a508-18c68c54ff5c/artifacts/dphgon6g_LOGO%20CAIO%20MOLDUFLEX.png";

export const Hero = () => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.img
              src={LOGO_URL}
              alt="Molduflex Logo"
              className="h-12 md:h-16 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Fabricamos os{" "}
              <span className="text-molduflex-orange">melhores</span> produtos{" "}
              <span className="relative inline-block">
                do mercado
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-molduflex-orange rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              Somos fábrica e distribuidora de soluções inteligentes para 
              construção civil. Da produção à entrega, garantimos qualidade 
              e inovação em cada produto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                data-testid="hero-cta-button"
                onClick={handleWhatsApp}
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-molduflex-orange text-white font-semibold text-lg rounded-full shadow-lg hover:bg-molduflex-orange-dark transition-colors duration-300 animate-pulse-ring"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Fale Conosco
              </motion.button>
              
              <motion.button
                data-testid="hero-products-button"
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-200 text-gray-700 font-semibold text-lg rounded-full hover:border-molduflex-orange hover:text-molduflex-orange transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Produtos
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-molduflex-orange/10 to-transparent rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?w=800&q=80"
                alt="Chão de fábrica Molduflex com maquinário industrial"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 md:p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-molduflex-orange/10 rounded-full flex items-center justify-center">
                    <span className="text-molduflex-orange text-2xl font-bold">+</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500</p>
                    <p className="text-sm text-gray-500">Projetos Realizados</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-molduflex-orange transition-colors cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm font-medium">Explore</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};
