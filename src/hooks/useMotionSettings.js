import { useTheme } from "@mui/material/styles";

function useMotionSettings(staggerScale = 1) {
  const { motion } = useTheme();

  return {
    motionTheme: motion,
    duration: motion.duration.reveal / 1000,
    stagger: (motion.stagger * staggerScale) / 1000,
    maskDuration: motion.duration.mask / 1000,
    fastDuration: motion.duration.fast / 1000,
    easing: motion.easing.enter,
    distance: motion.distance.medium,
    smallDistance: motion.distance.small,
  };
}

export default useMotionSettings;
