import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

import SectionLabel from "../../../components/common/SectionLabel";
import interviewDashboard from "../../../assets/interview-dashboard.png";
import { INTERVIEW_BENEFITS } from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";
import sectionStyles from "../../../theme/sectionStyles";

function InterviewShowcaseSection() {
  const theme = useTheme();
  const styles = sectionStyles.interviewShowcaseStyles;
  const { motionTheme, stagger, duration, easing } = useMotionSettings();

  return (
    <Box
      id="interview-showcase"
      component="section"
      sx={styles.section(theme)}
    >
      <Box sx={styles.layout(theme)}>
        <Box sx={styles.copyColumn(theme)}>
          <motion.div
            initial={{
              opacity: 0,
              x: -motionTheme.distance.medium,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration, ease: easing }}
          >
            <Stack sx={styles.content(theme)}>
              <SectionLabel align="left">Interview experience</SectionLabel>

              <Typography
                component="h2"
                variant="heroTitle"
                sx={styles.heading(theme)}
              >
                Real conversations.
                <br />
                Real insights.
              </Typography>

              <Typography
                variant="heroDescription"
                sx={styles.description(theme)}
              >
                Go beyond resumes with AI interviews that adapt in real time,
                evaluate skills accurately and give you actionable insights.
              </Typography>

              <Stack sx={styles.benefits(theme)}>
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
                    <Stack direction="row" sx={styles.benefit(theme)}>
                      <Box sx={styles.benefitIcon(theme)}>
                        <CheckIcon />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {benefit}
                      </Typography>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>

              <Button
                component="a"
                href="#features"
                variant="text"
                endIcon={<ArrowForwardIcon />}
                sx={styles.cta(theme)}
              >
                Explore interviews
              </Button>
            </Stack>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, x: motionTheme.distance.small }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration,
            delay: stagger,
            ease: easing,
          }}
          style={{
            width: "100%",
            height: "100%",
            minWidth: 0,
          }}
        >
          <Box
            component="img"
            src={interviewDashboard}
            alt="AI video interview with speech analysis and candidate scorecards"
            className="dashboard-image"
            sx={styles.image(theme)}
          />
        </motion.div>
      </Box>
    </Box>
  );
}

export default InterviewShowcaseSection;
