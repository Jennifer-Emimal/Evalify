
import { Container, Paper, Typography } from "@mui/material";

import MotionReveal from "../../../components/common/MotionReveal";
import { TRUSTED_COMPANIES } from "../../../constants/homeContent";

function TrustedCompaniesSection() {
  return (
    <Paper
      component="section"
      variant="trustedCompaniesSection"
      aria-label="Trusted companies"
    >
      <Container maxWidth={false} disableGutters>
         <Paper component="div" variant="trustedCompaniesInner">
          <MotionReveal>
            <Typography
              component="p"
              variant="sectionLabel"
              color="text.secondary"
              sx={{ whiteSpace: "nowrap" }}
            >
              Trusted by modern teams
            </Typography>
          </MotionReveal>

          <MotionReveal sx={{ flex: 1, minWidth: 0 }}>
            <Paper component="div" variant="trustedCompaniesGrid">
              {TRUSTED_COMPANIES.map(({ name, Icon }) => (
                <Paper
                  key={name}
                  component="div"
                  variant="trustedCompanyLogo"
                >
                  <Icon variant="trustedCompanyIcon" />

                  <Typography
                    variant="trustedCompanyName"
                    component="span"
                  >
                    {name}
                  </Typography>
                </Paper>
              ))}
            </Paper>
          </MotionReveal>
        </Paper>
      </Container>
    </Paper>
  );
}

export default TrustedCompaniesSection;
