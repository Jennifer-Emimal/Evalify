
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

const components = {
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: theme.typography.fontFamily,
      }),
    },
    variants: [
      {
        props: { variant: "sectionLabel" },
        style: ({ theme }) => ({
          color: theme.palette.secondary.dark,
        }),
      },
    ],
  },

  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: theme.typography.fontFamily,
      }),
    },
  },

  MuiContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.up("xl")]: {
          paddingLeft: theme.spacing(6),
          paddingRight: theme.spacing(6),
        },
      }),
      maxWidthLg: {
        ["@media (min-width:1200px)"]: {
          maxWidth: "1400px",
        },
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.spacing(6),
        padding: theme.spacing(1.125, 2),
        minHeight: theme.spacing(4.75),
        fontFamily: theme.typography.fontFamily,
        ...theme.typography.button,
        whiteSpace: "nowrap",
      }),
    },
    variants: [
      {
        props: { variant: "nav" },
        style: ({ theme }) => ({
          color: theme.palette.text.primary,
          fontWeight: 600,
          minWidth: "auto",
          minHeight: "auto",
          padding: theme.spacing(0.75, 0.5),
          backgroundColor: "transparent",
          textShadow: "none",
          boxShadow: "none",
          "&:hover": {
            color: theme.palette.accent.navigation,
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }),
      },
      {
        props: { variant: "signIn" },
        style: ({ theme }) => ({
          color: theme.palette.text.primary,
          minWidth: "auto",
          textShadow: "none",
          boxShadow: "none",
          "&:hover": {
            color: theme.palette.text.primary,
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }),
      },
      {
        props: { variant: "mobileNav" },
        style: ({ theme }) => ({
          justifyContent: "space-between",
          color: theme.palette.text.primary,
          width: "100%",
        }),
      },
      {
        props: { variant: "mobileSignIn" },
        style: ({ theme }) => ({
          justifyContent: "flex-start",
          color: theme.palette.text.primary,
          width: "100%",
        }),
      },
      {
        props: { variant: "contained" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          boxShadow: theme.customShadows.button,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
          "&:disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
            color: theme.palette.action.disabled,
          },
        }),
      },
      {
        props: { variant: "outlined" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderColor: "transparent",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: theme.palette.background.paper,
            borderColor: "transparent",
            boxShadow: "none",
          },
        }),
      },
    ],
  },

  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        borderRadius: 0,
      }),
    },
    variants: [
      {
        props: { variant: "brandLogoIcon" },
        style: ({ theme }) => ({
          ...iconBox(theme),
          width: theme.spacing(3.5),
          height: theme.spacing(3.5),
          borderRadius: theme.spacing(0.75),
          backgroundColor: theme.palette.secondary.main,
          boxShadow: "none",
          color: theme.palette.primary.contrastText,
          "& .MuiSvgIcon-root": {
            fontSize: theme.spacing(2.25),
          },
        }),
      },
      {
        props: { variant: "heroBadge" },
        style: ({ theme }) => heroBadge(theme),
      },
      {
        props: { variant: "heroBadgeIcon" },
        style: ({ theme }) => heroBadgeIcon(theme),
      },

      // Navbar header
      {
        props: { variant: "navbarHeader" },
        style: ({ theme }) => ({
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: theme.zIndex.appBar,
          width: "100%",
          borderRadius: 0,
          backgroundColor: "transparent",
          boxShadow: "none",
          border: 0,
          overflow: "visible",
          "& > .MuiContainer-root": {
            width: "100%",
            maxWidth: "none",
            paddingLeft: 0,
            paddingRight: 0,
            boxSizing: "border-box",
          },
        }),
      },
      {
        props: { variant: "navbarInner" },
        style: ({ theme }) => ({
          display: "grid",
          gridTemplateColumns: "auto minmax(0, 1fr) auto",
          alignItems: "center",
          gap: theme.spacing(2),
          width: "100%",
          boxSizing: "border-box",
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
          minHeight: theme.spacing(7),
          ...transparentLayout,
          [theme.breakpoints.up("lg")]: {
            paddingLeft: theme.spacing(9),
            paddingRight: theme.spacing(9),
          },
          [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "1fr auto",
          },
        }),
      },

      // Four navigation links with consistent spacing
      {
        props: { variant: "navbarDesktopNavigation" },
        style: ({ theme }) => ({
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          gap: theme.spacing(3),
          minWidth: 0,
          boxSizing: "border-box",
          paddingLeft: theme.spacing(3),
          ...transparentLayout,
          [theme.breakpoints.up("md")]: {
            display: "flex",
          },
          [theme.breakpoints.up("lg")]: {
            gap: theme.spacing(3.5),
            paddingLeft: theme.spacing(4),
          },
        }),
      },

      // Retained for compatibility if another component uses this variant
      {
        props: { variant: "navbarNavGroup" },
        style: ({ theme }) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: theme.spacing(2),
          minWidth: 0,
          ...transparentLayout,
          [theme.breakpoints.up("lg")]: {
            gap: theme.spacing(2.5),
          },
        }),
      },
      {
        props: { variant: "navbarDesktopActions" },
        style: ({ theme }) => ({
          display: "none",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: theme.spacing(1.5),
          flexShrink: 0,
          ...transparentLayout,
          [theme.breakpoints.up("md")]: {
            display: "flex",
          },
        }),
      },
      {
        props: { variant: "navbarMobileNavigation" },
        style: ({ theme }) => ({
          position: "absolute",
          top: "100%",
          left: theme.spacing(2),
          right: theme.spacing(2),
          zIndex: theme.zIndex.appBar,
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(1),
          padding: theme.spacing(1.5),
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: theme.spacing(1.5),
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          boxShadow: theme.customShadows.card,
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }),
      },

      // Hero section
      {
        props: { variant: "heroSection" },
        style: () => ({
          width: "100%",
          margin: 0,
          padding: 0,
          borderRadius: 0,
          backgroundColor: "#F7F6F3",
          backgroundImage: "none",
          boxShadow: "none",
          overflow: "hidden",
        }),
      },
      {
        props: { variant: "heroGrid" },
        style: ({ theme }) =>
          centeredGrid(theme, {
            gridTemplateColumns: "1fr",
            minHeight: 0,
            alignItems: "stretch",
            [theme.breakpoints.up("sm")]: {
              gridTemplateColumns: "0.94fr 1.06fr",
              minHeight: 440,
            },
            [theme.breakpoints.up("lg")]: {
              minHeight: 560,
            },
          }),
      },
      {
        props: { variant: "heroLeftContent" },
        style: ({ theme }) => ({
          position: "relative",
          zIndex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: theme.spacing(7, 3),
          [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(7, 4, 7, 5),
          },
          [theme.breakpoints.up("lg")]: {
            paddingLeft: theme.spacing(9),
            paddingRight: theme.spacing(5),
          },
          ...transparentLayout,
          backgroundColor: "#F7F6F3",
        }),
      },
      {
        props: { variant: "heroStats" },
        style: ({ theme }) => ({
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          columnGap: theme.spacing(2),
          width: "100%",
          maxWidth: theme.spacing(55),
          marginTop: theme.spacing(3.5),
          ...transparentLayout,
          [theme.breakpoints.up("sm")]: {
            columnGap: theme.spacing(3),
          },
          [theme.breakpoints.up("md")]: {
            marginTop: theme.spacing(4),
          },
        }),
      },
      {
        props: { variant: "heroStatItem" },
        style: () => ({
          minWidth: 0,
          ...transparentLayout,
        }),
      },
      {
        props: { variant: "heroDescription" },
        style: ({ theme }) => ({
          maxWidth: theme.spacing(45),
          marginTop: theme.spacing(1.75),
          ...transparentLayout,
          [theme.breakpoints.up("lg")]: {
            maxWidth: theme.spacing(62.5),
          },
        }),
      },
      {
        props: { variant: "heroIllustration" },
        style: ({ theme }) => ({
          display: "flex",
          alignItems: "stretch",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          minWidth: 0,
          minHeight: 280,
          borderRadius: 0,
          overflow: "hidden",
          ...transparentLayout,
          [theme.breakpoints.up("sm")]: {
            height: "100%",
            minHeight: 440,
          },
          [theme.breakpoints.up("lg")]: {
            minHeight: 560,
          },
        }),
      },
      {
        props: { variant: "heroDashboardImage" },
        style: ({ theme }) => ({
          display: "block",
          width: "100%",
          height: "100%",
          minHeight: 280,
          maxWidth: "none",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: 0,
          ...transparentLayout,
          [theme.breakpoints.up("sm")]: {
            minHeight: 440,
          },
          [theme.breakpoints.up("lg")]: {
            minHeight: 560,
          },
        }),
      },
      {
        props: { variant: "heroStatLabelWrapper" },
        style: ({ theme }) => ({
          marginTop: theme.spacing(0.4),
          ...transparentLayout,
        }),
      },

      // Trusted companies section
     {
  props: { variant: "trustedCompaniesSection" },
  style: ({ theme }) =>
    sectionSurface(theme, {
      background: theme.palette.background.paper,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      "& > .MuiContainer-root": {
        width: "100%",
        maxWidth: "none",
        paddingLeft: 0,
        paddingRight: 0,
        boxSizing: "border-box",
      },
    }),
},
      {
        props: { variant: "trustedCompaniesInner" },
        style: ({ theme }) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: theme.spacing(3),
          width: "100%",
          boxSizing: "border-box",
          paddingLeft: theme.spacing(
            theme.sectionTokens.horizontalContentGutter.xs
          ),
          paddingRight: theme.spacing(
            theme.sectionTokens.horizontalContentGutter.xs
          ),
          ...transparentLayout,

          [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(
              theme.sectionTokens.horizontalContentGutter.sm
            ),
            paddingRight: theme.spacing(
              theme.sectionTokens.horizontalContentGutter.sm
            ),
          },
          [theme.breakpoints.up("lg")]: {
            paddingLeft: theme.spacing(
              theme.sectionTokens.horizontalContentGutter.lg
            ),
            paddingRight: theme.spacing(
              theme.sectionTokens.horizontalContentGutter.lg
            ),
          },
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "flex-start",
            gap: theme.spacing(1.5),
          },
        }),
      },
      {
        props: { variant: "trustedCompaniesGrid" },
        style: ({ theme }) =>
          centeredGrid(theme, {
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            justifyItems: "center",
            flex: 1,
            columnGap: theme.spacing(2),
            rowGap: theme.spacing(1.5),
            [theme.breakpoints.up("md")]: {
              gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
              columnGap: theme.spacing(2.5),
            },
            [theme.breakpoints.down("sm")]: {
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            },
          }),
      },
      {
        props: { variant: "trustedCompanyLogo" },
        style: ({ theme }) => ({
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(0.7),
          color: theme.palette.text.secondary,
          opacity: 0.8,
          whiteSpace: "nowrap",
          ...transparentLayout,
        }),
      },
    ],
  },

  MuiSvgIcon: {
    variants: [
      {
        props: { variant: "heroBadgeCheck" },
        style: {
          fontSize: 9,
        },
      },
      {
        props: { variant: "trustedCompanyIcon" },
        style: ({ theme }) => ({
          fontSize: theme.spacing(3.125),
          flexShrink: 0,
        }),
      },
    ],
  },

  MuiCard: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius + 2,
      }),
    },
  },

  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
      }),
    },
    variants: [
      {
        props: { variant: "navbarMenuToggle" },
        style: ({ theme }) => ({
          display: "flex",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }),
      },
    ],
  },
};

export default components;
