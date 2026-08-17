import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  // =========================================================
  // STATE
  // =========================================================
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  // =========================================================
  // SEMUA 11 FOTO
  // =========================================================
  const images = [
    {
      id: 1,
      src: "/images/couple/feri-tasya1.JPEG",
      alt: "Feri dan Tasya 1",
    },
    {
      id: 2,
      src: "/images/couple/feri-tasya2.JPEG",
      alt: "Feri dan Tasya 2",
    },
    {
      id: 3,
      src: "/images/couple/galeri6.jpeg",
      alt: "Galeri 6",
    },
    {
      id: 4,
      src: "/images/couple/galeri7.jpeg",
      alt: "Galeri 7",
    },
    {
      id: 5,
      src: "/images/couple/galeri1.JPEG",
      alt: "Galeri 1",
    },
    {
      id: 6,
      src: "/images/couple/galeri2.JPEG",
      alt: "Galeri 2",
    },
    {
      id: 7,
      src: "/images/couple/galeri4.JPEG",
      alt: "Galeri 4",
    },
    {
      id: 8,
      src: "/images/couple/feri-tasya3.JPEG",
      alt: "Feri dan Tasya 3",
    },
    {
      id: 9,
      src: "/images/couple/feri-tasya4.JPEG",
      alt: "Feri dan Tasya 4",
    },
    {
      id: 10,
      src: "/images/couple/galeri5.jpeg",
      alt: "Galeri 5",
    },
    {
      id: 11,
      src: "/images/couple/galeri8.jpeg",
      alt: "Galeri 8",
    },
  ];

  // =========================================================
  // AUTO SLIDESHOW
  // =========================================================
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);

      setCurrentSlide((prev) => {
        return (prev + 1) % images.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // =========================================================
  // NEXT SLIDE
  // =========================================================
  const nextSlide = () => {
    setDirection(1);

    setCurrentSlide((prev) => {
      return (prev + 1) % images.length;
    });
  };

  // =========================================================
  // PREVIOUS SLIDE
  // =========================================================
  const prevSlide = () => {
    setDirection(-1);

    setCurrentSlide((prev) => {
      return (prev - 1 + images.length) % images.length;
    });
  };

  // =========================================================
  // SLIDE ANIMATION
  // =========================================================
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
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
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  // =========================================================
  // OPEN LIGHTBOX
  // =========================================================
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // =========================================================
  // CLOSE LIGHTBOX
  // =========================================================
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // =========================================================
  // NAVIGATE LIGHTBOX
  // =========================================================
  const navigateLightbox = (moveDirection) => {
    if (!selectedImage) return;

    const currentIndex = images.findIndex(
      (image) => image.src === selectedImage.src,
    );

    if (currentIndex === -1) return;

    const newIndex =
      (currentIndex + moveDirection + images.length) % images.length;

    setSelectedImage(images[newIndex]);
  };

  // =========================================================
  // GALLERY IMAGE
  // =========================================================
  const GalleryImage = ({ src, alt, className = "", onClick }) => {
    const [source, setSource] = useState(src);
    const [attempt, setAttempt] = useState(0);

    const handleError = () => {
      if (attempt >= 1) return;

      setAttempt((prev) => prev + 1);

      if (source.includes(".JPEG")) {
        setSource(source.replace(".JPEG", ".jpeg"));
      } else if (source.includes(".jpeg")) {
        setSource(source.replace(".jpeg", ".JPEG"));
      }
    };

    if (attempt >= 1) {
      return (
        <div
          className={`
            w-full
            h-full
            flex
            flex-col
            items-center
            justify-center
            bg-rose-50
            text-gray-400
            ${className}
          `}
        >
          <span className="text-3xl md:text-4xl">📸</span>

          <span className="text-[9px] md:text-xs mt-2">{alt}</span>
        </div>
      );
    }

    return (
      <img
        src={source}
        alt={alt}
        draggable="false"
        onClick={onClick}
        onError={handleError}
        className={className}
      />
    );
  };

  // =========================================================
  // GRID ITEM - TANPA ANIMASI MASUK
  // =========================================================
  const GridItem = ({ image, className = "" }) => {
    return (
      <div
        onClick={() => openLightbox(image)}
        className={`
        relative
        overflow-hidden
        cursor-pointer
        group
        bg-gray-200
        ${className}
      `}
      >
        {/* Background blur - blur-md (tidak terlalu blur) */}
        <div
          className="
          absolute
          inset-[-12%]
          bg-cover
          bg-center
          bg-no-repeat
          blur-md
          scale-110
        "
          style={{
            backgroundImage: `url("${image.src}")`,
          }}
        />

        <div
          className="
          absolute
          inset-0
          bg-black/10
        "
        />

        <div
          className="
          absolute
          inset-0
          z-10
          flex
          items-center
          justify-center
        "
        >
          <GalleryImage
            src={image.src}
            alt={image.alt}
            className="
            w-full
            h-full
            object-contain
            select-none
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.03]
          "
          />
        </div>

        <div
          className="
          absolute
          inset-0
          z-20
          bg-black/15
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
        "
        />

        <div
          className="
          absolute
          z-30
          bottom-2
          left-1/2
          -translate-x-1/2
          text-white
          text-[8px]
          md:text-[9px]
          tracking-wider
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
          whitespace-nowrap
        "
        >
          Lihat Foto
        </div>
      </div>
    );
  };

  // =========================================================
  // FOTO SLIDE AKTIF
  // =========================================================
  const activeImage = images[currentSlide];

  return (
    <section
      className="
    relative
    py-12
    md:py-16
    px-2
    sm:px-3
    md:px-4
    overflow-hidden
    mb-0
  "
    >
      {/* =====================================================
          BACKGROUND SECTION
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-rose-100/40
            via-rose-50/20
            to-pink-100/30
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
            opacity-10
            scale-110
          "
          style={{
            backgroundImage: "url('/images/couple/feri-tasya2.JPEG')",
          }}
        />

        <motion.div
          className="
            absolute
            -top-40
            -right-40
            w-96
            h-96
            bg-rose-200/20
            rounded-full
            blur-3xl
          "
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
          className="
            absolute
            -bottom-40
            -left-40
            w-96
            h-96
            bg-pink-200/20
            rounded-full
            blur-3xl
          "
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
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            bg-rose-100/10
            rounded-full
            blur-3xl
          "
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="
            absolute
            top-10
            right-10
            text-3xl
            opacity-20
          "
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ✨
        </motion.div>

        <motion.div
          className="
            absolute
            bottom-10
            left-10
            text-3xl
            opacity-20
          "
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ✨
        </motion.div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          mx-auto
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-center
            mb-8
            md:mb-12
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-1.5
              md:gap-2
              mb-1
              md:mb-2
            "
          >
            <span
              className="
                w-4
                md:w-6
                h-px
                bg-rose-300/50
              "
            />

            <span
              className="
                text-rose-300/40
                text-[8px]
                md:text-[10px]
              "
            >
              ✦
            </span>

            <Heart
              size={8}
              className="
                text-rose-400/50
                md:w-3
                md:h-3
              "
              fill="currentColor"
            />

            <span
              className="
                text-rose-300/40
                text-[8px]
                md:text-[10px]
              "
            >
              ✦
            </span>

            <span
              className="
                w-4
                md:w-6
                h-px
                bg-rose-300/50
              "
            />
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              text-gray-800
              tracking-wide
              font-brittany
            "
          >
            Galeri
          </h2>

          <p
            className="
              text-gray-500
              text-xs
              md:text-sm
              mt-3
              font-light
              max-w-xs
              md:max-w-md
              mx-auto
              leading-relaxed
              italic
            "
          >
            "Setiap momen bahagia terukir dalam bingkai indah, menjadi saksi
            cinta yang abadi."
          </p>
        </motion.div>

        {/* ===================================================
            BARIS 1 - SLIDESHOW
        ==================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            w-full
            mb-[2px]
            overflow-hidden
          "
        >
          <div
            className="
              relative
              w-full
              overflow-hidden
              bg-transparent
            "
          >
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={activeImage.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="
                  relative
                  w-full
                  flex
                  items-center
                  justify-center
                "
              >
                <GalleryImage
                  src={activeImage.src}
                  alt={activeImage.alt}
                  onClick={() => openLightbox(activeImage)}
                  className="
                    block
                    w-full
                    h-auto
                    max-w-full
                    object-contain
                    cursor-pointer
                    select-none
                  "
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              aria-label="Foto sebelumnya"
              className="
                absolute
                z-30
                left-2
                md:left-4
                top-1/2
                -translate-y-1/2
                w-8
                h-8
                md:w-10
                md:h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-white/80
                backdrop-blur-sm
                shadow-lg
                hover:bg-white
                transition-all
                duration-300
              "
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Foto berikutnya"
              className="
                absolute
                z-30
                right-2
                md:right-4
                top-1/2
                -translate-y-1/2
                w-8
                h-8
                md:w-10
                md:h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-white/80
                backdrop-blur-sm
                shadow-lg
                hover:bg-white
                transition-all
                duration-300
              "
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>

            <div
              className="
                absolute
                z-30
                bottom-2
                md:bottom-4
                left-1/2
                -translate-x-1/2
                flex
                items-center
                gap-1
              "
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);

                    setCurrentSlide(index);
                  }}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentSlide === index
                        ? "w-5 bg-white shadow"
                        : "w-1.5 bg-white/70"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            BARIS 2 & 3 - GRID 11 FOTO (TANPA ANIMASI)
        ==================================================== */}
        <div
          className="
            grid
            grid-cols-7
            grid-rows-2
            gap-[2px]
            w-full
            aspect-[4.1/1]
          "
        >
          <GridItem
            image={images[0]}
            className="
              col-start-1
              row-start-1
            "
          />

          <GridItem
            image={images[1]}
            className="
              col-start-2
              row-start-1
            "
          />

          <GridItem
            image={images[2]}
            className="
              col-start-3
              row-start-1
              row-span-2
            "
          />

          <GridItem
            image={images[3]}
            className="
              col-start-4
              row-start-1
              row-span-2
            "
          />

          <GridItem
            image={images[4]}
            className="
              col-start-5
              row-start-1
            "
          />

          <GridItem
            image={images[5]}
            className="
              col-start-6
              row-start-1
            "
          />

          <GridItem
            image={images[6]}
            className="
              col-start-7
              row-start-1
            "
          />

          <GridItem
            image={images[7]}
            className="
              col-start-1
              row-start-2
            "
          />

          <GridItem
            image={images[8]}
            className="
              col-start-2
              row-start-2
            "
          />

          <GridItem
            image={images[9]}
            className="
              col-start-5
              row-start-2
              col-span-2
            "
          />

          <GridItem
            image={images[10]}
            className="
              col-start-7
              row-start-2
            "
          />
        </div>
      </div>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-50
              bg-black/95
              flex
              items-center
              justify-center
              p-3
              md:p-6
            "
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              aria-label="Tutup galeri"
              className="
                absolute
                top-3
                right-3
                md:top-5
                md:right-5
                z-50
                p-2
                text-white/80
                hover:text-white
                transition
              "
            >
              <X size={30} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
              aria-label="Foto sebelumnya"
              className="
                absolute
                left-1
                md:left-5
                top-1/2
                -translate-y-1/2
                z-50
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-white/10
                hover:bg-white/20
                text-white
                transition
              "
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
              aria-label="Foto berikutnya"
              className="
                absolute
                right-1
                md:right-5
                top-1/2
                -translate-y-1/2
                z-50
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-white/10
                hover:bg-white/20
                text-white
                transition
              "
            >
              <ChevronRight size={28} />
            </button>

            <motion.img
              key={selectedImage.src}
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              draggable="false"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                if (e.target.src.includes(".JPEG")) {
                  e.target.src = e.target.src.replace(".JPEG", ".jpeg");
                }
              }}
              className="
                max-w-[92vw]
                max-h-[88vh]
                w-auto
                h-auto
                object-contain
                rounded-md
                shadow-2xl
                select-none
              "
            />

            <div
              className="
                absolute
                bottom-3
                md:bottom-5
                left-1/2
                -translate-x-1/2
                text-white/60
                text-[9px]
                md:text-xs
                tracking-widest
                uppercase
                pointer-events-none
                whitespace-nowrap
              "
            >
              {selectedImage.alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
