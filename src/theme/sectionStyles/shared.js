const column = { display: "flex", flexDirection: "column" };
const row = { display: "flex", flexDirection: "row" };
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
const cardSurface = (theme) => ({
  border: 1,
  borderColor: "divider",
  borderRadius: 3,
  height: "100%",
  boxShadow: theme.customShadows.card,
});
const hoverColorTransition = (theme) => ({
  transition: theme.transitions.create("color", {
    duration: theme.motion.duration.fast,
    easing: theme.motion.easing.standard,
  }),
  "&:hover": { color: "primary.main" },
});
const pricingToggle = (theme) => ({
  ...theme.typography.pricingControl,
  py: 0.8,
  borderRadius: "24px",
  whiteSpace: "nowrap",
});
const inactiveToggle = (theme) => ({
  ...pricingToggle(theme),
  color: "text.secondary",
  bgcolor: "transparent",
  "&:hover": { bgcolor: "action.selected" },
});
const pricingCard = {
  position: "relative",
  border: "1px solid",
  borderRadius: "14px",
  minHeight: { md: 325 },
  height: "100%",
  boxShadow: (theme) => theme.customShadows.card,
};
const pricingCardLayout = {
  ...pricingCard,
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
};
const pricingContent = {
  p: 2.5,
  "&:last-child": { pb: 2.5 },
  flexGrow: 1,
  ...column,
};
const pricingButton = (theme) => ({
  ...theme.typography.pricingControl,
  mt: "auto",
  py: 1,
  borderRadius: "9px",
});
const howItWorksStepColors = ["blue", "purple", "green", "orange"];

export { column, row, grid, sectionPadding, sectionContentContainer, cardSurface, hoverColorTransition, pricingToggle, inactiveToggle, pricingCardLayout, pricingContent, pricingButton, howItWorksStepColors };
