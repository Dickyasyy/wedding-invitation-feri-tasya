import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "../../data/weddingData";

const Countdown = () => {
  const targetDate = new Date(weddingData.event.akad.date).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Untuk tracking nilai sebelumnya (efek flip)
  const prevDays = useRef(0);
  const prevHours = useRef(0);
  const prevMinutes = useRef(0);
  const prevSeconds = useRef(0);

  const [flipStates, setFlipStates] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    // Fungsi untuk update countdown
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // Cek jika targetDate sudah lewat
      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const newMinutes = Math.floor((difference / 1000 / 60) % 60);
      const newSeconds = Math.floor((difference / 1000) % 60);

      // Trigger flip animation when value changes
      setFlipStates({
        days: newDays !== prevDays.current,
        hours: newHours !== prevHours.current,
        minutes: newMinutes !== prevMinutes.current,
        seconds: newSeconds !== prevSeconds.current,
      });

      // Update refs
      prevDays.current = newDays;
      prevHours.current = newHours;
      prevMinutes.current = newMinutes;
      prevSeconds.current = newSeconds;

      setTimeLeft({
        days: newDays,
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
      });

      // Reset flip states after animation
      setTimeout(() => {
        setFlipStates({
          days: false,
          hours: false,
          minutes: false,
          seconds: false,
        });
      }, 400);
    };

    // Update countdown setiap detik
    const timer = setInterval(updateCountdown, 1000);

    // Jalankan sekali saat mount
    updateCountdown();

    return () => clearInterval(timer);
  }, [targetDate]);

  // Flip Card Component
  const FlipCard = ({ value, label, delay, isFlipping }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-20 md:w-20 md:h-24">
          <div
            className={`relative w-full h-full transition-transform duration-300 ease-in-out ${
              isFlipping ? "[transform:rotateX(180deg)]" : ""
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-b from-white to-rose-50/70 shadow-lg border border-rose-200/30"
              style={{ backfaceVisibility: "hidden" }}
            >
              <span className="text-2xl md:text-3xl font-serif text-gray-800">
                {String(value).padStart(2, "0")}
              </span>
            </div>
            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-b from-rose-50/70 to-white shadow-lg border border-rose-200/30"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            >
              <span className="text-2xl md:text-3xl font-serif text-gray-800">
                {String(value).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px bg-rose-200/50 z-10" />
          <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-t from-rose-100/30 to-transparent rounded-b-xl" />
        </div>
        <span className="text-xs text-gray-500 mt-3 uppercase tracking-wider">
          {label}
        </span>
      </div>
    );
  };

  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden">
      {/* Background dengan bingkai & glassmorphism */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/60 via-white to-rose-50/30"></div>

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

        {/* Decorative dots */}
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

        {/* Dekorasi tambahan */}
        <motion.div
          className="absolute top-10 right-10 text-2xl opacity-20 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 text-2xl opacity-20 pointer-events-none"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* SAVE THE DATE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* "Save The Date" dengan font Great Vibes */}
          <p
            className="text-2xl md:text-3xl text-rose-500 mb-6"
            style={{
              fontFamily: "'Great Vibes', 'Playfair Display', cursive, serif",
            }}
          >
            Save The Date
          </p>

          {/* Tanggal - Format terpisah */}
          <div className="flex flex-col items-center gap-1">
            {/* Angka 23 dengan font Great Vibes */}
            <motion.span
              className="text-7xl md:text-8xl lg:text-9xl text-gray-800 leading-none"
              style={{
                fontFamily: "'Great Vibes', 'Playfair Display', cursive, serif",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              23
            </motion.span>

            {/* Oktober dengan font elegan */}
            <motion.span
              className="text-lg md:text-xl text-gray-600 font-light tracking-[0.2em] uppercase mt-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Oktober
            </motion.span>

            {/* 2026 */}
            <motion.span
              className="text-sm text-gray-400 tracking-[0.3em] font-light mt-0.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              2026
            </motion.span>
          </div>

          {/* Pembatas dengan ornamen */}
          <motion.div
            className="flex items-center justify-center gap-3 my-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="w-8 h-px bg-rose-300/50"></span>
            <span className="text-rose-300/40 text-sm">✦</span>
            <Heart size={12} className="text-rose-400/60" fill="currentColor" />
            <span className="text-rose-300/40 text-sm">✦</span>
            <span className="w-8 h-px bg-rose-300/50"></span>
          </motion.div>

          <motion.p
            className="text-[10px] text-gray-400 tracking-[0.3em] uppercase font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Menuju Hari Pernikahan
          </motion.p>
        </motion.div>

        {/* Countdown dengan Flip Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="flex justify-center items-center gap-2 md:gap-3">
            <FlipCard
              value={timeLeft.days}
              label="Hari"
              delay={0.1}
              isFlipping={flipStates.days}
            />

            <span className="text-2xl md:text-3xl text-rose-300 font-light">
              :
            </span>

            <FlipCard
              value={timeLeft.hours}
              label="Jam"
              delay={0.2}
              isFlipping={flipStates.hours}
            />

            <span className="text-2xl md:text-3xl text-rose-300 font-light">
              :
            </span>

            <FlipCard
              value={timeLeft.minutes}
              label="Menit"
              delay={0.3}
              isFlipping={flipStates.minutes}
            />

            <span className="text-2xl md:text-3xl text-rose-300 font-light">
              :
            </span>

            <FlipCard
              value={timeLeft.seconds}
              label="Detik"
              delay={0.4}
              isFlipping={flipStates.seconds}
            />
          </div>
        </motion.div>

        {/* Dekorasi tambahan */}
        <motion.div
          className="absolute -top-10 left-1/4 text-2xl opacity-15 pointer-events-none"
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
          className="absolute -bottom-10 right-1/4 text-2xl opacity-15 pointer-events-none"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🌷
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
