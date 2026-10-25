
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import SectionLabel from "../../../components/common/SectionLabel";
import GradientText from "../../../components/common/GradientText";
import interviewDashboard from "../../../assets/interview-dashboard.png";
import { INTERVIEW_BENEFITS } from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";

function InterviewShowcaseSection() {
  const theme = useTheme();
  const { sectionTokens, showcaseTokens } = theme;
  const {
    motionTheme,
    stagger,
    duration,
    maskDuration,
    easing,
  } = useMotionSettings();

  return (
    <Box
      id="interview-showcase"
      component="section"
      sx={{
        width: "100%",
        overflow: "hidden",
        background: theme.gradients.hero,
        py: {
          xs: sectionTokens.paddingY.xs,
          md: sectionTokens.paddingY.md,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: showcaseTokens.columns,
            alignItems: "center",
            gap: {
              xs: showcaseTokens.gap.xs,
              md: showcaseTokens.gap.md,
            },
          }}
        >
          {/* Left content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -motionTheme.distance.medium,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration, ease: easing }}
          >
            <Stack
              sx={{
                maxWidth: theme.spacing(showcaseTokens.contentMaxWidth / 8),
                textAlign: "left",
                alignItems: "flex-start",
              }}
            >
              <SectionLabel align="left">
                Powerful AI Interviews
              </SectionLabel>

              <Typography
                component="h2"
                variant={showcaseTokens.headingVariant}
                sx={{ color: "text.primary" }}
              >
                Hire faster,
                <br />
                hire fairer, hire{" "}
                <GradientText>better.</GradientText>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mt: showcaseTokens.descriptionMargin,
                }}
              >
                Evalify combines AI, automation and real-time analysis to
                give you a complete hiring solution in one platform.
              </Typography>

              <Stack
                sx={{
                  mt: showcaseTokens.benefitsMargin,
                  width: "100%",
                  gap: theme.spacing(showcaseTokens.benefitGap),
                }}
              >
                {INTERVIEW_BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{
                      opacity: 0,
                      x: -motionTheme.distance.small,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration,
                      delay: (index + 1) * stagger,
                      ease: easing,
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: theme.spacing(showcaseTokens.benefitGap),
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "secondary.main",
                          fontSize: showcaseTokens.benefitIconFontSize,
                          flexShrink: 0,
                        }}
                      />

                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {benefit}
                      </Typography>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: showcaseTokens.buttonMargin }}
              >
                Explore features
              </Button>
            </Stack>
          </motion.div>

          {/* Right dashboard illustration */}
          <motion.div
            initial={{
              opacity: 0,
              y: motionTheme.distance.medium,
              clipPath: "inset(0 0 100% 0)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: maskDuration,
              delay: stagger * 2,
              ease: motionTheme.easing.mask,
            }}
            style={{
              width: "100%",
              minWidth: 0,
            }}
          >
            <Stack
              sx={{
                width: "100%",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={interviewDashboard}
                alt="AI video interview with speech analysis and candidate scorecards"
                className="dashboard-image"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  maxWidth: showcaseTokens.dashboardMaxWidth,
                  objectFit: "contain",
                  maskImage: theme.imageTokens.edgeMask,
                  WebkitMaskImage: theme.imageTokens.edgeMask,
                }}
              />
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default InterviewShowcaseSection;
