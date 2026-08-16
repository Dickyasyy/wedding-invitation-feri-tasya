import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev

  // Data gambar untuk slideshow - urutan: galeri4, galeri2, galeri1
  const slideImages = [
    { id: 4, src: "/images/galeri4.JPEG", alt: "Galeri 4" },
    { id: 2, src: "/images/galeri2.JPEG", alt: "Galeri 2" },
    { id: 1, src: "/images/galeri1.JPEG", alt: "Galeri 1" },
  ];

  // Data gambar untuk card bawah - kiri: galeri2, kanan: galeri1
  const bottomImages = [
    { id: 2, src: "/images/galeri2.JPEG", alt: "Galeri 2" },
    { id: 1, src: "/images/galeri1.JPEG", alt: "Galeri 1" },
  ];

  // ===== AUTO SLIDE =====
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000); // Ganti slide setiap 4 detik

    return () => clearInterval(interval);
  }, [slideImages.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + slideImages.length) % slideImages.length,
    );
  };

  // Variants untuk animasi slide
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.5,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const openLightbox = (src, alt) => {
    setSelectedImage({ src, alt });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    const allImages = [...slideImages, ...bottomImages];
    const currentIndex = allImages.findIndex(
      (img) => img.src === selectedImage.src,
    );
    const newIndex =
      (currentIndex + direction + allImages.length) % allImages.length;
    setSelectedImage(allImages[newIndex]);
  };

  // Component untuk gambar
  const GalleryImage = ({ src, alt, className, onClick }) => {
    const [imgError, setImgError] = useState(false);

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={onClick}
        onError={(e) => {
          if (!imgError) {
            setImgError(true);
            const fallbackSrc = src.replace(".JPEG", ".jpeg");
            if (e.target.src !== fallbackSrc) {
              e.target.src = fallbackSrc;
            }
          } else {
            e.target.style.display = "none";
            const parent = e.target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-200 to-gray-300 p-4">
                  <span class="text-gray-400 text-6xl mb-2">📸</span>
                  <span class="text-gray-500 text-sm">${alt}</span>
                </div>
              `;
            }
          }
        }}
      />
    );
  };

  // Class untuk gambar - object-cover agar full
  const getImageClassName = (isSlide = false) => {
    if (isSlide) {
      return "w-full h-full object-cover cursor-pointer";
    }
    return "w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110";
  };

  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden">
      {/* Background mewah dengan gradient dan dekorasi */}
      <div className="absolute inset-0">
        {/* Base gradient mewah */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-rose-50/20 to-pink-100/30"></div>

        {/* Background blur effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 scale-110 blur-sm"
          style={{
            backgroundImage: "url('/images/couple/feri-tasya2.JPEG')",
          }}
        />

        {/* Dekorasi floating blobs - lebih banyak dan mewah */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-100/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Dekorasi bunga dan bintang */}
        <motion.div
          className="absolute top-10 right-10 text-3xl opacity-20 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 text-3xl opacity-20 pointer-events-none"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-20 left-20 text-2xl opacity-15 pointer-events-none"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🌸
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-2xl opacity-15 pointer-events-none"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🌷
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-32 text-xl opacity-10 pointer-events-none"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🕊️
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-32 text-xl opacity-10 pointer-events-none"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🕊️
        </motion.div>

        {/* Decorative dots - elegant */}
        <div className="absolute top-10 right-20 opacity-20 pointer-events-none">
          <div className="flex gap-2">
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
          </div>
        </div>
        <div className="absolute bottom-10 left-20 opacity-20 pointer-events-none">
          <div className="flex gap-2">
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-1 md:mb-2">
            <span className="w-4 md:w-6 h-px bg-rose-300/50"></span>
            <span className="text-rose-300/40 text-[8px] md:text-[10px]">
              ✦
            </span>
            <Heart
              size={8}
              className="text-rose-400/50 md:w-3 md:h-3"
              fill="currentColor"
            />
            <span className="text-rose-300/40 text-[8px] md:text-[10px]">
              ✦
            </span>
            <span className="w-4 md:w-6 h-px bg-rose-300/50"></span>
          </div>

          <h2
            className="text-4xl md:text-5xl text-gray-800 tracking-wide"
            style={{
              fontFamily: "'Great Vibes', 'Playfair Display', cursive, serif",
            }}
          >
            Galeri
          </h2>

          {/* Kata-kata di bawah judul */}
          <p className="text-gray-500 text-xs md:text-sm mt-3 font-light max-w-xs md:max-w-md mx-auto leading-relaxed italic">
            "Setiap momen bahagia terukir dalam bingkai indah, menjadi saksi
            cinta yang abadi."
          </p>

          <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-3 md:mt-4">
            <span className="w-6 md:w-8 h-px bg-rose-300/20"></span>
            <span className="text-rose-300/20 text-[6px] md:text-[8px]">✧</span>
            <span className="w-4 md:w-6 h-px bg-rose-300/20"></span>
            <span className="text-rose-300/20 text-[6px] md:text-[8px]">✧</span>
            <span className="w-6 md:w-8 h-px bg-rose-300/20"></span>
          </div>
        </motion.div>

        {/* Slideshow - Baris 1 dengan animasi slide ke kanan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-4 md:mb-6 overflow-hidden"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200/50 backdrop-blur-sm aspect-[4/3] md:aspect-[16/9] border border-white/20">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <GalleryImage
                  src={slideImages[currentSlide].src}
                  alt={slideImages[currentSlide].alt}
                  className={getImageClassName(true)}
                  onClick={() =>
                    openLightbox(
                      slideImages[currentSlide].src,
                      slideImages[currentSlide].alt,
                    )
                  }
                />
              </motion.div>
            </AnimatePresence>

            {/* Tombol navigasi */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 z-10"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>

            {/* Indikator slide */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid Bawah - kiri: galeri2, kanan: galeri1 */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {bottomImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200/50 backdrop-blur-sm aspect-[4/3] cursor-pointer group border border-white/20"
              onClick={() => openLightbox(image.src, image.alt)}
            >
              <GalleryImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay saat hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs md:text-sm tracking-wider font-light">
                  Lihat Foto
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(-1);
            }}
            className="absolute left-4 text-white/80 hover:text-white p-2 z-10"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(1);
            }}
            className="absolute right-4 text-white/80 hover:text-white p-2 z-10"
          >
            <ChevronRight size={32} />
          </button>

          <motion.img
            key={selectedImage.src}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              const fallbackSrc = selectedImage.src.replace(".JPEG", ".jpeg");
              if (e.target.src !== fallbackSrc) {
                e.target.src = fallbackSrc;
              }
            }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
