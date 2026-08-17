import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Check,
  User,
  Users,
  MessageSquare,
  Heart,
  Loader2,
} from "lucide-react";
import { weddingData } from "../../data/weddingData";

const Rsvp = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: 1,
    message: "",
    attendance: "yes",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // ===== URL DARI GOOGLE APPS SCRIPT =====
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx5uBFOHgEgK97VzzEigL3MhshUXYpxa2H848L2j4VKJi7cBCB4VAAMmwWEcncYIPeo/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          guests: formData.guests,
          attendance: formData.attendance === "yes" ? "Hadir" : "Tidak Hadir",
          message: formData.message || "-",
          timestamp: new Date().toLocaleString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        }),
      });

      console.log("Data RSVP terkirim:", formData);

      setIsSubmitted(true);
      setFormData({ name: "", guests: 1, message: "", attendance: "yes" });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Error:", err);
      setError("Gagal mengirim konfirmasi. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative py-12 md:py-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-rose-50/20 to-pink-100/30"></div>

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 scale-110 blur-sm"
          style={{
            backgroundImage: "url('/images/couple/feri-tasya2.JPEG')",
          }}
        />

        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"
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
          className="absolute top-10 right-10 text-3xl opacity-20 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 text-3xl opacity-20 pointer-events-none"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-20 left-20 text-2xl opacity-15 pointer-events-none"
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
          className="absolute bottom-20 right-20 text-2xl opacity-15 pointer-events-none"
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

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
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

          {/* Judul Konfirmasi Kehadiran - Ganti ke Brittany Signature */}
          <h2 className="text-4xl md:text-5xl text-gray-800 tracking-wide font-brittany">
            Konfirmasi Kehadiran
          </h2>

          <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-2 md:mt-3">
            <span className="w-6 md:w-8 h-px bg-rose-300/20"></span>
            <span className="text-rose-300/20 text-[6px] md:text-[8px]">✧</span>
            <span className="w-4 md:w-6 h-px bg-rose-300/20"></span>
            <span className="text-rose-300/20 text-[6px] md:text-[8px]">✧</span>
            <span className="w-6 md:w-8 h-px bg-rose-300/20"></span>
          </div>

          <p className="text-gray-500 text-xs md:text-sm mt-3 font-light max-w-xs md:max-w-md mx-auto leading-relaxed">
            Konfirmasi kehadiran Anda sebelum {weddingData.rsvp.deadline}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tl from-rose-200/20 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10 p-6 md:p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/20">
                  <Check size={36} className="text-green-500" />
                </div>
                <h3 className="text-2xl md:text-3xl text-gray-800 font-brittany">
                  Terima Kasih!
                </h3>
                <p className="text-gray-500 mt-2 font-light">
                  Konfirmasi Anda telah kami terima.
                </p>
                <p className="text-gray-400 text-sm mt-1 font-light">
                  Kami tunggu kehadirannya 🙏
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm text-gray-600 mb-2 font-medium">
                    <User size={16} className="inline mr-1.5" /> Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/40 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition shadow-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2 font-medium">
                    <Users size={16} className="inline mr-1.5" /> Jumlah Tamu
                  </label>
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    max="10"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/40 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition shadow-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2 font-medium">
                    Kehadiran
                  </label>
                  <div className="flex gap-6">
                    {["yes", "no"].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value={option}
                          checked={formData.attendance === option}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="w-4 h-4 text-rose-500 focus:ring-rose-400 accent-rose-500 disabled:opacity-50"
                        />
                        <span className="text-sm text-gray-600 capitalize">
                          {option === "yes" ? "Hadir" : "Tidak Hadir"}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2 font-medium">
                    <MessageSquare size={16} className="inline mr-1.5" /> Ucapan
                    & Doa
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tulis ucapan & doa untuk pasangan..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/40 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition resize-none shadow-sm disabled:opacity-50"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white py-3.5 rounded-xl font-medium shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Kirim Konfirmasi
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rsvp;
