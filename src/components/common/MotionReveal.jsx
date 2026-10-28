import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, useReducedMotion } from "motion/react";

function MotionReveal({
  children,
  delay = 0,
  direction = "up",
  distance = "small",
  layout = false,
  trigger = "viewport",
  sx,
  style,
  ...props
}) {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : theme.motion.distance[distance];
  const initialPosition = {
    x: direction === "left" ? -offset : direction === "right" ? offset : 0,
    y: direction === "up" ? offset : direction === "down" ? -offset : 0,
  };
  const visible = { opacity: 1, x: 0, y: 0 };
  const viewport = {
    once: true,
    amount: theme.motion.observer.threshold,
    margin: theme.motion.observer.rootMargin,
  };

  return (
    <Box
      component={motion.div}
      initial={reduceMotion ? false : { opacity: 0, ...initialPosition }}
      animate={trigger === "mount" ? visible : undefined}
      whileInView={trigger === "viewport" ? visible : undefined}
      viewport={trigger === "viewport" ? viewport : undefined}
      transition={{
        duration: reduceMotion ? 0 : theme.motion.duration.reveal / 1000,
        delay: reduceMotion ? 0 : delay,
        ease: theme.motion.easing.enter,
      }}
      layout={layout}
      style={style}
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  );
}

export default MotionReveal;
