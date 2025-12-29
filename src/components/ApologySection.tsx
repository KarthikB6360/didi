import { motion } from "framer-motion";
import MessageCard from "./MessageCard";

const ApologySection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground"
        >
          From the <span className="text-gradient-gold">Heart</span>
        </motion.h2>

        <MessageCard className="text-center">
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="text-6xl mb-6"
          >
            🙏
          </motion.div>
          
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
            I Am Sorry, Didi
          </h3>
          
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Didi, if I have ever done anything wrong or made any mistakes in
            your life, I am truly sorry. Sometimes we hurt the ones we care about
            the most without even realizing it.
          </p>
          
          <motion.div
            className="border-l-4 border-gold pl-6 my-8 text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-script text-2xl text-foreground italic">
              "Please forgive your little bhai for all the mistakes,
              knowingly or unknowingly made."
            </p>
          </motion.div>
          
          <p className="font-body text-lg text-muted-foreground">
            Your forgiveness and continued support mean the world to me.
            I promise to be a better bhai in the new year! 🤝
          </p>
        </MessageCard>
      </div>
    </section>
  );
};

export default ApologySection;
