import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.a
      href="#"
      className="flex items-center gap-1 group"
      whileHover={{ scale: 1.02 }}
    >
      {/* First letter stylized */}
      <span className="font-bebas text-4xl md:text-5xl text-primary tracking-tight leading-none">
        M
      </span>
      
      {/* Decorative line */}
      <motion.span 
        className="w-0.5 h-8 md:h-10 bg-gradient-to-b from-primary via-accent to-transparent rounded-full"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      {/* Rest of name */}
      <div className="flex flex-col -space-y-1">
        <span className="font-bebas text-lg md:text-xl text-foreground tracking-widest leading-none">
          HASHAM
        </span>
        <span className="font-outfit text-[10px] md:text-xs text-muted-foreground tracking-[0.3em] uppercase">
          Nadeem
        </span>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute -inset-2 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-colors duration-300" />
    </motion.a>
  );
};

export default Logo;
