import { Paper, Stack, Typography } from "@mui/material";

import HeroCTAButtons from "../../../components/common/HeroCTAButtons";
import MotionReveal from "../../../components/common/MotionReveal";
import heroDashboard from "../../../assets/hero-dashboard.png";
import { HERO_STATS } from "../../../constants/homeContent";

function HeroSection() {
  return (
    <Paper component="section" variant="heroSection">
      <Paper component="div" variant="heroGrid">
        <Paper component="div" variant="heroLeftContent">
          <MotionReveal trigger="mount">
            <Typography
              component="p"
              variant="sectionLabel"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              AI-powered hiring platform
            </Typography>

            <Typography variant="heroTitle" color="text.primary">
              Hire with
              <br />
              confidence.
            </Typography>

            <Paper component="div" variant="heroDescription">
              <Typography variant="heroDescription" color="text.secondary">
                AI-powered interviews, structured evaluations and actionable
                insights to help you find the right talent faster.
              </Typography>
            </Paper>

            <HeroCTAButtons />

            <Paper component="div" variant="heroStats">
              {HERO_STATS.map((stat) => (
                <Stack
                  key={stat.label}
                  spacing={0}
                  sx={{ alignItems: "flex-start" }}
                >
                  <Typography variant="heroStatValue" color="text.primary">
                    {stat.value}
                  </Typography>

                  <Paper component="div" variant="heroStatLabelWrapper">
                    <Typography variant="heroStatLabel" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Stack>
              ))}
            </Paper>
          </MotionReveal>
        </Paper>

        <MotionReveal
          trigger="mount"
          direction="right"
          sx={{ alignSelf: "stretch", minWidth: 0, width: "100%", height: "100%" }}
        >
          <Paper component="div" variant="heroIllustration">
            <Paper
              component="img"
              variant="heroDashboardImage"
              src={heroDashboard}
              alt="Evalify AI interview dashboard with video interviews and candidate analytics"
              className="dashboard-image"
            />
          </Paper>
        </MotionReveal>
      </Paper>
    </Paper>
  );
}

export default HeroSection;
