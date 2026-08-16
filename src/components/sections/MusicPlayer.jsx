import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Play, Pause, X } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef(null);

  // Fungsi untuk memutar musik dari luar (dipanggil dari App)
  const playMusic = () => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Playback failed:", error);
          });
      }
    }
  };

  // Expose playMusic ke global agar bisa dipanggil dari App
  useEffect(() => {
    window.playWeddingMusic = playMusic;
    return () => {
      delete window.playWeddingMusic;
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.log("Playback failed:", error);
            });
        }
      }
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleAudioEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        onEnded={handleAudioEnded}
        preload="auto"
      >
        <source src="/music/backsound.mp3" type="audio/mpeg" />
        Browser Anda tidak mendukung pemutar audio.
      </audio>

      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="fixed bottom-20 right-4 z-50 flex items-center gap-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 text-rose-500 border border-rose-100 hover:bg-white transition-all duration-300"
              aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleVisibility}
              className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 text-gray-400 hover:text-gray-600 border border-gray-100 hover:bg-white transition-all duration-300"
              aria-label="Tutup pemutar musik"
            >
              <X size={16} />
            </motion.button>
          </motion.div>
        ) : (
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            onClick={toggleVisibility}
            className="fixed bottom-20 right-4 z-50 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 text-rose-500 border border-rose-100 hover:bg-white transition-all duration-300"
            aria-label="Buka pemutar musik"
          >
            <Music size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;