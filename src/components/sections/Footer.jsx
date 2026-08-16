import React from "react";
import { motion } from "framer-motion";
import { Heart, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 overflow-hidden">
      {/* Background dengan gradien dan efek */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100/30 via-rose-50/20 to-pink-100/30"></div>

        {/* Floating blobs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"
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

        {/* Dekorasi */}
        <motion.div
          className="absolute top-10 right-10 text-2xl opacity-15 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 text-2xl opacity-15 pointer-events-none"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Card elegan */}
        <div className="relative rounded-3xl bg-white/30 backdrop-blur-md p-6 md:p-8 shadow-xl border border-white/40 overflow-hidden">
          {/* Efek glass shine */}
          <div className="absolute -top-20 -right-20 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-tl from-rose-200/10 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10 text-center">
            {/* Nama pasangan */}
            <div className="flex items-center justify-center gap-3 text-rose-400 mb-1">
              <Heart size={16} fill="currentColor" />
              <span className="text-sm font-serif text-gray-700">
                Feri &amp; Tasya
              </span>
              <Heart size={16} fill="currentColor" />
            </div>

            {/* Kata-kata di bawah nama */}
            <p className="text-xs text-gray-400 font-light italic mb-4">
              "Cinta yang abadi, kasih yang sempurna"
            </p>

            {/* Sosial Media */}
            <div className="flex items-center justify-center gap-4 mb-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6289636758016"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-green-50/80 hover:bg-green-100 rounded-full transition-all duration-300 border border-green-200/40 hover:border-green-300/60 hover:scale-110 hover:shadow-md"
                aria-label="WhatsApp"
              >
                <Phone size={18} className="text-green-600" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/dickyasyy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-purple-50/80 to-pink-50/80 hover:from-purple-100 hover:to-pink-100 rounded-full transition-all duration-300 border border-purple-200/40 hover:border-purple-300/60 hover:scale-110 hover:shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram size={18} className="text-purple-600" />
              </a>
            </div>

            {/* Credit */}
            <p className="text-xs text-gray-400">
              Made with{" "}
              <Heart
                size={12}
                className="inline text-rose-400"
                fill="currentColor"
              />{" "}
              by{" "}
              <span className="text-rose-500 font-medium hover:text-rose-600 transition">
                Dickyasyy
              </span>
            </p>

            <p className="text-[10px] text-gray-300 mt-1">
              © {new Date().getFullYear()} • All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
