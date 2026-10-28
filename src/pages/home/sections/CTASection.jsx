
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import HeroCTAButtons from "../../../components/common/HeroCTAButtons";
import useMotionSettings from "../../../hooks/useMotionSettings";

function CTASection() {
  const theme = useTheme();
  const { ctaStyles } = theme;
  const {
    duration,
    easing,
    distance,
  } = useMotionSettings();

  return (
    <Box
      component="section"
      id="get-started"
      sx={ctaStyles.section}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={ctaStyles.container(theme)}
      >
        <Box
          component={motion.div}
          initial={ctaStyles.fadeInitial(distance)}
          whileInView={ctaStyles.visible}
          viewport={{ once: true }}
          transition={{ duration, ease: easing }}
          sx={ctaStyles.banner(theme)}
        >
          <Typography
            component="p"
            variant="sectionLabel"
            sx={ctaStyles.label}
          >
            Ready to build a stronger team?
          </Typography>

          <Typography
            component="h2"
            variant="h2"
            sx={ctaStyles.heading}
          >
            Start hiring with clarity.
          </Typography>

          <Typography variant="body2" sx={ctaStyles.description}>
            Join thousands of teams using Evalify to find and hire top talent
            faster.
          </Typography>

          <HeroCTAButtons inverted sx={{ mt: 2 }} />
        </Box>
      </Container>
    </Box>
  );
}

export default CTASection;
