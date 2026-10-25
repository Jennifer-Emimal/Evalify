
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import SectionLabel from "../../../components/common/SectionLabel";
import GradientText from "../../../components/common/GradientText";
import { HOW_IT_WORKS_STEPS } from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";

function HowItWorksSection() {
  const theme = useTheme();
  const { sectionTokens } = theme;
  const {
    motionTheme,
    stagger,
    duration,
    maskDuration: connectorDuration,
    fastDuration: iconDelay,
    easing,
  } = useMotionSettings();

  return (
    <Box
      component="section"
      id="how-it-works"
      sx={{
        width: "100%",
        textAlign: "center",
        background: theme.gradients.hero,
        py: {
          xs: sectionTokens.paddingY.xs,
          md: sectionTokens.paddingY.md,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: motionTheme.distance.small,
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
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              mb: {
                xs: sectionTokens.headingMarginBottom.xs,
                md: sectionTokens.headingMarginBottom.md,
              },
            }}
          >
            <SectionLabel>How it works</SectionLabel>

            <Typography
              component="h2"
              variant="sectionTitle"
              sx={{
                color: "text.primary",
              }}
            >
              Four simple steps.
              <br />
              From job to the <GradientText>right hire.</GradientText>
            </Typography>

            <Typography
              variant="sectionDescription"
              sx={{
                color: "text.secondary",
                mt: 1.5,
              }}
            >
              Set up an interview in minutes and let AI handle the rest.
            </Typography>
          </Stack>
        </motion.div>

        {/* Steps grid and connectors */}
        <Box
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            gap: {
              xs: sectionTokens.gridGap.xs,
              md: sectionTokens.gridGap.md,
            },
          }}
        >
          {/* Vertical connector for mobile */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: connectorDuration,
              ease: easing,
            }}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              transformOrigin: "top center",
              zIndex: 0,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: theme.spacing(sectionTokens.connectorOffset),
                width: theme.spacing(sectionTokens.connectorThickness),
                bgcolor: "divider",
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            />
          </motion.div>

          {/* Horizontal connector for desktop */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: connectorDuration,
              ease: easing,
            }}
            style={{
              position: "absolute",
              top: theme.spacing(sectionTokens.connectorTop),
              left: theme.spacing(sectionTokens.connectorOffset),
              right: theme.spacing(sectionTokens.connectorOffset),
              height: theme.spacing(sectionTokens.connectorThickness),
              transformOrigin: "left center",
              zIndex: 0,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: "divider",
                display: {
                  xs: "none",
                  lg: "block",
                },
              }}
            />
          </motion.div>

          {/* Step cards */}
          {HOW_IT_WORKS_STEPS.map(
            ({ number, title, description, Icon, iconColor }, index) => (
              <motion.div
                key={number}
                initial={{
                  opacity: 0,
                  y: motionTheme.distance.medium,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration,
                  delay: index * stagger,
                  ease: easing,
                }}
                style={{
                  position: "relative",
                  zIndex: 1,
                  height: "100%",
                  minWidth: 0,
                }}
              >
                <Card
                  component="article"
                  sx={{
                    height: "100%",
                    minHeight: {
                      xs: sectionTokens.cardMinHeight.xs,
                      md: sectionTokens.cardMinHeight.md,
                    },
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 3,
                    boxShadow: theme.customShadows.card,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      textAlign: "left",
                      p: {
                        xs: sectionTokens.cardPadding.xs,
                        md: sectionTokens.cardPadding.md,
                      },
                      "&:last-child": {
                        pb: {
                          xs: sectionTokens.cardPadding.xs,
                          md: sectionTokens.cardPadding.md,
                        },
                      },
                    }}
                  >
                    {/* Animated icon */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration,
                        delay: index * stagger + iconDelay,
                        ease: easing,
                      }}
                      style={{
                        marginBottom: theme.spacing(1.5),
                      }}
                    >
                      <Box
                        sx={{
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0,
                          width: theme.spacing(sectionTokens.iconSize),
                          height: theme.spacing(sectionTokens.iconSize),
                          borderRadius: sectionTokens.iconRadius,
                          bgcolor: "background.soft",
                          color: theme.palette.accent[iconColor],
                          "& .MuiSvgIcon-root": {
                            fontSize: theme.spacing(
                              sectionTokens.iconFontSize
                            ),
                          },
                        }}
                      >
                        <Icon />
                      </Box>
                    </motion.div>

                    <Typography
                      variant="stepNumber"
                      sx={{
                        color: "text.disabled",
                        mb: 0.3,
                      }}
                    >
                      {number}
                    </Typography>

                    <Typography
                      component="h3"
                      variant="stepTitle"
                      sx={{
                        color: "text.primary",
                      }}
                    >
                      {title}
                    </Typography>

                    <Typography
                      variant="stepDescription"
                      sx={{
                        color: "text.secondary",
                        mt: 0.8,
                      }}
                    >
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default HowItWorksSection;
