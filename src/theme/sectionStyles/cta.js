import { sectionContentContainer } from "./shared";

const styles = {
  ctaStyles: {
    section: { backgroundColor: "background.paper", py: { xs: 3, md: 4 } },
    container: sectionContentContainer,
    banner: (theme) => ({
      position: "relative",
      isolation: "isolate",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      overflow: "hidden",
      borderRadius: { xs: 2, md: 3 },
      px: { xs: 2.5, md: 5 },
      py: { xs: 5, md: 6 },
      color: "common.white",
      background: theme.gradients.ctaBanner,
      "&::before": {
        content: '""',
        position: "absolute",
        zIndex: -1,
        width: { xs: 180, md: 260 },
        height: { xs: 180, md: 260 },
        right: { xs: -100, md: 40 },
        bottom: { xs: -120, md: -190 },
        border: `1px solid ${theme.palette.cta.bannerBorder}`,
        borderRadius: "50%",
        boxShadow: `0 0 0 35px ${theme.palette.cta.ringInner}, 0 0 0 70px ${theme.palette.cta.ringOuter}`,
      },
    }),
    label: (theme) => ({ color: theme.palette.cta.bannerLabel, mb: 1.2 }),
    heading: (theme) => ({
      ...theme.typography.ctaHeading,
      color: "common.white",
    }),
    description: (theme) => ({
      mt: 1.2,
      maxWidth: 560,
      color: theme.palette.cta.bannerText,
    }),
  },
};

export default styles.ctaStyles;
