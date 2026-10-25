
import { Container, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import SectionLabel from "../../../components/common/SectionLabel";
import { TRUSTED_COMPANIES } from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";

function TrustedCompaniesSection() {
  const theme = useTheme();
  const { stagger, duration, easing } = useMotionSettings();

  return (
    <Paper
      component="section"
      variant="trustedCompaniesSection"
      aria-label="Trusted companies"
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: theme.motion.distance.small,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration,
            ease: easing,
          }}
        >
          <SectionLabel>
            Trusted by growing teams
          </SectionLabel>
        </motion.div>

        {/* Company logos */}
        <Paper
          component="div"
          variant="trustedCompaniesGrid"
        >
          {TRUSTED_COMPANIES.map(({ name, Icon }, index) => (
            <motion.div
              key={name}
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration,
                delay: index * stagger,
                ease: easing,
              }}
            >
              <Paper
                component="div"
                variant="trustedCompanyLogo"
              >
                <Icon variant="trustedCompanyIcon" />

                <Typography
                  variant="trustedCompanyName"
                  component="span"
                >
                  {name}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Paper>
      </Container>
    </Paper>
  );
}

export default TrustedCompaniesSection;
