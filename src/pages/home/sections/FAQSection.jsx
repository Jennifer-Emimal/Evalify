import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import SectionLabel from "../../../components/common/SectionLabel";
import GradientText from "../../../components/common/GradientText";
import { FAQS } from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const theme = useTheme();

  const { faqStyles } = theme;
  const { duration, stagger, easing, distance, smallDistance } =
    useMotionSettings();

  const visibleTransition = {
    duration,
    ease: easing,
  };

  return (
    <Box
      id="faq"
      component="section"
      sx={faqStyles.section}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={faqStyles.headingInitial(distance)}
          whileInView={faqStyles.visible}
          viewport={faqStyles.viewport}
          transition={visibleTransition}
          sx={faqStyles.mainLayout}
        >
          {/* Left column */}
          <Box sx={faqStyles.leftColumn}>
            <Box sx={faqStyles.headingMotion}>
              <SectionLabel align="left">FAQ</SectionLabel>

              <Typography
                component="h2"
                variant="h2"
                sx={faqStyles.heading}
              >
                Questions teams ask
                <br />
                before{" "}
                <GradientText>switching.</GradientText>
              </Typography>

              <Typography
                variant="body1"
                sx={faqStyles.description}
              >
                Get answers about AI interviews, candidate evaluations,
                integrations and hiring workflows.
              </Typography>
            </Box>

            {/* Support card */}
              <Box sx={faqStyles.supportContent}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={faqStyles.supportButton}
                >
                  Contact support
                </Button>
              </Box>
          </Box>

          {/* Right column: FAQ list */}
          <Stack
            component={motion.div}
            initial={{ opacity: 0, x: distance }}
            whileInView={faqStyles.visible}
            viewport={faqStyles.viewport}
            transition={visibleTransition}
            sx={faqStyles.faqListMotion}
          >
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <Box
                  key={faq.question}
                  component={motion.div}
                  initial={faqStyles.faqItemInitial(smallDistance)}
                  whileInView={faqStyles.visible}
                  viewport={faqStyles.viewport}
                  transition={{
                    duration,
                    delay: index * stagger * 0.5,
                    ease: easing,
                  }}
                >
                  <Accordion
                    expanded={isOpen}
                    onChange={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    disableGutters
                    elevation={0}
                    square
                    sx={faqStyles.accordion}
                  >
                    <AccordionSummary
                      id={`faq-question-${index}`}
                      aria-controls={`faq-answer-${index}`}
                      expandIcon={
                        <Box sx={faqStyles.expandIcon(isOpen)}>
                          <KeyboardArrowDownIcon />
                        </Box>
                      }
                      sx={faqStyles.summary(theme)}
                    >
                      {faq.question}
                    </AccordionSummary>

                    <AccordionDetails
                      id={`faq-answer-${index}`}
                      sx={faqStyles.accordionDetails}
                    >
                      <Typography
                        variant="body2"
                        sx={faqStyles.answer}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default FAQSection;