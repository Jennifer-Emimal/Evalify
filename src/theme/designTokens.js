
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
      reveal: 360,
    },

    easing: {
      standard: "cubic-bezier(0.2, 0, 0, 1)",
      enter: "cubic-bezier(0.16, 1, 0.3, 1)",
    },

    distance: {
      small: 6,
      medium: 12,
    },

    observer: {
      rootMargin: "0px 0px -60px 0px",
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
      md: "repeat(2, minmax(0, 1fr))",
    },
    areas: [
      "aiInterviewer",
      "analytics",
      "questionGeneration",
      "evaluation",
      "multiRole",
      "coding",
      "ats",
      "security",
    ],
    gridTemplateAreas:
      '"aiInterviewer analytics questionGeneration" "evaluation . multiRole" "coding ats security"',
    gridMaxWidth: 1200,
    cardMinHeight: { xs: 220, sm: 210, md: 230 },
    desktopColumns:
      "minmax(0, 28fr) minmax(0, 37fr) minmax(0, 32fr)",
    desktopCardRows: [224, 208, 208],
    desktopCardPlacements: [
      { gridColumn: "1", gridRow: "1" },
      { gridColumn: "2", gridRow: "1" },
      { gridColumn: "3", gridRow: "1" },
      { gridColumn: "1", gridRow: "2" },
      { gridColumn: "3", gridRow: "2" },
      { gridColumn: "1 / span 2", gridRow: "3" },
      { gridColumn: "2", gridRow: "3" },
      { gridColumn: "3", gridRow: "3" },
    ],
    desktopCardWidths: [
      "100%",
      "100%",
      "100%",
      "108%",
      "90%",
      "51.6%",
      "83%",
      "100%",
    ],
    desktopCardAlignment: [
      "start",
      "start",
      "start",
      "start",
      "end",
      "start",
      "center",
      "start",
    ],
    atsCardHorizontalOffset: "10.8%",
    cardPadding: { xs: 2, md: 2 },
    desktopCardPaddingY: 0.5,
    desktopTitleMargin: 0.75,
    desktopDescriptionMargin: 0.25,
    desktopArrowButtonSize: 4,
    desktopCompactCopyWidth: "68%",
    desktopCompactIllustrationWidth: "28%",
    illustrationWidth: "46%",
    atsIllustrationWidth: "48%",
    illustrationMaxHeight: 144,
    dashboardWidth: "40%",
    dashboardTop: "48%",
    dashboardMaxWidth: 515,
    dashboardZIndex: 2,
    cardContentZIndex: 3,
    dashboardMask:
      "radial-gradient(ellipse at center, #000 72%, rgba(0, 0, 0, 0.92) 84%, transparent 100%)",
    titleVariant: "stepTitle",
    descriptionVariant: "stepDescription",
    descriptionMaxWidth: 300,
  },
};

export default designTokens;
