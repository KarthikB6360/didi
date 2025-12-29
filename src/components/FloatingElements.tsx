import { motion } from "framer-motion";

const FloatingElements = () => {
  const sparkles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    size: 4 + Math.random() * 10,
  }));

  const confetti = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
    color: ['text-gold', 'text-rose', 'text-primary', 'text-secondary'][i % 4],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Confetti */}
      {confetti.map((item) => (
        <motion.div
          key={`confetti-${item.id}`}
          className={`absolute ${item.color}`}
          style={{
            left: `${item.left}%`,
            bottom: -50,
            fontSize: 16,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(item.id) * 60],
            rotate: [0, 720],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🎊
        </motion.div>
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute text-gold"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            fontSize: sparkle.size,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
