const styles = {
  interviewShowcaseStyles: {
    section: (theme) => ({
      width: "100%",
      overflow: "hidden",
      backgroundColor: theme.palette.background.hero,
    }),
    layout: (theme) => ({
      display: "grid",
      gridTemplateColumns: theme.showcaseTokens.columns,
      alignItems: "stretch",
      width: "100%",
      minHeight: {
        xs: 0,
        sm: 440,
        lg: 560,
      },
    }),
    copyColumn: (theme) => ({
      display: "flex",
      alignItems: "center",
      minWidth: 0,
      px: {
        xs: theme.sectionTokens.horizontalContentGutter.xs,
        sm: theme.sectionTokens.horizontalContentGutter.sm,
        lg: theme.sectionTokens.horizontalContentGutter.lg,
      },
      py: {
        xs: theme.sectionTokens.paddingY.xs,
        md: theme.sectionTokens.paddingY.md,
      },
    }),
    content: (theme) => ({
      alignItems: "flex-start",
      width: "100%",
      maxWidth: theme.spacing(theme.showcaseTokens.contentMaxWidth / 8),
    }),
    heading: (theme) => ({
      color: "text.primary",
      fontSize: {
        xs: theme.typography.h2.fontSize,
        md: theme.typography.sectionTitle.fontSize,
        lg: theme.typography.heroTitle.fontSize,
      },
      lineHeight: theme.typography.heroTitle.lineHeight,
      letterSpacing: theme.typography.heroTitle.letterSpacing,
    }),
    description: (theme) => ({
      color: "text.secondary",
      mt: theme.showcaseTokens.descriptionMargin,
    }),
    benefits: (theme) => ({
      mt: theme.showcaseTokens.benefitsMargin,
      width: "100%",
      gap: theme.spacing(theme.showcaseTokens.benefitGap),
    }),
    benefit: (theme) => ({
      alignItems: "center",
      justifyContent: "flex-start",
      gap: theme.spacing(theme.showcaseTokens.benefitGap),
    }),
    benefitIcon: (theme) => ({
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      width: theme.spacing(3),
      height: theme.spacing(3),
      borderRadius: "50%",
      bgcolor: theme.palette.background.soft,
      color: theme.palette.text.primary,
      "& .MuiSvgIcon-root": {
        fontSize: theme.spacing(theme.showcaseTokens.benefitIconFontSize / 8),
      },
    }),
    cta: (theme) => ({
      mt: theme.showcaseTokens.buttonMargin,
      p: 0,
      color: "secondary.main",
      fontWeight: theme.typography.fontWeightBold,
      "&:hover": {
        backgroundColor: "transparent",
        color: "secondary.dark",
      },
    }),
    image: (theme) => ({
      display: "block",
      width: "100%",
      height: "100%",
      minHeight: 0,
      objectFit: "contain",
      objectPosition: "center",
      borderRadius: 0,
      boxShadow: "none",
      maskImage: theme.imageTokens.showcaseFade,
      WebkitMaskImage: theme.imageTokens.showcaseFade,
      [theme.breakpoints.down("lg")]: {
        height: "auto",
        objectFit: "contain",
      },
    }),
  },
};

export default styles.interviewShowcaseStyles;
