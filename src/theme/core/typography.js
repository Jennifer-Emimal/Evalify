
import breakpoints from "./breakpoints";

const typography = {
  fontFamily: '"Inter", "Plus Jakarta Sans", sans-serif',

  h1: {
    fontSize: "3.25rem",
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.035em",
  },

  h2: {
    fontSize: "2.35rem",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.025em",
  },

  h3: {
    fontSize: "1.3rem",
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.02em",
  },

  h4: {
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: 1.4,
  },

  h5: {
    fontSize: "1.125rem",
    fontWeight: 700,
    lineHeight: 1.5,
  },

  h6: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },

  subtitle1: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },

  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },

  body1: {
    fontSize: "0.98rem",
    fontWeight: 400,
    lineHeight: 1.6,
  },

  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.6,
  },

  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },

  overline: {
    fontSize: "0.75rem",
    fontWeight: 700,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },

  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.5,
    textTransform: "none",
  },

  brandLogo: {
    fontSize: "0.98rem",
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: "-0.04em",
  },

  // Hero heading
  heroTitle: {
    fontSize: "2.85rem",
    fontWeight: 700,
    lineHeight: 1.06,
    letterSpacing: "-0.045em",

    [`@media (min-width:${breakpoints.values.sm}px)`]: {
      fontSize: "3.25rem",
    },

    [`@media (min-width:${breakpoints.values.wide}px)`]: {
      fontSize: "3.9rem",
    },
  },

  // Hero description
  heroDescription: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.65,
  },

  heroBadgeText: {
    fontSize: "0.68rem",
    fontWeight: 700,
    lineHeight: 1.5,
  },

  // Small uppercase label above the hero heading
  sectionLabel: {
    fontSize: "0.7rem",
    fontWeight: 800,
    lineHeight: 1.6,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  },

  // Hero statistics
  heroStatValue: {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.3,
    whiteSpace: "nowrap",

    [`@media (min-width:${breakpoints.values.sm}px)`]: {
      fontSize: "1.7rem",
    },
  },

  heroStatLabel: {
    fontSize: "0.72rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },

  sectionTitle: {
    fontSize: "2.25rem",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.025em",

    [`@media (max-width:${breakpoints.values.sm - 1}px)`]: {
      fontSize: "1.85rem",
    },
  },

  sectionHeading: {
    fontSize: { xs: "2.1rem", sm: "2.5rem", md: "2.75rem" },
    lineHeight: 1.18,
  },

  pricingHeading: {
    fontSize: { xs: "1.9rem", md: "2.35rem" },
  },

  pricingBadge: {
    fontSize: "0.73rem",
    fontWeight: 700,
  },

  pricingControl: {
    fontSize: "0.9rem",
  },

  pricingPlanDescription: {
    fontSize: "0.8rem",
  },

  pricingFeature: {
    fontSize: "0.8rem",
    lineHeight: 1.4,
  },

  pricingPrice: {
    fontSize: { xs: "2.1rem", md: "2.4rem" },
  },

  testimonialHeading: {
    fontSize: { xs: "2.1rem", md: "2.45rem" },
  },

  testimonialRole: {
    fontSize: "0.77rem",
  },

  faqQuestion: {
    fontSize: { xs: "0.9rem", md: "1.05rem" },
    fontWeight: 600,
  },

  ctaHeading: {
    fontSize: { xs: "2rem", md: "2.7rem" },
    lineHeight: 1.1,
  },

  howItWorksTitle: {
    fontSize: "3.75rem",
  },

  footerDescription: {
    fontSize: "0.8rem",
  },

  footerColumnHeading: {
    fontSize: "0.85rem",
  },

  sectionDescription: {
    fontSize: "0.9rem",
    fontWeight: 400,
    lineHeight: 1.6,
  },

  stepNumber: {
    fontSize: "1.05rem",
    fontWeight: 700,
    lineHeight: 1.3,
  },

  stepTitle: {
    fontSize: "1.05rem",
    fontWeight: 600,
    lineHeight: 1.3,
  },

  stepDescription: {
    fontSize: "0.85rem",
    fontWeight: 400,
    lineHeight: 1.6,
  },
};

export default typography;
