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
import { FEATURES } from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";

function FeaturesSection() {
  const theme = useTheme();
  const { sectionTokens, featureTokens } = theme;

  const {
    motionTheme,
    duration,
    stagger,
    easing,
  } = useMotionSettings(0.5);

  return (
    <Box
      id="features"
      component="section"
      sx={{
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration, ease: easing }}
        >
          <Stack
            sx={{
              alignItems: "center",
              textAlign: "center",
              mb: {
                xs: sectionTokens.headingMarginBottom.xs,
                md: sectionTokens.headingMarginBottom.md,
              },
            }}
          >
            <SectionLabel>Everything you need</SectionLabel>

            <Typography
              component="h2"
              variant="sectionTitle"
              sx={{ color: "text.primary" }}
            >
              Built for modern hiring{" "}
              <GradientText>teams.</GradientText>
            </Typography>

            <Typography
              variant="sectionDescription"
              sx={{
                color: "text.secondary",
                maxWidth: featureTokens.headingMaxWidth,
                mt: featureTokens.headingDescriptionMarginTop,
              }}
            >
              From AI interviews to detailed analytics, Evalify gives you
              all the tools to streamline your hiring process.
            </Typography>
          </Stack>
        </motion.div>

        {/* Feature cards */}
        <Box
          sx={{
            display: "grid",
            width: "100%",
            maxWidth: "1040px",
            mx: "auto",
            gridTemplateColumns: {
              xs: featureTokens.columns.xs,
              sm: featureTokens.columns.sm,
              lg: featureTokens.columns.lg,
            },
            gap: {
              xs: sectionTokens.gridGap.xs,
              md: sectionTokens.gridGap.md,
            },
          }}
        >
          {FEATURES.map(
            ({ title, description, Icon, color, background }, index) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: motionTheme.distance.medium,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration,
                  delay: index * stagger,
                  ease: easing,
                }}
                style={{ height: "100%" }}
              >
                <Card
                  component="article"
                  sx={{
                    height: "100%",
                    minHeight: {
                      xs: featureTokens.cardMinHeight.xs,
                      md: featureTokens.cardMinHeight.md,
                    },
                    border: featureTokens.borderWidth,
                    borderColor: "divider",
                    boxShadow: theme.customShadows.card,

                    [featureTokens.hoverMedia]: {
                      "&:hover .feature-icon": {
                        transform: featureTokens.iconHoverTransform,
                      },
                    },

                    "& .feature-icon": {
                      transition: theme.transitions.create("transform", {
                        duration: motionTheme.duration.fast,
                        easing: motionTheme.easing.standard,
                      }),
                    },

                    [featureTokens.reducedMotionMedia]: {
                      "& .feature-icon": {
                        transform: "none",
                        transition: "none",
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: {
                        xs: featureTokens.cardPadding.xs,
                        md: featureTokens.cardPadding.md,
                      },
                      "&:last-child": {
                        pb: {
                          xs: featureTokens.cardPadding.xs,
                          md: featureTokens.cardPadding.md,
                        },
                      },
                    }}
                  >
                    {/* Feature icon — left-aligned */}
                    {/* Feature icon — icon centered inside the colored box */}
                    <Box
                      className="grid-center feature-icon"
                      sx={{
                        width: theme.spacing(featureTokens.iconSize),
                        height: theme.spacing(featureTokens.iconSize),
                        borderRadius: featureTokens.iconRadius,
                        bgcolor: theme.palette.accentSurface[background],
                        color: theme.palette.accent[color],
                        mb: featureTokens.iconMarginBottom,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        sx={{
                          fontSize: theme.spacing(featureTokens.iconFontSize),
                          display: "block",
                        }}
                      />
                    </Box>

                    {/* Feature title */}
                    <Typography
                      component="h3"
                      variant={featureTokens.titleVariant}
                      sx={{ color: "text.primary" }}
                    >
                      {title}
                    </Typography>

                    {/* Feature description */}
                    <Typography
                      variant={featureTokens.descriptionVariant}
                      sx={{
                        color: "text.secondary",
                        mt: featureTokens.descriptionMarginTop,
                        maxWidth: featureTokens.descriptionMaxWidth,
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

export default FeaturesSection;