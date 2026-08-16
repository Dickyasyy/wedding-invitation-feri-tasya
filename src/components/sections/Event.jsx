import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Heart } from "lucide-react";
import { weddingData } from "../../data/weddingData";

const Event = () => {
  const { akad, resepsi } = weddingData.event;

  const EventCard = ({ event, title, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/40 border border-white/50 shadow-lg w-full"
    >
      <div className="absolute -top-20 -right-20 w-20 h-20 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-20 h-20 bg-gradient-to-tl from-rose-200/20 to-transparent rounded-full blur-2xl" />

      <div className="relative z-10 p-3 md:p-5 text-center">
        <h3 className="text-sm md:text-lg font-serif text-gray-800 mb-2 md:mb-3">
          {title}
        </h3>

        <div className="space-y-1.5 md:space-y-2">
          <div className="flex items-center justify-center gap-1.5 md:gap-2 text-gray-600">
            <Calendar
              size={14}
              className="text-rose-400 flex-shrink-0 md:w-4 md:h-4"
            />
            <div>
              <p className="font-medium text-gray-700 text-xs md:text-sm">
                .....
              </p>
              <p className="text-[10px] md:text-xs text-gray-500">.....</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 md:gap-2 text-gray-600">
            <MapPin
              size={14}
              className="text-rose-400 flex-shrink-0 md:w-4 md:h-4"
            />
            <div>
              <p className="font-medium text-gray-700 text-xs md:text-sm">
                {event.location}
              </p>
              <p className="text-[10px] md:text-xs text-gray-500">
                {event.address}
              </p>
            </div>
          </div>

          <div className="mt-1 md:mt-2">
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs text-rose-500 bg-rose-50/60 hover:bg-rose-100/60 rounded-full transition-all duration-300 backdrop-blur-sm border border-rose-200/30"
            >
              <span>Google Maps</span>
              <ExternalLink size={10} className="md:w-3 md:h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen py-10 md:py-20 px-2 md:px-4 overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/60 via-white to-rose-50/30"></div>

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

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[96%] h-[92%] md:w-[88%] md:h-[84%] rounded-full border-2 border-rose-200/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[88%] h-[82%] md:w-[78%] md:h-[72%] rounded-full border border-rose-200/30" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80%] h-[72%] md:w-[68%] md:h-[60%] rounded-full border border-rose-100/25" />
        </div>

        <div className="absolute top-2 left-2 md:top-6 md:left-6 opacity-20 pointer-events-none">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="md:w-5 md:h-5"
          >
            <path
              d="M0 0 L14 0 L14 4 L4 4 L4 14 L0 14 L0 0Z"
              fill="#fb7185"
              opacity="0.4"
            />
          </svg>
        </div>
        <div className="absolute top-2 right-2 md:top-6 md:right-6 opacity-20 pointer-events-none">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="md:w-5 md:h-5"
          >
            <path
              d="M14 0 L0 0 L0 4 L10 4 L10 14 L14 14 L14 0Z"
              fill="#fb7185"
              opacity="0.4"
            />
          </svg>
        </div>
        <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 opacity-20 pointer-events-none">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="md:w-5 md:h-5"
          >
            <path
              d="M0 14 L14 14 L14 10 L4 10 L4 0 L0 0 L0 14Z"
              fill="#fb7185"
              opacity="0.4"
            />
          </svg>
        </div>
        <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 opacity-20 pointer-events-none">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="md:w-5 md:h-5"
          >
            <path
              d="M14 14 L0 14 L0 10 L10 10 L10 0 L14 0 L14 14Z"
              fill="#fb7185"
              opacity="0.4"
            />
          </svg>
        </div>

        <motion.div
          className="absolute top-6 right-6 md:top-10 md:right-10 text-base md:text-xl opacity-20 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-base md:text-xl opacity-20 pointer-events-none"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm md:max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-10"
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

          {/* Judul dengan font Great Vibes - UKURAN DIPERBESAR SAMA DENGAN MEMPELAI */}
          <h2
            className="text-4xl md:text-5xl text-gray-800 tracking-wide"
            style={{
              fontFamily: "'Great Vibes', 'Playfair Display', cursive, serif",
            }}
          >
            <span className="relative">
              <span className="relative z-10 text-gray-800">
                Detail
                <span className="text-gray-800"> Acara</span>
              </span>
              <span className="absolute -bottom-0.5 md:-bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-300/40 to-transparent rounded-full" />
            </span>
          </h2>

          <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-2 md:mt-3">
            <span className="w-6 md:w-8 h-px bg-rose-300/20"></span>
            <span className="text-rose-300/20 text-[6px] md:text-[8px]">✧</span>
            <span className="w-4 md:w-6 h-px bg-rose-300/20"></span>
            <span className="text-rose-300/20 text-[6px] md:text-[8px]">✧</span>
            <span className="w-6 md:w-8 h-px bg-rose-300/20"></span>
          </div>

          <p className="text-gray-500 text-xs md:text-sm mt-2 md:mt-4 font-light max-w-[200px] md:max-w-sm mx-auto leading-relaxed">
            "Assalamu'alaikum Wr. Wb. Kami mengundang Bapak/Ibu untuk hadir di
            acara pernikahan kami."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 max-w-[260px] md:max-w-lg mx-auto">
          <EventCard event={akad} title="Akad Nikah" delay={0.2} />
          <EventCard event={resepsi} title="Resepsi" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Event;
