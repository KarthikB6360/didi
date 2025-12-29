import { motion } from "framer-motion";
import MessageCard from "./MessageCard";
import siblingBond from "@/assets/sibling-bond.jpg";

const SupportSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground"
        >
          You Are My <span className="text-gradient-gold">Pillar of Strength</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={siblingBond}
              alt="Sibling Bond"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>

          <MessageCard delay={0.2}>
            <div className="space-y-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-5xl mb-4"
              >
                💪❤️
              </motion.div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">
                Always By My Side
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Didi, you have always been with me through every moment of my life.
                Your support means everything to me. You are not just a sister,
                you are my guide, my mentor, and my best friend.
              </p>
              <p className="font-script text-2xl text-gold">
                Thank you for everything you do! 🙏
              </p>
            </div>
          </MessageCard>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;