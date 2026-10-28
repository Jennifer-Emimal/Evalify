
import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import BrandLogo from "../../../components/common/BrandLogo";
import MotionReveal from "../../../components/common/MotionReveal";
import {
  FOOTER_COLUMNS,
  SOCIAL_LINKS,
} from "../../../constants/homeContent";

function FooterSection() {
  const theme = useTheme();
  const { footerStyles } = theme;

  return (
    <Box
      component="footer"
      sx={footerStyles.section}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={footerStyles.contentContainer(theme)}
      >
        <MotionReveal sx={footerStyles.containerMotion}>
          <Box sx={footerStyles.grid}>
            {/* Brand */}
            <Box sx={footerStyles.brandColumn}>
              <Box sx={footerStyles.brandLogo}>
                <BrandLogo />
              </Box>

              <Typography
                variant="body2"
                sx={footerStyles.brandDescription}
              >
                AI-powered interviews for modern hiring teams.
              </Typography>

              {/* Social links */}
              <Stack sx={footerStyles.socialLinks}>
                {SOCIAL_LINKS.map(({ label, Icon, href }) => (
                  <IconButton
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    size="small"
                    sx={footerStyles.socialButton}
                  >
                    <Icon sx={footerStyles.socialIcon} />
                  </IconButton>
                ))}
              </Stack>
            </Box>

            {/* Navigation columns */}
            {FOOTER_COLUMNS.map((column) => (
              <Box key={column.title} sx={footerStyles.navigationColumn}>
                <Typography
                  component="h3"
                  variant="h3"
                  sx={footerStyles.columnHeading}
                >
                  {column.title}
                </Typography>

                <Stack sx={footerStyles.navigationLinks}>
                  {column.links.map((link) => (
                    <Typography
                      key={link.label}
                      component="a"
                      variant="body2"
                      href={link.href}
                      className="footer-link"
                      sx={footerStyles.navigationLink(theme)}
                    >
                      {link.label}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </MotionReveal>
      </Container>
    </Box>
  );
}

export default FooterSection;
