import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-gold/30"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 30}%`,
              fontSize: 20 + (i % 3) * 10,
            }}
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2
            }}
          >
            ✨
          </motion.span>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-6xl mb-6"
          >
            🌟
          </motion.div>
          
          <h2 className="font-script text-5xl md:text-7xl text-gradient-gold mb-6">
            You Are My Favorite Didi!
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            You are the best sister anyone could ever ask for.
            Thank you for being you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-lg mx-auto"
        >
          <p className="font-display text-2xl text-foreground mb-4">
            Happy New Year 2026!
          </p>
          <p className="font-script text-3xl text-gold">
            With best wishes,
          </p>
          <p className="font-display text-2xl text-foreground mt-2">
            Your Bhai 🤝
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 font-body text-muted-foreground"
        >
          Made with care just for you, Didi! ✨
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
