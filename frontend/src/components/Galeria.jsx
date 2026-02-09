import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const galeriaImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Sala de Estar Moderna",
    category: "Residencial",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    title: "Cozinha Planejada",
    category: "Cozinha",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Fachada Contemporânea",
    category: "Arquitetura",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    title: "Banheiro Premium",
    category: "Banheiro",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    title: "Área Gourmet",
    category: "Lazer",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    title: "Quarto Master",
    category: "Residencial",
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galeriaImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galeriaImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galeriaImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galeriaImages[newIndex]);
  };

  return (
    <section 
      id="galeria" 
      data-testid="galeria-section"
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
            Inspiração
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Galeria de Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos projetos realizados com nossos materiais
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {galeriaImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              data-testid={`galeria-item-${image.id}`}
              onClick={() => openLightbox(image, index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 bg-molduflex-orange text-white text-xs font-semibold rounded-full mb-2">
                  {image.category}
                </span>
                <h3 className="text-white text-lg font-semibold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none">
          <VisuallyHidden>
            <DialogTitle>Visualização de imagem da galeria</DialogTitle>
            <DialogDescription>
              {selectedImage ? selectedImage.title : "Imagem do projeto"}
            </DialogDescription>
          </VisuallyHidden>
          <AnimatePresence mode="wait">
            {selectedImage && (
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Navigation Buttons */}
                <button
                  data-testid="lightbox-prev-button"
                  onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                
                <button
                  data-testid="lightbox-next-button"
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                  <span className="inline-block px-3 py-1 bg-molduflex-orange text-white text-xs font-semibold rounded-full mb-2">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    {currentIndex + 1} / {galeriaImages.length}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};
