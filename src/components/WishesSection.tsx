import { motion } from "framer-motion";

const WishesSection = () => {
  const wishes = [
    "May this year bring you endless happiness",
    "May all your dreams come true",
    "May you achieve all your goals",
    "May you be blessed with good health",
    "May love and joy fill your life",
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-rose/5 to-gold/5" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center mb-6 text-foreground"
        >
          Best Wishes For <span className="text-gradient-gold">You, Didi!</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-xl text-muted-foreground text-center mb-16"
        >
          Here are my heartfelt wishes for you in 2025 💫
        </motion.p>

        <div className="space-y-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-3xl"
              >
                ⭐
              </motion.span>
              <p className="font-body text-lg md:text-xl text-foreground bg-card/50 backdrop-blur-sm rounded-xl p-4 flex-1 shadow-sm">
                {wish}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <span className="text-8xl">🎊</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;