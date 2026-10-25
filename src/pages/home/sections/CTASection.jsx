
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import CheckIcon from "@mui/icons-material/Check";

import ctaDashboard from "../../../assets/cta-dashboard.png";
import HeroCTAButtons from "../../../components/common/HeroCTAButtons";
import GradientText from "../../../components/common/GradientText";
import { CTA_BENEFITS } from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";

function CTASection() {
  const theme = useTheme();
  const { ctaStyles } = theme;
  const {
    duration,
    stagger,
    easing,
    distance,
    smallDistance,
  } = useMotionSettings();

  return (
    <Box
      component="section"
      id="get-started"
      sx={ctaStyles.section}
    >
      <Container maxWidth="lg">
        <Box sx={ctaStyles.layout}>
          {/* Left content */}
          <Box sx={ctaStyles.content}>
            {/* Trust badge */}
            <Box
              component={motion.div}
              initial={ctaStyles.fadeInitial(distance)}
              whileInView={ctaStyles.visible}
              viewport={{ once: true }}
              transition={ctaStyles.trustTransition(duration, easing)}
              sx={ctaStyles.trustBadge}
            >
              <Paper component="div" variant="heroBadgeIcon">
                <CheckIcon variant="heroBadgeCheck" />
              </Paper>

              <Typography
                variant="heroBadgeText"
                color="text.secondary"
              >
                Trusted by 1000+ teams
              </Typography>
            </Box>

            {/* Heading */}
            <Box
              component={motion.div}
              initial={ctaStyles.fadeInitial(distance)}
              whileInView={ctaStyles.visible}
              viewport={{ once: true }}
              transition={ctaStyles.headingTransition(theme, stagger)}
            >
              <Typography
                component="h2"
                variant="h2"
                sx={ctaStyles.heading}
              >
                Stop scheduling.
                <br />
                <GradientText>Start hiring.</GradientText>
              </Typography>
            </Box>

            {/* Description */}
            <Box
              component={motion.div}
              initial={ctaStyles.fadeInitial(distance)}
              whileInView={ctaStyles.visible}
              viewport={{ once: true }}
              transition={ctaStyles.descriptionTransition(
                duration,
                easing,
                stagger
              )}
            >
              <Typography sx={ctaStyles.description}>
                Join thousands of teams already using Evalify to find and
                hire top talent.
              </Typography>
            </Box>

            {/* CTA buttons */}
            <Box
              component={motion.div}
              initial={ctaStyles.fadeInitial(distance)}
              whileInView={ctaStyles.visible}
              viewport={{ once: true }}
              transition={ctaStyles.buttonTransition(
                duration,
                easing,
                stagger
              )}
            >
              <HeroCTAButtons />
            </Box>

            {/* Benefits */}
            <Stack sx={ctaStyles.benefits}>
              {CTA_BENEFITS.map(({ label, Icon }, index) => (
                <Stack
                  key={label}
                  component={motion.div}
                  initial={ctaStyles.benefitInitial(smallDistance)}
                  whileInView={ctaStyles.visible}
                  viewport={{ once: true }}
                  transition={ctaStyles.benefitTransition(
                    duration,
                    easing,
                    stagger,
                    index
                  )}
                  sx={ctaStyles.benefitItem(index, CTA_BENEFITS.length)}
                >
                  <Box sx={ctaStyles.benefitIcon}>
                    <Icon />
                  </Box>

                  <Typography sx={ctaStyles.benefitLabel}>
                    {label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* Right dashboard illustration */}
          <Box
            component={motion.div}
            initial={ctaStyles.slideInitial(distance)}
            whileInView={ctaStyles.visible}
            viewport={{ once: true }}
            transition={ctaStyles.dashboardTransition(
              duration,
              easing,
              stagger
            )}
            sx={{
              ...ctaStyles.dashboard,
              justifyContent: "flex-end",
            }}
          >
            <Box
              component="img"
              src={ctaDashboard}
              alt="Evalify hiring dashboard illustration"
              className="dashboard-image"
              sx={{
                ...ctaStyles.dashboardImage,
                width: "100%",
                maxWidth: theme.imageTokens.ctaMaxWidth,
                maskImage: theme.imageTokens.edgeMask,
                WebkitMaskImage: theme.imageTokens.edgeMask,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default CTASection;
