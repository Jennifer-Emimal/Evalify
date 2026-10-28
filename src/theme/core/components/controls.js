const componentOverrides = {
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

export default componentOverrides;
