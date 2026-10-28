import {
  column,
  row,
  grid,
  sectionPadding,
  sectionContentContainer,
  pricingToggle,
  inactiveToggle,
  pricingCardLayout,
  pricingContent,
  pricingButton,
} from "./shared";

const styles = {
  pricingStyles: {
    section: (theme) => sectionPadding(theme, { overflow: "visible" }),
    container: (theme) => ({
      ...sectionContentContainer(theme),
      ...column,
      alignItems: "stretch",
      overflow: "visible",
    }),
    headerMotion: { width: "100%" },
    header: {
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) auto" },
      alignItems: { xs: "start", md: "end" },
      gap: { xs: 1.5, md: 3 },
      mb: { xs: 1, md: 0 },
    },
    heading: (theme) => ({
      ...theme.typography.pricingHeading,
      color: "text.primary",
      textAlign: "left",
      maxWidth: 800,
    }),
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
    monthlyButtonActive: (theme) => ({
      ...pricingToggle(theme),
      px: 2.5,
      color: "primary.contrastText",
      bgcolor: "primary.main",
      "&:hover": { bgcolor: "primary.dark" },
    }),
    monthlyButtonInactive: (theme) => ({
      ...inactiveToggle(theme),
      px: 2.5,
    }),
    yearlyButtonActive: (theme) => ({
      ...pricingToggle(theme),
      px: 2,
      color: "text.primary",
      bgcolor: "background.paper",
      "&:hover": { bgcolor: "background.paper" },
    }),
    yearlyButtonInactive: (theme) => ({
      ...inactiveToggle(theme),
      px: 2,
    }),
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
    card: {
      ...pricingCardLayout,
      borderColor: "transparent",
    },
    popularCard: {
      ...pricingCardLayout,
      overflow: "visible",
      borderColor: "secondary.main",
    },
    popularBadge: (theme) => ({
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
      ...theme.typography.pricingBadge,
      whiteSpace: "nowrap",
    }),
    cardContent: pricingContent,
    popularCardContent: { ...pricingContent, pt: 3 },
    planName: { color: "text.primary" },
    planDescription: (theme) => ({
      color: "text.secondary",
      ...theme.typography.pricingPlanDescription,
      mt: 0.6,
    }),
    price: { ...row, alignItems: "baseline", mt: 2.5, mb: 2 },
    priceAmount: (theme) => ({
      color: "text.primary",
      ...theme.typography.pricingPrice,
    }),
    pricePeriod: (theme) => ({
      color: "text.disabled",
      ...theme.typography.pricingPlanDescription,
    }),
    features: { gap: 1.2, mb: 3 },
    featureRow: { ...row, alignItems: "center", gap: 1 },
    featureIcon: (theme) => ({
      color: "text.secondary",
      fontSize: theme.spacing(17 / 8),
      flexShrink: 0,
    }),
    featureText: (theme) => ({
      color: "text.secondary",
      ...theme.typography.pricingFeature,
    }),
    buttonSpacer: { flexGrow: 1 },
    standardButton: (theme) => ({
      ...pricingButton(theme),
      color: "text.primary",
      bgcolor: "action.hover",
      width: "100%",
      "&:hover": { bgcolor: "action.selected" },
    }),
    popularButton: (theme) => ({
      ...pricingButton(theme),
      color: "primary.contrastText",
      bgcolor: "primary.main",
      "&:hover": { bgcolor: "primary.dark" },
    }),
  },
};

export default styles.pricingStyles;
