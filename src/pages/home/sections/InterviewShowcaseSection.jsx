import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

import MotionReveal from "../../../components/common/MotionReveal";
import SectionLabel from "../../../components/common/SectionLabel";
import interviewDashboard from "../../../assets/interview-dashboard.png";
import { INTERVIEW_BENEFITS } from "../../../constants/homeContent";
import sectionStyles from "../../../theme/sectionStyles";

function InterviewShowcaseSection() {
  const theme = useTheme();
  const styles = sectionStyles.interviewShowcaseStyles;

  return (
    <Box
      id="interview-showcase"
      component="section"
      sx={styles.section(theme)}
    >
      <Box sx={styles.layout(theme)}>
        <Box sx={styles.copyColumn(theme)}>
          <MotionReveal direction="left" distance="medium">
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
                {INTERVIEW_BENEFITS.map((benefit) => (
                  <Stack key={benefit} direction="row" sx={styles.benefit(theme)}>
                    <Box sx={styles.benefitIcon(theme)}>
                      <CheckIcon />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {benefit}
                    </Typography>
                  </Stack>
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
          </MotionReveal>
        </Box>

        <MotionReveal
          direction="right"
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
        </MotionReveal>
      </Box>
    </Box>
  );
}

export default InterviewShowcaseSection;
