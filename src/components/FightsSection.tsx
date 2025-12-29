import { motion } from "framer-motion";
import MessageCard from "./MessageCard";

const FightsSection = () => {
  const memories = [
    { emoji: "📚", title: "Class Arguments", desc: "Remember when we used to argue about who answered better in class? Those debates made us sharper!" },
    { emoji: "🗣️", title: "Indirect Fights", desc: "Those indirect arguments where neither of us wanted to give up - classic Bhai-Didi moments!" },
    { emoji: "📝", title: "Exam Time Support", desc: "But when exams came, we always had each other's back. Study sessions and motivation!" },
    { emoji: "🍽️", title: "Bhai's Reminder", desc: "And I always tell you - Didi, have your food properly! Take care of yourself!" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 via-background to-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-4xl opacity-20">📖</div>
      <div className="absolute bottom-10 left-10 text-4xl opacity-20">✏️</div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center mb-6 text-foreground"
        >
          Our <span className="text-gradient-gold">Bhai-Didi Moments</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          The fights, the debates, the arguments... and then calling each other Bhai and Didi again! 😄
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MessageCard className="h-full">
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="text-4xl"
                  >
                    {memory.emoji}
                  </motion.div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {memory.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {memory.desc}
                    </p>
                  </div>
                </div>
              </MessageCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-gold/20 via-rose/20 to-gold/20 rounded-2xl p-8 inline-block">
            <p className="font-script text-2xl md:text-3xl text-foreground">
              "After every fight, we are still the best Bhai and Didi!" 🤝
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FightsSection;
