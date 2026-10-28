import { column, row, sectionPadding, sectionContentContainer, cardSurface } from "./shared";

const styles = {
  testimonialsStyles: {
    section: sectionPadding,
    container: sectionContentContainer,
    headingMotion: {
      ...row,
      position: "relative",
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: { xs: 1, md: 0 },
      mb: { xs: 3, md: 4 },
    },
    navigation: { gap: 1, flexShrink: 0 },
    navigationButton: {
      width: 36,
      height: 36,
      border: 1,
      borderColor: "divider",
      bgcolor: "background.paper",
      color: "text.primary",
      "&:hover": { bgcolor: "action.hover" },
    },
    heading: (theme) => ({
      ...theme.typography.testimonialHeading,
      color: "text.primary",
      textAlign: "left",
      maxWidth: 520,
    }),
    carouselViewport: { width: "100%", overflow: "hidden", touchAction: "pan-y" },
    grid: {
      display: "flex",
      gap: { xs: 2, md: 2.5 },
      width: "100%",
      mx: "auto",
    },
    cardMotion: {
      display: "flex",
      height: "100%",
      minWidth: 0,
      flex: {
        xs: "0 0 100%",
        sm: "0 0 calc((100% - 16px) / 2)",
        md: "0 0 calc((100% - 40px) / 3)",
      },
    },
    card: { ...cardSurface, display: "flex", width: "100%" },
    cardContent: {
      p: { xs: 2.5, md: 3 },
      "&:last-child": { pb: { xs: 2.5, md: 3 } },
      flexGrow: 1,
      ...column,
    },
    quote: {
      color: "text.primary",
      fontWeight: 600,
      lineHeight: 1.55,
      mb: 3,
    },
    profile: {
      alignItems: "center",
      gap: 1.5,
      mt: "auto",
    },
    avatar: {
      width: 40,
      height: 40,
      bgcolor: "background.soft",
      borderRadius: 2,
    },
    profileDetails: { minWidth: 0 },
    profileName: { color: "text.primary", fontWeight: 700 },
    profileRole: (theme) => ({
      color: "text.secondary",
      ...theme.typography.testimonialRole,
      mt: 0.3,
    }),
  },
};

export default styles.testimonialsStyles;
