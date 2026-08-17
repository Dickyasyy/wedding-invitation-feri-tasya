import React, { useState } from "react";
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

import { weddingData } from "./data/weddingData";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // =========================================================
  // DATA PENGANTIN
  // =========================================================

  const { groom, bride } = weddingData.couple;

  // =========================================================
  // BUKA UNDANGAN
  // =========================================================

  const handleOpenInvitation = () => {
    setIsTransitioning(true);

    // Putar musik saat tombol buka undangan diklik
    if (window.playWeddingMusic) {
      window.playWeddingMusic();
    }

    setTimeout(() => {
      setShowContent(true);
      setIsTransitioning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* =======================================================
          MUSIC PLAYER
      ======================================================= */}

      <MusicPlayer />

      <AnimatePresence mode="wait">
        {/* =====================================================
            SPLASH / COVER DEPAN
        ===================================================== */}

        {!showContent ? (
          <motion.div
            key="splash"
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.8,
              },
            }}
          >
            {/* =================================================
                BACKGROUND
            ================================================= */}

            <div className="absolute inset-0">
              {/* =================================================
                  MOBILE
              ================================================= */}

              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
                style={{
                  backgroundImage: "url('/images/couple/feri-tasya2.JPEG')",
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* =================================================
                  DESKTOP
              ================================================= */}

              <div className="hidden md:flex absolute inset-0">
                {/* Foto kiri */}
                <div
                  className="w-1/2 h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/couple/feri-tasya2.JPEG')",
                  }}
                >
                  <div className="w-full h-full bg-black/30"></div>
                </div>

                {/* Foto kanan */}
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

            {/* =================================================
                TRANSISI TIRAI
            ================================================= */}

            {isTransitioning && (
              <>
                {/* =================================================
                    TIRAI KIRI
                ================================================= */}

                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full z-20 overflow-hidden"
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: "-100%",
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.7, 0, 0.3, 1],
                  }}
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
                        radial-gradient(
                          ellipse at 30% 50%,
                          rgba(0,0,0,0.4) 0%,
                          transparent 70%
                        ),
                        radial-gradient(
                          ellipse at 70% 50%,
                          rgba(255,255,255,0.1) 0%,
                          transparent 50%
                        )
                      `,
                    }}
                  />

                  <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-r from-transparent via-rose-600/50 to-transparent" />

                  <div className="absolute bottom-0 right-0 w-full h-8 bg-gradient-to-t from-rose-900/60 to-transparent" />
                </motion.div>

                {/* =================================================
                    TIRAI KANAN
                ================================================= */}

                <motion.div
                  className="absolute top-0 right-0 w-1/2 h-full z-20 overflow-hidden"
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: "100%",
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.7, 0, 0.3, 1],
                  }}
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
                        radial-gradient(
                          ellipse at 30% 50%,
                          rgba(255,255,255,0.1) 0%,
                          transparent 50%
                        ),
                        radial-gradient(
                          ellipse at 70% 50%,
                          rgba(0,0,0,0.4) 0%,
                          transparent 70%
                        )
                      `,
                    }}
                  />

                  <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-l from-transparent via-rose-600/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-rose-900/60 to-transparent" />
                </motion.div>

                {/* =================================================
                    BATANG TIRAI
                ================================================= */}

                <motion.div
                  className="absolute top-0 left-0 w-full h-3 z-25"
                  style={{
                    background:
                      "linear-gradient(to bottom, #D4A574, #8B6B4D, #D4A574)",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
                  }}
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />

                {/* =================================================
                    CAHAYA
                ================================================= */}

                <motion.div
                  className="absolute inset-0 z-25 pointer-events-none"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-rose-400/30 via-transparent to-transparent rounded-full blur-3xl" />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-rose-300/20 via-amber-300/20 to-rose-300/20 rounded-full blur-3xl" />
                </motion.div>

                {/* =================================================
                    GLITTER
                ================================================= */}

                {[...Array(30)].map((_, i) => (
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
                      duration: 1.5 + Math.random() * 1,
                      delay: 0.2 + Math.random() * 0.8,
                      ease: "easeOut",
                    }}
                  >
                    <div
                      className="w-1 h-1 rounded-full"
                      style={{
                        background: "radial-gradient(circle, #ffd700, #ff6b6b)",
                        boxShadow: "0 0 6px #ffd700, 0 0 12px #ff6b6b",
                      }}
                    />
                  </motion.div>
                ))}

                {/* =================================================
                    BUNGA / KELOPAK
                ================================================= */}

                {[...Array(15)].map((_, i) => (
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
                      duration: 2 + Math.random() * 1.5,
                      delay: 0.3 + Math.random() * 1,
                      ease: "easeInOut",
                    }}
                  >
                    {
                      ["🌸", "🌺", "🌷", "💕", "✨"][
                        Math.floor(Math.random() * 5)
                      ]
                    }
                  </motion.div>
                ))}
              </>
            )}

            {/* =================================================
                CONTENT SPLASH
            ================================================= */}

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8">
              <motion.div
                className="text-center text-white"
                initial={{
                  scale: 0.95,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
              >
                {/* =================================================
                    ORNAMENT
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.4,
                  }}
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

                {/* =================================================
                    NAMA PENGANTIN - FORMAT 3 BARIS
                    BRITTANY SIGNATURE
                ================================================= */}

                <div
                  className="
                    text-white
                    mb-5
                    flex
                    flex-col
                    items-center
                    justify-center
                    w-full
                  "
                  style={{
                    textShadow: "0 2px 40px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Baris 1: Feri Setiawan */}
                  <span
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
                  </span>

                  {/* Baris 2: & (ampersand) */}
                  <span
                    className="
                      font-brittany
                      text-3xl
                      sm:text-4xl
                      md:text-5xl
                      text-rose-300
                      leading-none
                      my-3
                      text-center
                      w-full
                    "
                  >
                    &amp;
                  </span>

                  {/* Baris 3: Tasya Salsabila */}
                  <span
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
                  </span>
                </div>

                {/* =================================================
                    TAHUN
                ================================================= */}

                <motion.div
                  className="flex items-center justify-center gap-4 text-white/60 text-sm mb-6"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                >
                  <span className="w-12 h-px bg-white/30"></span>

                  <span className="tracking-widest">2026</span>

                  <span className="w-12 h-px bg-white/30"></span>
                </motion.div>

                {/* =================================================
                    SAVE THE DATE
                ================================================= */}

                <motion.p
                  className="text-white/80 text-sm tracking-wider font-light"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.6,
                  }}
                >
                  Save The Date
                </motion.p>

                {/* =================================================
                    BUTTON
                ================================================= */}

                <motion.button
                  onClick={handleOpenInvitation}
                  disabled={isTransitioning}
                  className="
                    group
                    relative
                    mt-8
                    px-10
                    py-3.5
                    bg-white/10
                    backdrop-blur-sm
                    border
                    border-white/30
                    text-white
                    rounded-full
                    font-medium
                    hover:bg-white/20
                    transition-all
                    duration-300
                    overflow-hidden
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isTransitioning ? "Membuka Tirai..." : "Buka Undangan"}

                    {!isTransitioning && (
                      <motion.span
                        animate={{
                          x: [0, 6, 0],
                        }}
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
                    initial={{
                      x: "-100%",
                    }}
                    whileHover={{
                      x: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* =====================================================
              ISI UNDANGAN
          ===================================================== */

          <motion.div
            key="content"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
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
