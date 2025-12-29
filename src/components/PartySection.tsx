import { motion } from "framer-motion";
import MessageCard from "./MessageCard";
import chaiSamosa from "@/assets/chai-samosa.jpg";

const PartySection = () => {
  const items = [
    { emoji: "☕", name: "Chai", delay: 0.1 },
    { emoji: "🥟", name: "Samosa", delay: 0.2 },
    { emoji: "🥦", name: "Gobi", delay: 0.3 },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative food emojis */}
      <motion.div
        className="absolute top-10 left-10 text-4xl"
        animate={{ rotate: 360, y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ☕
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-4xl"
        animate={{ rotate: -360, y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🥟
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground"
        >
          Waiting For <span className="text-gradient-gold">Your Party!</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <MessageCard>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl mb-6 text-center"
            >
              🎉
            </motion.div>
            
            <h3 className="font-display text-2xl md:text-3xl text-foreground text-center mb-6">
              Didi, I Am Waiting!
            </h3>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed text-center mb-8">
              You know what I am waiting for, right? The party you promised me!
              I cannot wait to enjoy these treats together:
            </p>
            
            <div className="flex justify-center gap-8 mb-8">
              {items.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-2">{item.emoji}</div>
                  <span className="font-body text-sm text-muted-foreground">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="bg-gold/10 rounded-2xl p-6 text-center"
              animate={{ 
                borderColor: ["hsl(38 90% 50% / 0.3)", "hsl(38 90% 50% / 0.6)", "hsl(38 90% 50% / 0.3)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ border: "2px solid" }}
            >
              <p className="font-script text-2xl md:text-3xl text-foreground">
                "Chai, Samosa aur Gobi ke saath party kab milegi, Didi?" 😋
              </p>
            </motion.div>
          </MessageCard>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={chaiSamosa}
              alt="Chai and Samosa"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-script text-xl text-card-foreground bg-card/80 backdrop-blur-sm rounded-xl p-4">
                Eagerly waiting for this moment! 🤤
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartySection;