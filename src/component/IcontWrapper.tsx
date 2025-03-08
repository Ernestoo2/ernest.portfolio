import { Variants, motion } from "framer-motion";
import { IconType } from "react-icons";

interface IconWrapperProps {
  icon: IconType;
  variants?: Variants;
  className?: string;
  size?: number;
  color?: string;
}

export const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  variants = iconVariants(2),
  className,
}) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className={className}
    >
      <Icon />
    </motion.div>
  );
};
