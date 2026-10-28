
const transparentLayout = {
  backgroundColor: "transparent",
  boxShadow: "none",
};

const sectionSurface = (theme, extra = {}) => ({
  width: "100%",
  borderRadius: 0,
  background: theme.gradients.hero,
  boxShadow: "none",
  paddingTop: theme.spacing(theme.sectionTokens.paddingY.xs),
  paddingBottom: theme.spacing(theme.sectionTokens.paddingY.xs),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(theme.sectionTokens.paddingY.md),
    paddingBottom: theme.spacing(theme.sectionTokens.paddingY.md),
  },
  ...extra,
});

const centeredGrid = (theme, extra = {}) => ({
  display: "grid",
  alignItems: "center",
  width: "100%",
  ...transparentLayout,
  ...extra,
});

const iconBox = (theme) => ({
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
  width: theme.spacing(3.375),
  height: theme.spacing(3.375),
  borderRadius: theme.spacing(0.875),
});

const heroBadge = (theme) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.8),
  width: "fit-content",
  padding: theme.spacing(0.6, 1.2),
  marginBottom: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(2.5),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
});

const heroBadgeIcon = (theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 12,
  height: 12,
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  flexShrink: 0,
});

export { transparentLayout, sectionSurface, centeredGrid, iconBox, heroBadge, heroBadgeIcon };
