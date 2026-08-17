import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Heart } from "lucide-react";

const Gift = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden">
      {/* Background gradient elegan */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 via-white/50 to-pink-50/80"></div>

        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-rose-200/15 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-200/15 rounded-full blur-3xl"
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

        <motion.div
          className="absolute top-10 right-10 text-3xl opacity-15 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 text-3xl opacity-15 pointer-events-none"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-20 left-20 text-2xl opacity-10 pointer-events-none"
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
          className="absolute bottom-20 right-20 text-2xl opacity-10 pointer-events-none"
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
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
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

          {/* Judul Amplop Digital - Ganti ke Brittany Signature */}
          <h2 className="text-4xl md:text-5xl text-gray-800 tracking-wide font-brittany">
            Amplop Digital
          </h2>

          <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-2 md:mt-3">
            <span className="w-6 md:w-8 h-px bg-rose-300/20"></span>
            <span className="text-rose-300/20 text-[6px] md:text-[8px]">✧</span>
            <span className="w-4 md:w-6 h-px bg-rose-300/20"></span>
            <span className="text-rose-300/20 text-[6px] md:text-[8px]">✧</span>
            <span className="w-6 md:w-8 h-px bg-rose-300/20"></span>
          </div>

          <p className="text-gray-500 text-xs md:text-sm mt-3 font-light max-w-md mx-auto leading-relaxed">
            Bagi yang ingin memberikan hadiah secara digital, dapat melalui
            rekening berikut
          </p>
        </motion.div>

        {/* Card BSI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl backdrop-blur-md bg-white/40 border border-white/50 shadow-2xl max-w-lg mx-auto"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tl from-rose-200/20 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10 p-6 md:p-8">
            {/* Logo BSI */}
            <div className="flex justify-center mb-8">
              <img
                src="/images/bsi.png"
                alt="BSI"
                className="w-48 md:w-64 h-auto object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  const parent = e.target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-32 h-32 md:w-48 md:h-48 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto">
                        <span class="text-rose-500 text-4xl md:text-6xl font-bold">BSI</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>

            {/* Akun Feri Setiawan */}
            <div className="mb-6 pb-6 border-b border-rose-200/30">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-800 text-sm md:text-base">
                  Feri Setiawan
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard("7193482435", 0)}
                    className="text-rose-500 hover:text-rose-600 p-1.5 hover:bg-rose-50/50 rounded-lg transition"
                  >
                    {copiedIndex === 0 ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>
              <code className="text-sm md:text-base bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-lg font-mono text-gray-700 block text-center">
                7193482435
              </code>
            </div>

            {/* Akun Tasya Salsabila */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-800 text-sm md:text-base">
                  Tasya Salsabila
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard("7267013815", 1)}
                    className="text-rose-500 hover:text-rose-600 p-1.5 hover:bg-rose-50/50 rounded-lg transition"
                  >
                    {copiedIndex === 1 ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>
              <code className="text-sm md:text-base bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-lg font-mono text-gray-700 block text-center">
                7267013815
              </code>
            </div>
          </div>
        </motion.div>

        {/* Catatan */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-xs text-gray-400 font-light">
            * Atau hubungi kami untuk opsi transfer lainnya
          </p>
          <p className="text-xs text-gray-400 font-light mt-1">
            Terima kasih atas doa dan dukungannya 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gift;
