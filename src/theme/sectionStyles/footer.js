import { row, grid, sectionPadding, sectionContentContainer } from "./shared";

const styles = {
  footerStyles: {
    section: sectionPadding,
    contentContainer: sectionContentContainer,
    containerMotion: { width: "100%" },
    grid: grid(
      { xs: "1fr 1fr", md: "1.4fr 1fr 1fr 1fr" },
      { xs: 4, md: 6 },
      { columnGap: { xs: 3, md: 6 }, rowGap: 4 }
    ),
    brandColumn: { height: "100%" },
    brandLogo: { mb: 1.5 },
    brandDescription: (theme) => ({
      ...theme.typography.footerDescription,
      color: "text.secondary",
      maxWidth: 200,
    }),
    socialLinks: { ...row, gap: 1, mt: 1.5 },
    socialButton: {
      width: 27,
      height: 27,
      color: "text.secondary",
      backgroundColor: "action.hover",
      border: 1,
      borderColor: "divider",
      "&:hover": {
        color: "primary.main",
        backgroundColor: "action.selected",
      },
    },
    socialIcon: (theme) => ({ fontSize: theme.spacing(15 / 8) }),
    navigationColumn: { height: "100%" },
    columnHeading: (theme) => ({
      ...theme.typography.footerColumnHeading,
      color: "text.primary",
      mb: 1.5,
    }),
    navigationLinks: { gap: 0.8 },
    navigationLink: (theme) => ({
      color: "text.secondary",
      textDecoration: "none",
      transition: theme.transitions.create("color", {
        duration: theme.motion.duration.fast,
        easing: theme.motion.easing.standard,
      }),
      "&:hover": {
        color: "primary.main",
      },
    }),
  },
};

export default styles.footerStyles;
