import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

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

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos Molduflex.")}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <motion.header
        data-testid="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#hero")}
              className="flex-shrink-0"
            >
              <img
                src={LOGO_URL}
                alt="Molduflex Logo"
                className="h-10 md:h-12"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-molduflex-orange ${
                    isScrolled ? "text-gray-700" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={handleWhatsApp}
                data-testid="navbar-cta-button"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-molduflex-orange text-white text-sm font-semibold rounded-full hover:bg-molduflex-orange-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="navbar-mobile-menu-button"
              className="md:hidden p-2 text-gray-700 hover:text-molduflex-orange transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white pt-20 md:hidden"
          >
            <nav className="flex flex-col px-6 py-8">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="py-4 text-lg font-medium text-gray-900 border-b border-gray-100 text-left hover:text-molduflex-orange transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navigation.length * 0.05 }}
                onClick={handleWhatsApp}
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-4 bg-molduflex-orange text-white text-lg font-semibold rounded-full hover:bg-molduflex-orange-dark transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Fale Conosco
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
