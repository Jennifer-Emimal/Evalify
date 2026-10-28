const componentOverrides = {
  MuiCssBaseline: {
    styleOverrides: {
      "@media (prefers-reduced-motion: reduce)": {
        "*, *::before, *::after": {
          scrollBehavior: "auto !important",
          animationDuration: "0.01ms !important",
          animationIterationCount: "1 !important",
          transitionDuration: "0.01ms !important",
        },
      },
    },
  },
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
          display: "block",
          width: "100%",
          marginBottom: theme.spacing(2),
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
      maxWidthLg: ({ theme }) => ({
        [theme.breakpoints.up("wide")]: {
          maxWidth: "1400px",
        },
      }),
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
      {
        props: { variant: "heroPrimaryInverted" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.common.white,
          color: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.grey[100],
          },
        }),
      },
      {
        props: { variant: "heroSecondary" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
          "&:hover": {
            backgroundColor: theme.palette.background.soft,
            borderColor: theme.palette.divider,
          },
        }),
      },
      {
        props: { variant: "heroSecondaryInverted" },
        style: ({ theme }) => ({
          backgroundColor: "transparent",
          color: theme.palette.common.white,
          border: `1px solid ${theme.palette.cta.buttonBorder}`,
          "&:hover": {
            backgroundColor: theme.palette.cta.buttonHover,
            borderColor: theme.palette.cta.buttonBorderHover,
          },
        }),
      },
    ],
  },
};

export default componentOverrides;
