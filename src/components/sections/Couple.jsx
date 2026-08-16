import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "../../data/weddingData";

const Couple = () => {
  const { groom, bride } = weddingData.couple;

  const CoupleCard = ({ person, title, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center w-full"
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-b from-gray-100 to-gray-200">
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute -inset-1 rounded-full border border-rose-200/30 -z-10" />
        <div className="absolute -inset-3 rounded-full border border-rose-100/20 -z-20" />
      </motion.div>

      <div className="text-center mt-4">
        {/* Nama pakai font Great Vibes */}
        <h3
          className="text-2xl md:text-3xl text-gray-800"
          style={{
            fontFamily: "'Great Vibes', 'Playfair Display', cursive, serif",
          }}
        >
          {person.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{title}</p>
        <p className="text-xs text-gray-400 mt-2">{person.parentName}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden">
      {/* Background dengan bingkai elegan */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/70 via-white to-rose-50/40"></div>

        {/* Floating blobs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        {/* ===== BINGKAI / ORNAMEN ===== */}

        {/* Bingkai utama - border besar */}
        <div className="absolute inset-6 md:inset-10 border border-rose-200/30 rounded-3xl pointer-events-none" />

        {/* Bingkai kedua - border medium */}
        <div className="absolute inset-10 md:inset-14 border border-rose-200/20 rounded-2xl pointer-events-none" />

        {/* Bingkai ketiga - border kecil */}
        <div className="absolute inset-14 md:inset-18 border border-rose-100/20 rounded-xl pointer-events-none" />

        {/* Ornamen sudut - kiri atas */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-30 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M0 0 L40 0 L40 10 L10 10 L10 40 L0 40 L0 0Z"
              fill="#fb7185"
              opacity="0.3"
            />
            <path
              d="M5 5 L35 5 L35 8 L8 8 L8 35 L5 35 L5 5Z"
              fill="#fb7185"
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Ornamen sudut - kanan atas */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-30 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M40 0 L0 0 L0 10 L30 10 L30 40 L40 40 L40 0Z"
              fill="#fb7185"
              opacity="0.3"
            />
            <path
              d="M35 5 L5 5 L5 8 L32 8 L32 35 L35 35 L35 5Z"
              fill="#fb7185"
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Ornamen sudut - kiri bawah */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 opacity-30 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M0 40 L40 40 L40 30 L10 30 L10 0 L0 0 L0 40Z"
              fill="#fb7185"
              opacity="0.3"
            />
            <path
              d="M5 35 L35 35 L35 32 L8 32 L8 5 L5 5 L5 35Z"
              fill="#fb7185"
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Ornamen sudut - kanan bawah */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-30 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M40 40 L0 40 L0 30 L30 30 L30 0 L40 0 L40 40Z"
              fill="#fb7185"
              opacity="0.3"
            />
            <path
              d="M35 35 L5 35 L5 32 L32 32 L32 5 L35 5 L35 35Z"
              fill="#fb7185"
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Ornamen garis dekoratif di tengah atas */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-20 pointer-events-none">
          <span className="w-16 h-px bg-rose-300"></span>
          <Heart size={12} className="text-rose-300" fill="currentColor" />
          <span className="w-16 h-px bg-rose-300"></span>
        </div>

        {/* Ornamen garis dekoratif di tengah bawah */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-20 pointer-events-none">
          <span className="w-16 h-px bg-rose-300"></span>
          <Heart size={12} className="text-rose-300" fill="currentColor" />
          <span className="w-16 h-px bg-rose-300"></span>
        </div>

        {/* Decorative dots di sudut */}
        <div className="absolute top-10 right-20 opacity-15 pointer-events-none">
          <div className="flex gap-1">
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
            <span className="w-1 h-1 bg-rose-300 rounded-full"></span>
          </div>
        </div>
        <div className="absolute bottom-10 left-20 opacity-15 pointer-events-none">
          <div className="flex gap-1">
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
          className="text-center mb-12 md:mb-16"
        >
          {/* Judul Mempelai pakai font Great Vibes */}
          <h2
            className="text-4xl md:text-5xl text-gray-800"
            style={{
              fontFamily: "'Great Vibes', 'Playfair Display', cursive, serif",
            }}
          >
            Mempelai
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="w-12 h-px bg-rose-300"></span>
            <Heart size={20} className="text-rose-400" fill="currentColor" />
            <span className="w-12 h-px bg-rose-300"></span>
          </div>
          <p className="text-gray-500 text-sm mt-3 font-light">
            "Dua insan yang dipersatukan dalam ikatan suci"
          </p>
        </motion.div>

        {/* Layout: Mobile stack, Desktop row with emoji in middle */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {/* Pengantin Pria */}
          <div className="w-full md:w-1/3">
            <CoupleCard person={groom} title="Pengantin Pria" delay={0.2} />
          </div>

          {/* Emoji 💑 di tengah */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-shrink-0 my-4 md:my-0"
          >
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center shadow-inner shadow-rose-200/50">
                <span className="text-3xl md:text-4xl">💑</span>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-rose-200/40 -m-2" />
              <div className="absolute inset-0 rounded-full border border-rose-300/20 -m-4" />
              <motion.div
                className="absolute inset-0 rounded-full border border-rose-300/20 -m-6"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>

          {/* Pengantin Wanita */}
          <div className="w-full md:w-1/3">
            <CoupleCard person={bride} title="Pengantin Wanita" delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
