import { motion } from "framer-motion";
import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_04f4feb0-a2f9-422f-a508-18c68c54ff5c/artifacts/dphgon6g_LOGO%20CAIO%20MOLDUFLEX.png";
const WHATSAPP_NUMBER = "5511922903862";

const navigation = [
  { name: "Início", href: "#hero" },
  { name: "Onde Encontrar", href: "#onde-encontrar" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Produtos", href: "#produtos" },
  { name: "Galeria", href: "#galeria" },
  { name: "Sobre", href: "#sobre" },
];

const produtos = [
  "Climatização",
  "Cozinha",
  "Revestimento",
  "Banheiro",
  "Tintas",
  "Pedras e Rochas",
];

export const Footer = () => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos Molduflex.")}`;
    window.open(url, "_blank");
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      data-testid="footer-section"
      className="bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={LOGO_URL}
              alt="Molduflex Logo"
              className="h-10 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Materiais de construção e acabamentos de alto padrão para transformar 
              seus projetos em realidade.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/molduflex"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram-link"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-molduflex-orange transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={handleWhatsApp}
                data-testid="footer-whatsapp-link"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-molduflex-orange transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-molduflex-orange transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Produtos</h3>
            <ul className="space-y-4">
              {produtos.map((produto) => (
                <li key={produto}>
                  <button
                    onClick={() => scrollToSection("#produtos")}
                    className="text-gray-400 hover:text-molduflex-orange transition-colors"
                  >
                    {produto}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5511922903862"
                  data-testid="footer-phone-link"
                  className="flex items-center gap-3 text-gray-400 hover:text-molduflex-orange transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>(11) 9 2290-3862</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@molduflex.com.br"
                  data-testid="footer-email-link"
                  className="flex items-center gap-3 text-gray-400 hover:text-molduflex-orange transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>contato@molduflex.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/molduflex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-molduflex-orange transition-colors"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                  <span>@molduflex</span>
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <button
              onClick={handleWhatsApp}
              data-testid="footer-cta-button"
              className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-molduflex-orange text-white font-semibold rounded-full hover:bg-molduflex-orange-dark transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Molduflex. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Materiais de Construção e Acabamentos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
