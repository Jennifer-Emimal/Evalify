
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
        [ "@media (min-width:1200px)" ]: {
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
          "&:hover": {
            color: theme.palette.accent.navigation,
            backgroundColor: "transparent",
          },
        }),
      },
      {
        props: { variant: "signIn" },
        style: ({ theme }) => ({
          color: theme.palette.text.secondary,
          minWidth: "auto",
          "&:hover": {
            color: theme.palette.text.primary,
            backgroundColor: "transparent",
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
          color: theme.palette.text.secondary,
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
        borderRadius: theme.shape.borderRadius + 2,
      }),
    },
    variants: [
      {
        props: { variant: "brandLogoIcon" },
        style: ({ theme }) => ({
          ...iconBox(theme),
          background: theme.gradients.PurpleBlue,
          boxShadow: theme.customShadows.button,
          color: theme.palette.primary.contrastText,
          "& .MuiSvgIcon-root": {
            fontSize: theme.spacing(2.125),
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

      // Navbar
      {
        props: { variant: "navbarHeader" },
        style: ({ theme }) => ({
          width: "100%",
          borderRadius: 0,
          background: theme.gradients.hero,
          boxShadow: "none",
        }),
      },
      {
        props: { variant: "navbarInner" },
        style: ({ theme }) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: theme.spacing(3),
          minHeight: theme.spacing(8),
          ...transparentLayout,
          [theme.breakpoints.up("md")]: {
            minHeight: theme.spacing(9.5),
          },
        }),
      },
      {
        props: { variant: "navbarDesktopNavigation" },
        style: ({ theme }) => ({
          display: "none",
          alignItems: "center",
          gap: theme.spacing(2),
          ...transparentLayout,
          [theme.breakpoints.up("md")]: {
            display: "flex",
          },
          [theme.breakpoints.up("lg")]: {
            gap: theme.spacing(3),
          },
        }),
      },
      {
        props: { variant: "navbarDesktopActions" },
        style: ({ theme }) => ({
          display: "none",
          alignItems: "center",
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
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(1),
          paddingBottom: theme.spacing(2),
          ...transparentLayout,
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }),
      },

      // Hero
      {
        props: { variant: "heroSection" },
        style: ({ theme }) => ({
          ...sectionSurface(theme),
          overflow: "hidden",
        }),
      },
      {
        props: { variant: "heroGrid" },
        style: ({ theme }) =>
          centeredGrid(theme, {
            gridTemplateColumns: "1fr",
            gap: theme.spacing(3),
            [theme.breakpoints.up("md")]: {
              gridTemplateColumns: "1fr 1.2fr",
              gap: theme.spacing(2),
            },
            [theme.breakpoints.up("lg")]: {
              gridTemplateColumns: "1fr 1.35fr",
              gap: theme.spacing(3),
            },
          }),
      },
      {
        props: { variant: "heroLeftContent" },
        style: () => ({
          position: "relative",
          zIndex: 1,
          minWidth: 0,
          ...transparentLayout,
        }),
      },
      {
        props: { variant: "heroStats" },
        style: ({ theme }) => ({
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          columnGap: theme.spacing(2),
          width: "100%",
          maxWidth: theme.spacing(50),
          marginTop: theme.spacing(4),
          ...transparentLayout,
          [theme.breakpoints.up("sm")]: {
            columnGap: theme.spacing(3),
          },
          [theme.breakpoints.up("md")]: {
            marginTop: theme.spacing(5),
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
          maxWidth: theme.spacing(56.25),
          marginTop: theme.spacing(2),
          ...transparentLayout,
          [theme.breakpoints.up("lg")]: {
            maxWidth: theme.spacing(62.5),
          },
        }),
      },
      {
        props: { variant: "heroIllustration" },
        style: () => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          minWidth: 0,
          ...transparentLayout,
        }),
      },
      {
        props: { variant: "heroDashboardImage" },
        style: ({ theme }) => ({
          display: "block",
          width: "100%",
          height: "auto",
          maxWidth: theme.spacing(85),
          borderRadius: 0,
          maskImage: theme.imageTokens.edgeMask,
          WebkitMaskImage: theme.imageTokens.edgeMask,
          ...transparentLayout,
          [theme.breakpoints.up("lg")]: {
            maxWidth: theme.spacing(95),
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

      // Trusted companies
      {
        props: { variant: "trustedCompaniesSection" },
        style: ({ theme }) =>
          sectionSurface(theme, {
            borderTop: `1px solid ${theme.palette.divider}`,
            borderBottom: `1px solid ${theme.palette.divider}`,
          }),
      },
      {
        props: { variant: "trustedCompaniesGrid" },
        style: ({ theme }) =>
          centeredGrid(theme, {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            justifyItems: "center",
            marginTop: theme.spacing(2),
            columnGap: theme.spacing(3),
            rowGap: theme.spacing(2),
            [theme.breakpoints.up("sm")]: {
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              columnGap: theme.spacing(5),
            },
            [theme.breakpoints.up("md")]: {
              gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
              marginTop: theme.spacing(4),
              columnGap: theme.spacing(4),
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
        style: { fontSize: 9 },
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
