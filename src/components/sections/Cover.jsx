import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "../../data/weddingData";

const Cover = () => {
  const { groom, bride } = weddingData.couple;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-sm opacity-20"
          style={{
            backgroundImage: "url('/images/couple/feri-tasya2.JPEG')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100/60 via-white/80 to-rose-50/60" />
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
        <motion.div
          className="absolute top-20 right-10 text-4xl opacity-30 pointer-events-none"
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
          className="absolute bottom-20 left-10 text-4xl opacity-30 pointer-events-none"
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
      <div className="relative z-10 text-center w-full max-w-3xl mx-auto py-12">
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
              <span className="w-12 sm:w-16 h-px bg-rose-300" />
              <Heart size={16} className="text-rose-400" fill="currentColor" />
              <span className="w-12 sm:w-16 h-px bg-rose-300" />
            </div>
          </motion.div>

          {/* Label */}
          <motion.p
            className="text-xs sm:text-sm text-rose-500 tracking-[0.3em] uppercase mb-5 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            The Wedding of
          </motion.p>

          {/* =====================================================
              NAMA PENGANTIN - FORMAT 3 BARIS
              
              SEPERTI DI COUPLE:
              
              Feri Setiawan
                  &
              Tasya Salsabila
              
              PAKAI FONT BRITTANY SIGNATURE (NYAMBUNG)
          ===================================================== */}
          <div className="text-gray-800 mb-5 flex flex-col items-center justify-center w-full">
            {/* Baris 1: Feri Setiawan */}
            <h1
              className="
                font-brittany
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                leading-none
                text-center
                w-full
              "
            >
              {groom.name}
            </h1>

            {/* Baris 2: & (ampersand) */}
            <div
              className="
                font-brittany
                text-3xl
                sm:text-4xl
                md:text-5xl
                text-rose-400
                leading-none
                my-4
                text-center
                w-full
              "
            >
              &amp;
            </div>

            {/* Baris 3: Tasya Salsabila */}
            <h1
              className="
                font-brittany
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                leading-none
                text-center
                w-full
              "
            >
              {bride.name}
            </h1>
          </div>

          {/* Garis + Tanggal */}
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4 text-sm text-gray-400 my-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="w-10 sm:w-12 h-px bg-rose-300" />
            <span className="tracking-widest font-light">23.10.2026</span>
            <span className="w-10 sm:w-12 h-px bg-rose-300" />
          </motion.div>

          {/* Card Ayat */}
          <motion.div
            className="max-w-md mx-auto mb-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl p-5 backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tl from-rose-200/20 to-transparent rounded-full blur-2xl" />
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

          {/* Teks Undangan */}
          <motion.p
            className="text-gray-600 font-light text-sm max-w-md mx-auto leading-relaxed px-4"
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
              <span className="w-10 sm:w-12 h-px bg-rose-300" />
              <Heart
                size={14}
                className="text-rose-400/60"
                fill="currentColor"
              />
              <span className="w-10 sm:w-12 h-px bg-rose-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cover;
