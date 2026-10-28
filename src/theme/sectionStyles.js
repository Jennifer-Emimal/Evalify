const column = { display: "flex", flexDirection: "column" };
const row = { display: "flex", flexDirection: "row" };
const visible = { opacity: 1, x: 0, y: 0 };
const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -150px 0px",
};
const fadeUp = (y) => ({ opacity: 0, y });
const slideLeft = (x) => ({ opacity: 0, x: -x });
const slideRight = (x) => ({ opacity: 0, x });
const grid = (columns, gap = { xs: 2, md: 2.5 }, extra = {}) => ({ display: "grid", gridTemplateColumns: columns, gap, width: "100%", ...extra });
const sectionPadding = (theme, extra = {}) => ({ background: theme.gradients.hero, py: { xs: theme.sectionTokens.paddingY.xs, md: theme.sectionTokens.paddingY.md }, ...extra });
const sectionContentContainer = (theme) => ({
  width: "100%",
  boxSizing: "border-box",
  px: {
    xs: theme.sectionTokens.horizontalContentGutter.xs,
    sm: theme.sectionTokens.horizontalContentGutter.sm,
    lg: theme.sectionTokens.horizontalContentGutter.lg,
  },
});
const sectionTitle = {
  color: "text.primary",
  fontSize: { xs: "2.1rem", sm: "2.5rem", md: "2.75rem" },
  lineHeight: 1.18,
};
const cardSurface = (theme) => ({
  border: 1,
  borderColor: "divider",
  borderRadius: 3,
  height: "100%",
  boxShadow: theme.customShadows.card,
});
const motionTransition = (duration, easing, delay = 0) => ({ duration, delay, ease: easing });
const hoverColorTransition = (theme) => ({
  transition: theme.transitions.create("color", {
    duration: theme.motion.duration.fast,
    easing: theme.motion.easing.standard,
  }),
  "&:hover": { color: "primary.main" },
  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
});
const pricingToggle = {
  py: 0.8,
  borderRadius: "24px",
  fontSize: "0.9rem",
  whiteSpace: "nowrap",
};
const inactiveToggle = {
  ...pricingToggle,
  color: "text.secondary",
  bgcolor: "transparent",
  "&:hover": { bgcolor: "action.selected" },
};
const pricingCard = {
  position: "relative",
  border: "1px solid",
  borderRadius: "14px",
  minHeight: { md: 325 },
  height: "100%",
  boxShadow: (theme) => theme.customShadows.card,
};
const pricingContent = {
  p: 2.5,
  "&:last-child": { pb: 2.5 },
  flexGrow: 1,
  ...column,
};
const pricingButton = {
  mt: "auto",
  py: 1,
  borderRadius: "9px",
  fontSize: "0.9rem",
};
const sharedMotion = { visible, viewport };
const howItWorksStepColors = ["blue", "purple", "green", "orange"];

