import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MessageCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const MessageCard = ({ children, delay = 0, className = "" }: MessageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className={`card-tribute ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MessageCard;