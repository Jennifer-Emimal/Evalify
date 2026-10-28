import { column, grid, sectionPadding, sectionContentContainer, hoverColorTransition } from "./shared";

const styles = {
  faqStyles: {
    section: (theme) => sectionPadding(theme, { overflow: "hidden" }),
    container: sectionContentContainer,
    mainLayout: grid(
      { xs: "1fr", md: "0.95fr 1.05fr" },
      { xs: 4, md: 5 },
      { alignItems: "start" }
    ),
    leftColumn: {
      position: "relative",
      isolation: "isolate",
      minWidth: 0,
      ...column,
    },
    headingMotion: { width: "100%", position: "relative", zIndex: 1 },
    heading: (theme) => ({
      ...theme.typography.sectionHeading,
      color: "text.primary",
      maxWidth: 480,
    }),
    description: { color: "text.secondary", mt: 1.5, maxWidth: 440 },
    supportCard: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      alignItems: "flex-start",
      gap: 1,
      mt: 4,
      p: 0,
      borderRadius: 0,
      background: "transparent",
      border: 0,
    },
    supportContent: { minWidth: 0 },
    supportTitle: { color: "text.primary" },
    supportDescription: { color: "text.secondary", mt: 0.5 },
    supportButton: { mt: 1.5 },
    faqListMotion: {
      borderTop: 1,
      borderColor: "divider",
      minWidth: 0,
    },
    accordion: {
      backgroundColor: "transparent",
      borderBottom: 1,
      borderColor: "divider",
      "&::before": { display: "none" },
    },
    expandIcon: (isOpen) => ({
      width: 40,
      height: 40,
      borderRadius: "50%",
      bgcolor: isOpen ? "background.accent" : "background.paper",
      color: isOpen ? "secondary.dark" : "text.secondary",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }),
    summary: (theme) => ({
  color: "text.primary",
  px: 0,
  py: { xs: 1, md: 1 }, 
  minHeight: "auto",
  ...theme.typography.faqQuestion,
  textAlign: "left",
  "&.Mui-expanded": { minHeight: "auto" },
  "& .MuiAccordionSummary-content, & .MuiAccordionSummary-content.Mui-expanded": {
    my: 0,
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    transition: theme.transitions.create("transform", {
      duration: theme.motion.duration.fast,
      easing: theme.motion.easing.standard,
    }),
  },
  ...hoverColorTransition(theme),
}),
    accordionDetails: { px: 0, pt: 0, pb: 2.5 },
    answer: {
      color: "text.secondary",
      pb: 2.5,
      pr: { xs: 1, md: 4 },
      lineHeight: 1.8,
    },
  },
};

export default styles.faqStyles;
