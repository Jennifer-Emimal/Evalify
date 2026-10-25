
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
const pillBadge = (theme, marginBottom) => ({
  display: "flex",
  alignItems: "center",
  gap: 0.8,
  width: "fit-content",
  px: 1.2,
  py: 0.6,
  mb: marginBottom,
  border: 1,
  borderColor: "divider",
  borderRadius: theme.spacing(2.5),
  bgcolor: "background.paper",
  color: "text.secondary",
});
const centeredHeading = {
  color: "text.primary",
  width: "100%",
  textAlign: "center",
};
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

const sectionStyles = {
  pricingStyles: {
    section: (theme) => sectionPadding(theme, { overflow: "visible" }),
    container: { ...column, alignItems: "center", overflow: "visible" },
    headerMotion: { width: "100%" },
    headerInitial: fadeUp,
    visible: { opacity: 1, y: 0 },
    viewport,
    header: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "100%",
      mb: { xs: 1, md: 0 },
    },
    heading: {
      ...centeredHeading,
      fontSize: { xs: "1.9rem", md: "2.65rem" },
    },
    billingToggle: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      gap: 0.5,
      mt: 2,
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
      color: "success.main",
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
    card: { ...pricingCard, borderColor: "divider" },
    popularCard: {
      ...pricingCard,
      overflow: "visible",
      borderColor: "secondary.main",
    },
    popularBadge: {
      position: "absolute",
      top: -13,
      left: "50%",
      zIndex: 2,
      transform: "translateX(-50%)",
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
    featureIcon: { color: "success.main", fontSize: 17, flexShrink: 0 },
    featureText: { color: "text.secondary", fontSize: "0.8rem", lineHeight: 1.4 },
    buttonSpacer: { flexGrow: 1 },
    standardButton: {
      ...pricingButton,
      color: "text.primary",
      bgcolor: "action.hover",
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
    headingMotion: {
      ...column,
      width: "100%",
      alignItems: "center",
      textAlign: "center",
      mb: { xs: 3, md: 4 },
    },
    headingInitial: fadeUp,
    ...sharedMotion,
    heading: {
      ...centeredHeading,
      fontSize: { xs: "2.1rem", md: "2.7rem" },
    },
    grid: grid(
      { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
      undefined,
      { mx: "auto" }
    ),
    cardMotion: { height: "100%" },
    cardInitial: (index, distance) => ({
      opacity: 0,
      x: index === 0 ? -distance : index === 2 ? distance : 0,
      y: index === 1 ? distance : 0,
    }),
    card: cardSurface,
    cardContent: {
      p: { xs: 2.5, md: 3 },
      "&:last-child": { pb: { xs: 2.5, md: 3 } },
      ...column,
    },
    stars: { mb: 2 },
    star: { color: "secondary.main", fontSize: 15 },
    quoteInitial: fadeUp,
    quote: {
      color: "text.primary",
      fontWeight: 600,
      lineHeight: 1.55,
      mb: 3,
    },
    divider: { borderColor: "divider", mb: 2 },
    profileInitial: slideLeft,
profile: {
  alignItems: "center",
  gap: 1.5,
},    avatar: {
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
    supportCard: (theme) => ({
      position: "relative",
      zIndex: 1,
      display: "flex",
      alignItems: "flex-start",
      gap: 2,
      mt: 6,
      p: { xs: 1.5, md: 2 },
      borderRadius: 2,
      background: theme.gradients.cta,
      border: 1,
      borderColor: "divider",
    }),
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
      py: { xs: 2, md: 2.25 },
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
    section: (theme) => sectionPadding(theme, { overflow: "hidden" }),
    layout: grid(
      {
        xs: "1fr",
        md: "0.95fr 1.05fr",
        lg: "0.9fr 1.1fr",
      },
      { xs: 4, md: 2 },
      { alignItems: "center" }
    ),
    content: { position: "relative", zIndex: 1 },
    trustBadge: (theme) => pillBadge(theme, 2.5),
    trustDot: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      bgcolor: "secondary.main",
      flexShrink: 0,
      alignSelf: "center",
    },
    heading: { ...sectionTitle, maxWidth: 480 },
    description: {
      mt: 2,
      maxWidth: 550,
      color: "text.secondary",
      fontSize: { xs: "1rem", md: "1.1rem" },
      lineHeight: 1.7,
    },
    benefits: {
      mt: { xs: 3.5, md: 5 },
      ...row,
      flexWrap: "wrap",
      alignItems: "center",
      rowGap: 1.5,
      columnGap: { xs: 2, md: 0 },
    },
    benefitItem: (index, total) => ({
      ...row,
      alignItems: "center",
      gap: 1,
      color: "text.secondary",
      pr: { xs: 0, md: 2 },
      mr: { xs: 0, md: 2 },
      borderRight: {
        xs: "none",
        md: index !== total - 1 ? 1 : "none",
      },
      borderColor: "divider",
    }),
    benefitIcon: { display: "flex", color: "text.muted", flexShrink: 0 },
    benefitLabel: { fontSize: "0.85rem", whiteSpace: "nowrap" },
    dashboard: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 0,
      isolation: "isolate",
    },
    dashboardImage: { maxWidth: { xs: 800, lg: 900 } },
    fadeInitial: fadeUp,
    slideInitial: slideRight,
    visible,
    trustTransition: (duration, easing) => ({ duration, ease: easing }),
    headingTransition: (theme, stagger) => ({
      duration: theme.motion.duration.mask / 1000,
      ease: theme.motion.easing.mask,
      delay: stagger,
    }),
    descriptionTransition: (duration, easing, stagger) =>
      motionTransition(duration, easing, stagger * 2),
    buttonTransition: (duration, easing, stagger) =>
      motionTransition(duration, easing, stagger * 3),
    dashboardTransition: (duration, easing, stagger) =>
      motionTransition(duration, easing, stagger * 2),
    benefitInitial: fadeUp,
    benefitTransition: (duration, easing, stagger, index) =>
      motionTransition(duration, easing, stagger * (4 + index * 0.5)),
  },

  footerStyles: {
    section: sectionPadding,
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
    viewport,
    transition: motionTransition,
  },
};

export default sectionStyles;
