
import { Box, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import SectionLabel from "../../../components/common/SectionLabel";
import { HOW_IT_WORKS_STEPS } from "../../../constants/homeContent";
import sectionStyles from "../../../theme/sectionStyles";

function HowItWorksSection() {
  const theme = useTheme();
  const styles = sectionStyles.howItWorksStyles;

  return (
    <Box
      component="section"
      id="how-it-works"
      sx={styles.section(theme)}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={styles.container(theme)}
      >
        <Stack sx={styles.header}>
          <Box sx={styles.labelSpacing}>
            <SectionLabel align="center">How it works</SectionLabel>
          </Box>

          <Typography
            component="h2"
            variant="h1"
            sx={styles.title(theme)}
          >
            Four simple steps.
          </Typography>

          <Typography
            component="p"
            variant="h2"
            sx={styles.subtitle(theme)}
          >
            From job to{" "}
            <Box component="span" sx={styles.subtitleAccent}>
              the right hire.
            </Box>
          </Typography>

          <Typography variant="body1" sx={styles.description(theme)}>
            Set up an interview in minutes and let Evalify handle the rest.
          </Typography>
        </Stack>

        <Box sx={styles.timeline(theme)}>
          <Box
            component="svg"
            aria-hidden="true"
            viewBox="0 0 1200 90"
            preserveAspectRatio="none"
            sx={styles.connector(theme)}
          >
            <path
              d="
                M 150 40
                C 240 -16, 360 -16, 450 46
                C 540 106, 660 106, 750 40
                C 840 -16, 960 -16, 1050 34
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeDasharray="0 6"
              strokeLinecap="round"
            />
          </Box>

          <Box sx={styles.steps(theme)}>
            {HOW_IT_WORKS_STEPS.map(
              ({ number, title, description, Icon }, index) => (
                <Box key={number} sx={styles.step}>
                  <Stack sx={styles.stepContent(theme)}>
                    <Typography
                      variant="stepNumber"
                      sx={styles.stepNumber(theme, index)}
                    >
                      {number}
                    </Typography>

                    <Box sx={styles.stepIcon(theme, index)}>
                      <Icon />
                    </Box>

                    <Typography
                      component="h3"
                      variant="stepTitle"
                      sx={styles.stepTitle(theme)}
                    >
                      {title}
                    </Typography>

                    <Typography
                      variant="stepDescription"
                      sx={styles.stepDescription(theme)}
                    >
                      {description}
                    </Typography>
                  </Stack>
                </Box>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HowItWorksSection;
