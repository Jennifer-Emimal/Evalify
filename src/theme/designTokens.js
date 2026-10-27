
const designTokens = {
  shape: {
    borderRadius: 12,
  },

  // Shared gradients
  gradients: {
    hero: "linear-gradient(115deg, #FFFFFF 0%, #FBFBFA 55%, #FFFFFF 100%)",
    PurpleBlue: "linear-gradient(100deg, #356FF6 0%, #2459D8 100%)",
    cta: "linear-gradient(110deg, #F2F5FB 0%, #EEF3FF 100%)",
    ctaBanner:
      "radial-gradient(ellipse at 86% 50%, rgba(80, 107, 145, 0.3), transparent 36%), linear-gradient(110deg, #090D12 0%, #1B232C 56%, #090D12 100%)",
  },

  // Shared shadows
  customShadows: {
    card: "0 5px 18px rgba(17, 24, 32, 0.045)",
    cardHover: "0 10px 24px rgba(17, 24, 32, 0.08)",
    button: "0 3px 10px rgba(17, 24, 32, 0.12)",
  },

  imageTokens: {
    edgeMask: "radial-gradient(ellipse at center, #000 86%, transparent 100%)",
    showcaseFade: `
  radial-gradient(
    ellipse at center,
    #000 50%,
    rgba(0, 0, 0, 0.95) 50%,
    rgba(0, 0, 0, 0.65) 50%,
    transparent 100%
  )
`,
    ctaMaxWidth: { xs: 480, sm: 560, md: 620, lg: 720 },
  },

  // Shared animation settings
  motion: {
    duration: {
      fast: 180,
      reveal: 500,
      mask: 720,
    },

    easing: {
      standard: "cubic-bezier(0.2, 0, 0, 1)",
      enter: "cubic-bezier(0.16, 1, 0.3, 1)",
      mask: "cubic-bezier(0.76, 0, 0.24, 1)",
    },

    distance: {
      small: 10,
      medium: 24,
    },

    stagger: 72,

    observer: {
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.12,
      lazyRootMargin: "600px 0px",
    },
  },

  // Shared section layout tokens
  sectionTokens: {
    paddingY: {
      xs: 4,
      md: 5.5,
    },

    headingMarginBottom: {
      xs: 3,
      md: 4,
    },

    gridGap: {
      xs: 2,
      md: 2.5,
    },

    cardPadding: {
      xs: 3,
      md: 3.2,
    },

    cardMinHeight: {
      xs: 190,
      md: 220,
    },

    iconSize: 5.75,
    iconFontSize: 3.125,
    horizontalContentGutter: {
      xs: 3,
      sm: 5,
      lg: 9,
    },
    howItWorksTitleFontSize: "3.75rem",

    connectorOffset: 5.875,
    connectorThickness: 0.25,
    connectorTop: 6,

    iconRadius: "25%",
  },

  // Interview showcase tokens
  showcaseTokens: {
    columns: {
      xs: "1fr",
      md: "1fr",
      lg: "0.8fr 1.2fr",
    },
    gap: { xs: 4, md: 3 },
    contentMaxWidth: 480,
    descriptionMargin: 2,
    benefitsMargin: 3,
    benefitGap: 1.2,
    benefitIconFontSize: 20,
    buttonMargin: 3.5,
    dashboardMaxWidth: { xs: 760, lg: 860 },
    headingVariant: "sectionTitle",
  },

  // Features section tokens
  featureTokens: {
    columns: {
      xs: "1fr",
      sm: "repeat(2, minmax(0, 1fr))",
      lg: "repeat(3, minmax(0, 1fr))",
    },
    cardMinHeight: { xs: 175, md: 165 },
    cardPadding: { xs: 2.5, md: 3 },
    iconSize: 5.5,
    iconFontSize: 2.875,
    iconRadius: "25%",
    iconMarginBottom: 1.5,
    titleVariant: "stepTitle",
    descriptionVariant: "stepDescription",
    descriptionMarginTop: 0.6,
    headingMaxWidth: 600,
    descriptionMaxWidth: 300,
    headingDescriptionMarginTop: 1.5,
    borderWidth: 1,
    iconHoverTransform: "translateY(-2px) scale(1.03)",
    hoverMedia:
      "@media (hover: hover) and (prefers-reduced-motion: no-preference)",
    reducedMotionMedia: "@media (prefers-reduced-motion: reduce)",
  },
};

export default designTokens;