const sectionStyles = {
  featureSectionStyles: {
    section: () => ({
      width: "100%",
      backgroundColor: "background.paper",
      py: {
        xs: 3,
        md: 5,
      },
    }),
    container: sectionContentContainer,
    header: (theme) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      mb: {
        xs: theme.sectionTokens.headingMarginBottom.xs,
        md: theme.sectionTokens.headingMarginBottom.md,
      },
    }),
    title: {
      color: "text.primary",
      textAlign: "center",
    },
    subtitle: (theme) => ({
      color: "text.secondary",
      maxWidth: theme.spacing(75),
      mt: theme.spacing(1),
      textAlign: "center",
    }),
    grid: (theme) => ({
      position: "relative",
      display: "grid",
      width: "100%",
      minWidth: 0,
      mx: "auto",
      gridTemplateColumns: {
        xs: theme.featureTokens.columns.xs,
        sm: theme.featureTokens.columns.sm,
      },
      gap: {
        xs: theme.sectionTokens.gridGap.xs,
        md: theme.sectionTokens.gridGap.md,
      },
      [theme.breakpoints.up("md")]: {
        gridTemplateColumns: theme.featureTokens.columns.md,
        gridTemplateAreas: "none",
        gridAutoRows: theme.spacing(
          theme.featureTokens.cardMinHeight.md / 8
        ),
      },
      [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: theme.featureTokens.desktopColumns,
        gridTemplateAreas: "none",
        gap: theme.spacing(theme.sectionTokens.gridGap.md),
        gridTemplateRows: theme.featureTokens.desktopCardRows
          .map((height) => theme.spacing(height / 8))
          .join(" "),
      },
    }),
    cardMotion: (theme, index) => {
      const featureTokens = theme.featureTokens;

      return {
        height: "100%",
        minWidth: 0,
        minHeight: 0,
        [theme.breakpoints.up("lg")]: {
          gridArea: "auto",
          ...featureTokens.desktopCardPlacements[index],
        },
      };
    },
    card: (theme, background, index) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: theme.spacing(1),
      height: "100%",
      minHeight: 0,
      boxSizing: "border-box",
      px: {
        xs: theme.featureTokens.cardPadding.xs,
        md: theme.featureTokens.cardPadding.md,
      },
      py: theme.spacing(1.25),
      border: 0,
      borderRadius: theme.spacing(theme.shape.borderRadius / 8),
      backgroundColor: theme.palette.accentSurface[background],
      boxShadow: theme.customShadows.card,
      overflow: "hidden",
      [theme.breakpoints.up("lg")]: {
        width: theme.featureTokens.desktopCardWidths[index],
        justifySelf: theme.featureTokens.desktopCardAlignment[index],
        py: theme.spacing(theme.featureTokens.desktopCardPaddingY),
        ...(index === 6 && {
          transform: `translateX(${theme.featureTokens.atsCardHorizontalOffset})`,
        }),
      },
    }),
    copy: (theme, index) => ({
      position: "relative",
      zIndex: (theme) => theme.featureTokens.cardContentZIndex,
      display: "flex",
      flex: "1 1 54%",
      flexDirection: "column",
      alignSelf: "stretch",
      minWidth: 0,
      ...(index === 0 || index === 4 || index === 6
        ? {
            [theme.breakpoints.up("lg")]: {
              flex: `1 1 ${theme.featureTokens.desktopCompactCopyWidth}`,
            },
          }
        : {}),
    }),
    iconBadge: (theme, background, iconColor) => ({
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      width: theme.spacing(5),
      height: theme.spacing(5),
      borderRadius: theme.sectionTokens.iconRadius,
      bgcolor:
        theme.palette.accentSurface[
          iconColor === "red" ? background : iconColor
        ],
      color: iconColor === "red" ? "error.main" : theme.palette.accent[iconColor],
      "& .MuiSvgIcon-root": {
        fontSize: theme.spacing(2.5),
      },
    }),
    cardTitle: (theme) => ({
      ...theme.typography[theme.featureTokens.titleVariant],
      color: "text.primary",
      mt: theme.spacing(1),
      [theme.breakpoints.up("lg")]: {
        mt: theme.spacing(theme.featureTokens.desktopTitleMargin),
      },
    }),
    cardDescription: (theme) => ({
      ...theme.typography[theme.featureTokens.descriptionVariant],
      color: "text.secondary",
      mt: theme.spacing(0.4),
      lineHeight: 1.4,
      maxWidth: theme.spacing(theme.featureTokens.descriptionMaxWidth / 8),
      [theme.breakpoints.up("lg")]: {
        mt: theme.spacing(theme.featureTokens.desktopDescriptionMargin),
      },
    }),
    arrowButton: (theme) => ({
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      width: theme.spacing(4.5),
      height: theme.spacing(4.5),
      mt: "auto",
      borderRadius: "50%",
      backgroundColor: "background.paper",
      color: "text.primary",
      boxShadow: theme.customShadows.card,
      [theme.breakpoints.up("lg")]: {
        width: theme.spacing(theme.featureTokens.desktopArrowButtonSize),
        height: theme.spacing(theme.featureTokens.desktopArrowButtonSize),
      },
      "& .MuiSvgIcon-root": {
        fontSize: theme.spacing(2),
      },
    }),
    illustration: (theme, index) => {
      const width =
        index === 6
          ? theme.featureTokens.atsIllustrationWidth
          : theme.featureTokens.illustrationWidth;

      return {
        display: "block",
        flex: `0 1 ${width}`,
        width,
        minWidth: 0,
        alignSelf: "center",
        position: "relative",
        zIndex: (theme) => theme.featureTokens.cardContentZIndex,
        maxHeight: theme.spacing(
          theme.featureTokens.illustrationMaxHeight / 8
        ),
        objectFit: "contain",
        objectPosition: "right center",
        ...(index === 0 || index === 4 || index === 6
          ? {
              [theme.breakpoints.up("lg")]: {
                flex: `0 1 ${theme.featureTokens.desktopCompactIllustrationWidth}`,
                width: theme.featureTokens.desktopCompactIllustrationWidth,
              },
            }
          : {}),
      };
    },
    dashboard: (theme) => ({
      position: "relative",
      zIndex: theme.featureTokens.dashboardZIndex,
      gridColumn: "1 / -1",
      width: { xs: "100%", sm: "85%" },
      maxWidth: theme.spacing(theme.featureTokens.dashboardMaxWidth / 8),
      mx: "auto",
      [theme.breakpoints.up("lg")]: {
        position: "absolute",
        top: theme.featureTokens.dashboardTop,
        left: "50%",
        width: theme.featureTokens.dashboardWidth,
        maxWidth: "none",
        mx: 0,
        transform: "translate(-50%, -50%)",
      },
    }),
    dashboardImage: (theme) => ({
      display: "block",
      width: "100%",
      height: "auto",
      objectFit: "contain",
      maskImage: theme.featureTokens.dashboardMask,
      WebkitMaskImage: theme.featureTokens.dashboardMask,
    }),
  },

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
        lg: theme.sectionTokens.howItWorksTitleFontSize,
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
        lg: theme.sectionTokens.howItWorksTitleFontSize,
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

  pricingStyles: {
    section: (theme) => sectionPadding(theme, { overflow: "visible" }),
    container: (theme) => ({
      ...sectionContentContainer(theme),
      ...column,
      alignItems: "stretch",
      overflow: "visible",
    }),
    headerMotion: { width: "100%" },
    headerInitial: fadeUp,
    visible: { opacity: 1, y: 0 },
    viewport,
    header: {
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) auto" },
      alignItems: { xs: "start", md: "end" },
      gap: { xs: 1.5, md: 3 },
      mb: { xs: 1, md: 0 },
    },
    heading: {
      color: "text.primary",
      textAlign: "left",
      fontSize: { xs: "1.9rem", md: "2.35rem" },
      maxWidth: 800,
    },
    billingToggle: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      justifySelf: { xs: "start", md: "end" },
      gap: 0.5,
      mt: { xs: 1.5, md: 0 },
      p: 0.5,
      borderRadius: "30px",
      bgcolor: "action.hover",
      width: "fit-content",
      maxWidth: "100%",
    },
    monthlyButtonActive: {
      ...pricingToggle,
      px: 2.5,
      color: "primary.contrastText",
      bgcolor: "primary.main",
      "&:hover": { bgcolor: "primary.dark" },
    },
    monthlyButtonInactive: { ...inactiveToggle, px: 2.5 },
    yearlyButtonActive: {
      ...pricingToggle,
      px: 2,
      color: "text.primary",
      bgcolor: "background.paper",
      "&:hover": { bgcolor: "background.paper" },
    },
    yearlyButtonInactive: { ...inactiveToggle, px: 2 },
    savingsLabel: {
      color: "primary.main",
      fontWeight: 800,
      ml: 0.7,
    },

    grid: grid(
      {
        xs: "1fr",
        sm: "repeat(2, minmax(0, 1fr))",
        lg: "repeat(4, minmax(0, 1fr))",
      },
      undefined,
      {
        mt: { xs: 4, md: 3.5 },
        gridAutoRows: "1fr",
        alignItems: "stretch",
        overflow: "visible",
      }
    ),
    cardMotion: {
      height: "100%",
      overflow: "visible",
    },
    cardInitial: (distance, popular) => ({
      ...fadeUp(distance),
      scale: popular ? 0.96 : 1,
    }),
    card: { ...pricingCard, borderColor: "transparent",  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box", },
    popularCard: {
      height: "100%",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
      ...pricingCard,
      overflow: "visible",
      borderColor: "secondary.main",
    },
   popularBadge: {
  position: "absolute",
  top: 12,
  right: 18,
  left: "auto",
  zIndex: 2,
  transform: "none",
  bgcolor: "secondary.main",
  color: "primary.contrastText",
  height: 26,
  borderRadius: "20px",
  fontSize: "0.73rem",
  fontWeight: 700,
  whiteSpace: "nowrap",
},
    cardContent: pricingContent,
    popularCardContent: { ...pricingContent, pt: 3 },
    planName: { color: "text.primary", fontSize: "1.05rem" },
    planDescription: { color: "text.secondary", fontSize: "0.8rem", mt: 0.6 },
    price: { ...row, alignItems: "baseline", mt: 2.5, mb: 2 },
    priceAmount: { color: "text.primary", fontSize: { xs: "2.1rem", md: "2.4rem" } },
    pricePeriod: { color: "text.disabled", fontSize: "0.8rem" },
    features: { gap: 1.2, mb: 3 },
    featureRow: { ...row, alignItems: "center", gap: 1 },
    featureIcon: { color: "text.secondary", fontSize: 17, flexShrink: 0 },
    featureText: { color: "text.secondary", fontSize: "0.8rem", lineHeight: 1.4 },
    buttonSpacer: { flexGrow: 1 },
    standardButton: {
      ...pricingButton,
      color: "text.primary",
      bgcolor: "action.hover",
        mt: "auto",
  width: "100%",
      "&:hover": { bgcolor: "action.selected" },
    },
    popularButton: {
      ...pricingButton,
      color: "primary.contrastText",
      bgcolor: "primary.main",
      "&:hover": { bgcolor: "primary.dark" },
    },
  },

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
    headingInitial: fadeUp,
    ...sharedMotion,
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
    heading: {
      color: "text.primary",
      textAlign: "left",
      maxWidth: 520,
      fontSize: { xs: "2.1rem", md: "2.45rem" },
    },
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
    cardInitial: (index, distance) => ({
      opacity: 0,
      x: index === 0 ? -distance : index === 2 ? distance : 0,
      y: index === 1 ? distance : 0,
    }),
    card: { ...cardSurface, display: "flex", width: "100%" },
    cardContent: {
      p: { xs: 2.5, md: 3 },
      "&:last-child": { pb: { xs: 2.5, md: 3 } },
      flexGrow: 1,
      ...column,
    },
    quoteInitial: fadeUp,
    quote: {
      color: "text.primary",
      fontWeight: 600,
      lineHeight: 1.55,
      mb: 3,
    },
    profileInitial: slideLeft,
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
    profileRole: {
      color: "text.secondary",
      fontSize: "0.77rem",
      mt: 0.3,
    },
  },

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
    headingInitial: fadeUp,
    ...sharedMotion,
    heading: { ...sectionTitle, maxWidth: 480 },
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
    faqItemInitial: fadeUp,
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
  fontSize: { xs: "0.9rem", md: "1.05rem" },
  fontWeight: 600,
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
  "@media (prefers-reduced-motion: reduce)": {
    "& .MuiAccordionSummary-expandIconWrapper": { transition: "none" },
    transition: "none",
  },
}),
    accordionDetails: { px: 0, pt: 0, pb: 2.5 },
    answer: {
      color: "text.secondary",
      pb: 2.5,
      pr: { xs: 1, md: 4 },
      lineHeight: 1.8,
    },
  },

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
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        boxShadow:
          "0 0 0 35px rgba(255, 255, 255, 0.035), 0 0 0 70px rgba(255, 255, 255, 0.025)",
      },
    }),
    label: { color: "rgba(255, 255, 255, 0.62)", mb: 1.2 },
    heading: {
      color: "common.white",
      fontSize: { xs: "2rem", md: "2.7rem" },
      lineHeight: 1.1,
    },
    description: {
      mt: 1.2,
      maxWidth: 560,
      color: "rgba(255, 255, 255, 0.72)",
    },
    fadeInitial: fadeUp,
    visible,
    transition: motionTransition,
  },

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
    brandDescription: {
      color: "text.secondary",
      fontSize: "0.8rem",
      maxWidth: 200,
    },
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
    socialIcon: { fontSize: 15 },
    navigationColumn: { height: "100%" },
    columnHeading: {
      color: "text.primary",
      fontSize: "0.85rem",
      mb: 1.5,
    },
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
      "@media (prefers-reduced-motion: reduce)": {
        transition: "none",
      },
    }),
    fadeInitial: fadeUp,
    visible,
    slideInitial: (index, distance) => ({
      ...((index === 0 && slideLeft(distance)) ||
        (index === 2 && slideRight(distance)) ||
        { opacity: 0, y: index === 1 ? distance : 0 }),
    }),
    viewport: { ...viewport, margin: "0px" },
    transition: motionTransition,
  },
};

export default sectionStyles;
