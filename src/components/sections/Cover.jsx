import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "../../data/weddingData";

const Cover = () => {
  const { groom, bride } = weddingData.couple;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background dengan efek gradient dan foto blur */}
      <div className="absolute inset-0">
        {/* Background image blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-sm opacity-20"
          style={{
            backgroundImage: "url('/images/couple/feri-tasya2.JPEG')",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100/60 via-white/80 to-rose-50/60"></div>

        {/* Dekorasi floating */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        {/* Dekorasi bunga kecil */}
        <motion.div
          className="absolute top-20 right-10 text-4xl opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🌸
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10 text-4xl opacity-30"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🌷
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ornament atas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-rose-300"></span>
              <Heart size={16} className="text-rose-400" fill="currentColor" />
              <span className="w-16 h-px bg-rose-300"></span>
            </div>
          </motion.div>

          {/* Label */}
          <motion.p
            className="text-sm text-rose-500 tracking-[0.3em] uppercase mb-3 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            The Wedding of
          </motion.p>

          {/* Nama pengantin dengan font Great Vibes - UKURAN DIPERKECIL */}
          <motion.h1
            className="text-4xl md:text-6xl text-gray-800 mb-4 leading-tight"
            style={{
              fontFamily: "'Great Vibes', 'Playfair Display', cursive, serif",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {groom.name}
            <span
              className="block text-2xl md:text-3xl text-rose-400 font-light mt-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &amp;
            </span>
            {bride.name}
          </motion.h1>

          {/* Garis dekoratif */}
          <motion.div
            className="flex items-center justify-center gap-4 text-sm text-gray-400 my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="w-12 h-px bg-rose-300"></span>
            <span className="tracking-widest font-light">23.10.2026</span>
            <span className="w-12 h-px bg-rose-300"></span>
          </motion.div>

          {/* Card kaca (glassmorphism) untuk Al-Quran */}
          <motion.div
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl p-5 backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
              {/* Efek glass shine */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tl from-rose-200/20 to-transparent rounded-full blur-2xl" />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
                  untukmu pasangan hidup dari jenismu sendiri..."
                </p>
                <p className="text-xs text-rose-400 mt-2 font-medium tracking-wider">
                  — QS. Ar-Rum: 21
                </p>
              </div>
            </div>
          </motion.div>

          {/* Undangan text */}
          <motion.p
            className="text-gray-600 font-light text-sm max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
            Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami
          </motion.p>

          {/* Ornament bawah */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 h-px bg-rose-300"></span>
              <Heart
                size={14}
                className="text-rose-400/60"
                fill="currentColor"
              />
              <span className="w-12 h-px bg-rose-300"></span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cover;
