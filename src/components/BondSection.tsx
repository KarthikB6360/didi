import { motion } from "framer-motion";
import MessageCard from "./MessageCard";

const BondSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground"
        >
          Our <span className="text-gradient-rose">Special Bond</span>
        </motion.h2>

        <MessageCard className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-6xl mb-6"
          >
            👫
          </motion.div>
          
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
            Distance Cannot Separate Us
          </h3>
          
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Until now, we have not met in person. We have never seen each other
            face to face. But you know what, Didi? That has never mattered.
            Our bond goes beyond physical presence.
          </p>
          
          <motion.div
            className="bg-gradient-to-r from-gold/20 via-rose/20 to-gold/20 rounded-2xl p-6 my-8"
            animate={{ 
              boxShadow: [
                "0 0 20px hsl(38 90% 50% / 0.2)",
                "0 0 40px hsl(350 60% 70% / 0.3)",
                "0 0 20px hsl(38 90% 50% / 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="font-script text-3xl md:text-4xl text-foreground">
              "We are the best Bhai and Didi!"
            </p>
          </motion.div>
          
          <p className="font-body text-lg text-muted-foreground">
            Our connection proves that true relationships are built on care,
            trust, and understanding – not just on meeting face to face. 🌟
          </p>
        </MessageCard>
      </div>
    </section>
  );
};

export default BondSection;
