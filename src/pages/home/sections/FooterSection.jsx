
import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import BrandLogo from "../../../components/common/BrandLogo";
import {
  FOOTER_COLUMNS,
  SOCIAL_LINKS,
} from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";

function FooterSection() {
  const theme = useTheme();
  const { footerStyles } = theme;
  const { duration, stagger, easing, distance } = useMotionSettings();

  return (
    <Box
      component="footer"
      sx={footerStyles.section}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={footerStyles.fadeInitial(distance)}
          whileInView={footerStyles.visible}
          viewport={footerStyles.viewport}
          transition={footerStyles.transition(duration, easing)}
          sx={footerStyles.containerMotion}
        >
          <Box sx={footerStyles.grid}>
            {/* Brand */}
            <Box
              component={motion.div}
              initial={footerStyles.fadeInitial(distance)}
              whileInView={footerStyles.visible}
              viewport={footerStyles.viewport}
              transition={footerStyles.transition(
                duration,
                easing,
                stagger
              )}
              sx={footerStyles.brandColumn}
            >
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
            {FOOTER_COLUMNS.map((column, index) => (
              <Box
                key={column.title}
                component={motion.div}
                initial={footerStyles.slideInitial(index, distance)}
                whileInView={footerStyles.visible}
                viewport={footerStyles.viewport}
                transition={footerStyles.transition(
                  duration,
                  easing,
                  stagger * (index + 2)
                )}
                sx={footerStyles.navigationColumn}
              >
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
        </Box>
      </Container>
    </Box>
  );
}

export default FooterSection;
