import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import MotionReveal from "../../../components/common/MotionReveal";
import SectionLabel from "../../../components/common/SectionLabel";
import GradientText from "../../../components/common/GradientText";
import { FAQS } from "../../../constants/homeContent";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const theme = useTheme();

  const { faqStyles } = theme;

  return (
    <Box
      id="faq"
      component="section"
      sx={faqStyles.section}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={faqStyles.container(theme)}
      >
        <MotionReveal sx={faqStyles.mainLayout}>
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
          <Stack sx={faqStyles.faqListMotion}>
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <Box key={faq.question}>
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
        </MotionReveal>
      </Container>
    </Box>
  );
}

export default FAQSection;