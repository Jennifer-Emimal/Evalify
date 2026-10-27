
import { Paper, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";

import HeroCTAButtons from "../../../components/common/HeroCTAButtons";
import heroDashboard from "../../../assets/hero-dashboard.png";
import { HERO_STATS } from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";

function HeroSection() {
  const {
    motionTheme,
    stagger,
    duration,
    maskDuration,
    easing,
  } = useMotionSettings();

  return (
    <Paper component="section" variant="heroSection">
        <Paper component="div" variant="heroGrid">
          {/* Left content */}
          <Paper component="div" variant="heroLeftContent">
            {/* Platform badge */}
            <Typography
              component="p"
              variant="sectionLabel"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              AI-powered hiring platform
            </Typography>

            {/* Main heading */}
            <motion.div
              initial={{
                opacity: 0,
                y: motionTheme.distance.medium,
                clipPath: "inset(0 0 100% 0)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
              }}
              transition={{
                duration: maskDuration,
                ease: easing,
              }}
            >
              <Typography
                variant="heroTitle"
                color="text.primary"
              >
                Hire with
                <br />
                confidence.
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{
                opacity: 0,
                y: motionTheme.distance.medium,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration,
                delay: stagger,
                ease: easing,
              }}
            >
              <Paper
                component="div"
                variant="heroDescription"
              >
                <Typography
                  variant="heroDescription"
                  color="text.secondary"
                >
                  AI-powered interviews, structured evaluations and
                  actionable insights to help you find the right talent
                  faster.
                </Typography>
              </Paper>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: motionTheme.distance.medium,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration,
                delay: stagger * 2,
                ease: easing,
              }}
            >
              <HeroCTAButtons />
            </motion.div>

            {/* Statistics */}
            <Paper component="div" variant="heroStats">
              {HERO_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: motionTheme.distance.small,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration,
                    delay: stagger * (3 + index),
                    ease: easing,
                  }}
                  style={{ minWidth: 0 }}
                >
                  <Stack
                    spacing={0}
                    sx={{ alignItems: "flex-start" }}
                  >
                    <Typography
                      variant="heroStatValue"
                      color="text.primary"
                    >
                      {stat.value}
                    </Typography>

                    <Paper
                      component="div"
                      variant="heroStatLabelWrapper"
                    >
                      <Typography
                        variant="heroStatLabel"
                        color="text.secondary"
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Stack>
                </motion.div>
              ))}
            </Paper>
          </Paper>

          {/* Right illustration */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration,
              delay: stagger * 2,
              ease: easing,
            }}
            style={{
              alignSelf: "stretch",
              minWidth: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Paper
              component="div"
              variant="heroIllustration"
            >
              <Paper
                component="img"
                variant="heroDashboardImage"
                src={heroDashboard}
                alt="Evalify AI interview dashboard with video interviews and candidate analytics"
                className="dashboard-image"
              />
            </Paper>
          </motion.div>
        </Paper>
    </Paper>
  );
}

export default HeroSection;
