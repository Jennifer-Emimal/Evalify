import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import {
  Box,
  Card,
  Container,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import SectionLabel from "../../../components/common/SectionLabel";
import aiInterviewImage from "../../../assets/ai-interview.png";
import analyticsImage from "../../../assets/detailed-analytics.png";
import atsImage from "../../../assets/ats-integration.png";
import codingImage from "../../../assets/live-coding.png";
import dashboardImage from "../../../assets/feature-section.png";
import multiRoleImage from "../../../assets/multirole-support.png";
import questionGenerationImage from "../../../assets/ai-qn-generation.png";
import securityImage from "../../../assets/secure-reliable.png";
import evaluationImage from "../../../assets/smart-evaluation.png";
import { FEATURES } from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";
import sectionStyles from "../../../theme/sectionStyles";

const featureImages = [
  {
    src: aiInterviewImage,
    alt: "AI interviewer and voice conversation illustration",
    Icon: VideocamOutlinedIcon,
    iconColor: "blue",
  },
  {
    src: analyticsImage,
    alt: "Analytics charts and candidate insights illustration",
    Icon: BarChartOutlinedIcon,
    iconColor: "blue",
  },
  {
    src: questionGenerationImage,
    alt: "AI-generated interview questions illustration",
    Icon: DescriptionOutlinedIcon,
    iconColor: "orange",
  },
  {
    src: evaluationImage,
    alt: "Candidate evaluation scores and skill ratings illustration",
    Icon: AutoAwesomeOutlinedIcon,
    iconColor: "green",
  },
  {
    src: multiRoleImage,
    alt: "Candidate profiles for multiple professional roles illustration",
    Icon: GroupsOutlinedIcon,
    iconColor: "purple",
  },
  {
    src: codingImage,
    alt: "Live coding editor with programming language icons illustration",
    Icon: CodeOutlinedIcon,
    iconColor: "orange",
  },
  {
    src: atsImage,
    alt: "ATS integrations and candidate synchronization illustration",
    Icon: LanguageOutlinedIcon,
    iconColor: "blue",
  },
  {
    src: securityImage,
    alt: "Security shield and SOC 2 readiness illustration",
    Icon: SecurityOutlinedIcon,
    iconColor: "red",
  },
];

function FeaturesSection() {
  const theme = useTheme();
  const styles = sectionStyles.featureSectionStyles;

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
      sx={styles.section(theme)}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={styles.container(theme)}
      >
        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: motionTheme.distance.small,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration, ease: easing           }}
        >
          <Box sx={styles.header(theme)}>
            <SectionLabel>Powerful features</SectionLabel>

            <Typography
              component="h2"
              variant="sectionTitle"
              sx={styles.title}
            >
              Everything you need
              <br />
              to hire better.
            </Typography>

            <Typography
              variant="sectionDescription"
              sx={styles.subtitle(theme)}
            >
              Modern tools to evaluate, compare and make confident hiring
              decisions — built for today's teams.
            </Typography>
          </Box>
        </motion.div>

        {/* Feature cards */}
        <Box sx={styles.grid(theme)}>
          {FEATURES.map(({ title, description, background }, index) => {
            const { Icon, iconColor } = featureImages[index];

            return (
              <Box
                key={title}
                component={motion.div}
                sx={styles.cardMotion(theme, index)}
                initial={{ opacity: 0, y: motionTheme.distance.medium }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration,
                  delay: index * stagger,
                  ease: easing,
                }}
              >
                <Card
                  component="article"
                  sx={styles.card(theme, background, index)}
                >
                  <Box sx={styles.copy(theme, index)}>
                    <Box sx={styles.iconBadge(theme, background, iconColor)}>
                      <Icon />
                    </Box>

                    <Typography
                      component="h3"
                      variant="stepTitle"
                      sx={styles.cardTitle(theme)}
                    >
                      {title}
                    </Typography>

                    <Typography
                      variant="stepDescription"
                      sx={styles.cardDescription(theme)}
                    >
                      {description}
                    </Typography>

                    <Box
                      component="span"
                      aria-hidden="true"
                      sx={styles.arrowButton(theme)}
                    >
                      <ArrowForwardIcon />
                    </Box>
                  </Box>

                  <Box
                    component="img"
                    src={featureImages[index].src}
                    alt={featureImages[index].alt}
                    sx={styles.illustration(theme, index)}
                  />
                </Card>
              </Box>
            );
          })}

          <Box sx={styles.dashboard(theme)}>
            <motion.div
              initial={{ opacity: 0, y: motionTheme.distance.small }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration,
                delay: stagger,
                ease: easing,
              }}
            >
              <Box
                component="img"
                src={dashboardImage}
                alt="Evalify AI interview dashboard with a candidate video interview, question panel and live audio controls"
                sx={styles.dashboardImage(theme)}
              />
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default FeaturesSection;