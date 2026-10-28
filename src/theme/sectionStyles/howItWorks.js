import { howItWorksStepColors } from "./shared";

const styles = {
  howItWorksStyles: {
    section: (theme) => ({
      width: "100%",
      backgroundColor: theme.palette.background.hero,
      py: {
        xs: theme.sectionTokens.paddingY.xs / 2 + 1,
        md: theme.sectionTokens.paddingY.md / 2 + 1,
      },
    }),
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    labelSpacing: { mb: 1 },
    container: (theme) => ({
      width: "100%",
      boxSizing: "border-box",
      px: {
        xs: theme.sectionTokens.horizontalContentGutter.xs,
        sm: theme.sectionTokens.horizontalContentGutter.sm,
        lg: theme.sectionTokens.horizontalContentGutter.lg,
      },
    }),
    title: (theme) => ({
      ...theme.typography.h1,
      fontSize: {
        xs: theme.typography.h3.fontSize,
        sm: theme.typography.h2.fontSize,
        md: theme.typography.h1.fontSize,
        lg: theme.typography.howItWorksTitle.fontSize,
      },
      lineHeight: 1.05,
      letterSpacing: theme.typography.h1.letterSpacing,
      color: "text.primary",
      textAlign: "center",
    }),
    subtitle: (theme) => ({
      ...theme.typography.h1,
      fontSize: {
        xs: theme.typography.h3.fontSize,
        sm: theme.typography.h2.fontSize,
        md: theme.typography.h1.fontSize,
        lg: theme.typography.howItWorksTitle.fontSize,
      },
      fontWeight: 400,
      lineHeight: 1.05,
      letterSpacing: theme.typography.h1.letterSpacing,
      color: "text.primary",
      textAlign: "center",
    }),
    subtitleAccent: { color: "text.secondary" },
    description: (theme) => ({
      ...theme.typography.body1,
      color: "text.secondary",
      mt: theme.spacing(1.25),
      textAlign: "center",
    }),
    timeline: (theme) => ({
      position: "relative",
      width: "100%",
      mt: theme.spacing(theme.sectionTokens.gridGap.md),
    }),
    connector: (theme) => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: theme.spacing(8),
      overflow: "visible",
      color: theme.palette.secondary.light,
      opacity: 0.34,
      pointerEvents: "none",
      display: "none",
      [theme.breakpoints.up("lg")]: {
        display: "block",
      },
    }),
    steps: (theme) => ({
      display: "grid",
      gridTemplateColumns: {
        xs: "minmax(0, 1fr)",
        sm: "repeat(2, minmax(0, 1fr))",
        lg: "repeat(4, minmax(0, 1fr))",
      },
      gap: {
        xs: theme.sectionTokens.gridGap.xs,
        md: theme.sectionTokens.gridGap.xs,
      },
    }),
    step: {
      position: "relative",
      minWidth: 0,
    },
    stepContent: (theme) => ({
      position: "relative",
      alignItems: "flex-start",
      height: "100%",
      pt: theme.spacing(10),
    }),
    stepNumber: (theme, index) => {
      const color = howItWorksStepColors[index % howItWorksStepColors.length];

      return {
        position: "absolute",
        top: theme.spacing([0, 0.5, 0, -0.5][index]),
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1,
        display: "grid",
        placeItems: "center",
        width: theme.spacing(theme.sectionTokens.iconSize),
        height: theme.spacing(theme.sectionTokens.iconSize),
        borderRadius: "50%",
        bgcolor: theme.palette.accentSurface[color],
        color: theme.palette.accent[color],
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: 1,
      };
    },
    stepIcon: (theme, index) => {
      const color = howItWorksStepColors[index % howItWorksStepColors.length];

      return {
        display: "grid",
        placeItems: "center",
        width: theme.spacing(theme.sectionTokens.iconSize + 2.5),
        height: theme.spacing(theme.sectionTokens.iconSize + 2.5),
        borderRadius: theme.sectionTokens.iconRadius,
        bgcolor: theme.palette.accentSurface[color],
        color: theme.palette.accent[color],
        "& .MuiSvgIcon-root": {
          fontSize: theme.spacing(theme.sectionTokens.iconFontSize),
        },
      };
    },
    stepTitle: (theme) => ({
      ...theme.typography.stepTitle,
      color: "text.primary",
      mt: theme.spacing(1.5),
    }),
    stepDescription: (theme) => ({
      ...theme.typography.stepDescription,
      fontSize: theme.typography.body1.fontSize,
      lineHeight: 1.4,
      maxWidth: theme.spacing(34),
      color: "text.secondary",
      mt: theme.spacing(0.5),
    }),
  },
};

export default styles.howItWorksStyles;
