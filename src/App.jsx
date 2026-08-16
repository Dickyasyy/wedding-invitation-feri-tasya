import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import Layout from "./components/layout/Layout";
import Cover from "./components/sections/Cover";
import Couple from "./components/sections/Couple";
import Event from "./components/sections/Event";
import Countdown from "./components/sections/Countdown";
import Gallery from "./components/sections/Gallery";
import Rsvp from "./components/sections/Rsvp";
import Gift from "./components/sections/Gift";
import Footer from "./components/sections/Footer";
import MusicPlayer from "./components/sections/MusicPlayer";
import FloatingAction from "./components/ui/FloatingAction";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOpenInvitation = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowContent(true);
      setIsTransitioning(false);
    }, 1500); // Dipercepat dari 2200ms → 1500ms
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div
            key="splash"
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            {/* Background */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
                style={{
                  backgroundImage: "url('/images/couple/feri-tasya2.JPEG')",
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="hidden md:flex absolute inset-0">
                <div
                  className="w-1/2 h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/couple/feri-tasya2.JPEG')",
                  }}
                >
                  <div className="w-full h-full bg-black/30"></div>
                </div>
                <div
                  className="w-1/2 h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/couple/feri-tasya1.JPEG')",
                  }}
                >
                  <div className="w-full h-full bg-black/30"></div>
                </div>
              </div>
            </div>

            {/* Efek Transisi Tirai Mewah - Dipercepat */}
            {isTransitioning && (
              <>
                {/* Tirai Kiri dengan efek lipatan */}
                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full z-20 overflow-hidden"
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }} // 1.8s → 1.2s
                >
                  <div className="w-full h-full bg-gradient-to-r from-rose-950 via-rose-800 to-rose-700" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                      repeating-linear-gradient(
                        90deg,
                        transparent 0px,
                        rgba(255,255,255,0.05) 20px,
                        transparent 40px,
                        rgba(255,255,255,0.02) 60px,
                        transparent 80px
                      )
                    `,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                      repeating-linear-gradient(
                        0deg,
                        transparent 0px,
                        rgba(255,215,215,0.02) 30px,
                        transparent 60px,
                        rgba(255,215,215,0.01) 90px,
                        transparent 120px
                      )
                    `,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                      radial-gradient(ellipse at 30% 50%, rgba(0,0,0,0.4) 0%, transparent 70%),
                      radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)
                    `,
                    }}
                  />
                  <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-r from-transparent via-rose-600/50 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-full h-8 bg-gradient-to-t from-rose-900/60 to-transparent" />
                </motion.div>

                {/* Tirai Kanan dengan efek lipatan */}
                <motion.div
                  className="absolute top-0 right-0 w-1/2 h-full z-20 overflow-hidden"
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }} // 1.8s → 1.2s
                >
                  <div className="w-full h-full bg-gradient-to-l from-rose-950 via-rose-800 to-rose-700" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                      repeating-linear-gradient(
                        90deg,
                        transparent 0px,
                        rgba(255,255,255,0.05) 20px,
                        transparent 40px,
                        rgba(255,255,255,0.02) 60px,
                        transparent 80px
                      )
                    `,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                      repeating-linear-gradient(
                        0deg,
                        transparent 0px,
                        rgba(255,215,215,0.02) 30px,
                        transparent 60px,
                        rgba(255,215,215,0.01) 90px,
                        transparent 120px
                      )
                    `,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                      radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                      radial-gradient(ellipse at 70% 50%, rgba(0,0,0,0.4) 0%, transparent 70%)
                    `,
                    }}
                  />
                  <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-l from-transparent via-rose-600/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-rose-900/60 to-transparent" />
                </motion.div>

                {/* Batang/kutub tirai di atas */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-3 z-25"
                  style={{
                    background:
                      "linear-gradient(to bottom, #D4A574, #8B6B4D, #D4A574)",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }} // 0.5s → 0.3s
                />

                {/* Efek cahaya menerobos tirai */}
                <motion.div
                  className="absolute inset-0 z-25 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }} // delay 0.8s → 0.4s
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-rose-400/30 via-transparent to-transparent rounded-full blur-3xl" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-rose-300/20 via-amber-300/20 to-rose-300/20 rounded-full blur-3xl" />
                </motion.div>

                {/* Partikel glitter berjatuhan - dipercepat */}
                {[...Array(30)].map(
                  (
                    _,
                    i, // 40 → 30
                  ) => (
                    <motion.div
                      key={i}
                      className="absolute z-25"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: -20,
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        y: ["-5%", "105%"],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 1.5 + Math.random() * 1, // 2s → 1.5s
                        delay: 0.2 + Math.random() * 0.8, // 0.3s → 0.2s
                        ease: "easeOut",
                      }}
                    >
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{
                          background: `radial-gradient(circle, #ffd700, #ff6b6b)`,
                          boxShadow: "0 0 6px #ffd700, 0 0 12px #ff6b6b",
                        }}
                      />
                    </motion.div>
                  ),
                )}

                {/* Bunga/kelopak berjatuhan - dipercepat */}
                {[...Array(15)].map(
                  (
                    _,
                    i, // 20 → 15
                  ) => (
                    <motion.div
                      key={`petal-${i}`}
                      className="absolute z-25 text-2xl"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: -50,
                        rotate: 0,
                        opacity: 0,
                      }}
                      animate={{
                        y: ["-10%", "110%"],
                        x: [
                          `${Math.random() * 100}%`,
                          `${Math.random() * 100}%`,
                          `${Math.random() * 100}%`,
                        ],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 1.5, // 3s → 2s
                        delay: 0.3 + Math.random() * 1, // 0.5s → 0.3s
                        ease: "easeInOut",
                      }}
                    >
                      {
                        ["🌸", "🌺", "🌷", "💕", "✨"][
                          Math.floor(Math.random() * 5)
                        ]
                      }
                    </motion.div>
                  ),
                )}
              </>
            )}

            {/* Content - Animasi dipercepat */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8">
              <motion.div
                className="text-center text-white"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }} // 0.8s → 0.6s, delay 0.2s → 0.1s
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }} // delay 0.3s → 0.2s
                  className="mb-6"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-12 h-px bg-white/40"></span>
                    <Heart
                      size={16}
                      className="text-white/80"
                      fill="currentColor"
                    />
                    <span className="w-12 h-px bg-white/40"></span>
                  </div>
                  <p className="text-xs tracking-[0.3em] uppercase text-white/70 mt-2">
                    Wedding Invitation
                  </p>
                </motion.div>

                <motion.h1
                  className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }} // delay 0.5s → 0.3s
                  style={{ textShadow: "0 2px 40px rgba(0,0,0,0.3)" }}
                >
                  Feri & Tasya
                </motion.h1>

                <motion.div
                  className="flex items-center justify-center gap-4 text-white/60 text-sm mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }} // 0.7s → 0.5s
                >
                  <span className="w-12 h-px bg-white/30"></span>
                  <span className="tracking-widest">2026</span>
                  <span className="w-12 h-px bg-white/30"></span>
                </motion.div>

                <motion.p
                  className="text-white/80 text-sm tracking-wider font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }} // 0.8s → 0.6s
                >
                  Save The Date
                </motion.p>

                <motion.button
                  onClick={handleOpenInvitation}
                  disabled={isTransitioning}
                  className="group relative mt-8 px-10 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }} // delay 1s → 0.7s
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isTransitioning ? "Membuka Tirai..." : "Buka Undangan"}
                    {!isTransitioning && (
                      <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        →
                      </motion.span>
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Layout>
              <Cover />
              <Couple />
              <Countdown />
              <Event />
              <Gallery />
              <Rsvp />
              <Gift />
              <Footer />
            </Layout>
            <FloatingAction />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
