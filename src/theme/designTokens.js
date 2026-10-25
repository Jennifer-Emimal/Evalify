
const designTokens = {
  shape: {
    borderRadius: 12,
  },

  // Shared gradients
  gradients: {
    hero: "linear-gradient(115deg, #F8FAFF 0%, #EDF6FF 55%, #F9F7FF 100%)",
    PurpleBlue: "linear-gradient(100deg, #a200ff 0%, #0084ff 100%)",
    cta: "linear-gradient(110deg, #DDF4FF 0%, #E8E7FF 100%)",
  },

  // Shared shadows
  customShadows: {
    card: "0 8px 28px rgba(39, 75, 120, 0.07)",
    cardHover: "0 12px 32px rgba(39, 75, 120, 0.1)",
    button: "0 5px 15px rgba(7, 49, 58, 0.12)",
  },

  imageTokens: {
    edgeMask: "radial-gradient(ellipse at center, #000 86%, transparent 100%)",
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
      xs: 5,
      md: 7,
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

    connectorOffset: 5.875,
    connectorThickness: 0.25,
    connectorTop: 6,

    iconRadius: "25%",
  },

  // Interview showcase tokens
  showcaseTokens: {
    columns: {
      xs: "1fr",
      md: "0.8fr 1.2fr",
      lg: "0.75fr 1.25fr",
    },
    gap: { xs: 4, md: 3 },
    contentMaxWidth: 400,
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
