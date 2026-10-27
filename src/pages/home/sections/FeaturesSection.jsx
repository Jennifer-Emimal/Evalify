import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import SectionLabel from "../../../components/common/SectionLabel";
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
              alignItems: "end",
              columnGap: { xs: 1.5, md: 5 },
              mb: {
                xs: sectionTokens.headingMarginBottom.xs,
                md: sectionTokens.headingMarginBottom.md,
              },
            }}
          >
            <Box>
              <SectionLabel align="left">Powerful features</SectionLabel>

              <Typography
                component="h2"
                variant="sectionTitle"
                sx={{ color: "text.primary" }}
              >
                Everything you need
                <br />
                to hire better.
              </Typography>
            </Box>

            <Typography
              variant="sectionDescription"
              sx={{
                color: "text.secondary",
                maxWidth: 420,
                mt: 0,
                mb: { xs: 0, md: 1 },
              }}
            >
              Modern tools to evaluate, compare and make confident hiring
              decisions — built for today's teams.
            </Typography>
          </Box>
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
                      display: "grid",
                      gridTemplateColumns: "42px minmax(0, 1fr)",
                      columnGap: 1.75,
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
                        gridRow: "1 / span 2",
                        width: theme.spacing(5),
                        height: theme.spacing(5),
                        borderRadius: "50%",
                        bgcolor: theme.palette.accentSurface[background],
                        color: theme.palette.accent[color],
                        mb: 0,
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
                        mt: 0.5,
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