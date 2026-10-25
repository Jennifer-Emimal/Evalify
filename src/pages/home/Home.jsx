
import { lazy, Suspense } from "react";
import { Box, Skeleton } from "@mui/material";

import MainHeader from "../../components/layout/header/MainHeader";
import HeroSection from "./sections/HeroSection";

const TrustedCompaniesSection = lazy(
    () => import("./sections/TrustedCompaniesSection")
);
const HowItWorksSection = lazy(
    () => import("./sections/HowItWorksSection")
);
const InterviewShowcaseSection = lazy(
    () => import("./sections/InterviewShowcaseSection")
);
const FeaturesSection = lazy(
    () => import("./sections/FeaturesSection")
);
const PricingSection = lazy(
    () => import("./sections/PricingSection")
);
const TestimonialsSection = lazy(
    () => import("./sections/TestimonialsSection")
);
const FAQSection = lazy(
    () => import("./sections/FAQSection")
);
const CTASection = lazy(
    () => import("./sections/CTASection")
);
const FooterSection = lazy(
    () => import("./sections/FooterSection")
);

function SectionFallback() {
    return (
        <Box sx={{ width: "100%" }} aria-hidden="true">
            <Skeleton
                variant="rounded"
                animation={false}
                sx={{ minHeight: { xs: 240, md: 320 } }}
            />
        </Box>
    );
}

function Home() {
    return (
        <>
            <MainHeader />
            <HeroSection />

            <Suspense fallback={<SectionFallback />}>
                <TrustedCompaniesSection />
                <HowItWorksSection id="how-it-works" />
                <InterviewShowcaseSection id="interview-showcase" />
                <FeaturesSection id="features" />
                <PricingSection id="pricing" />
                <TestimonialsSection id="testimonials" />
                <FAQSection id="faq" />
                <CTASection id="get-started" />
                <FooterSection />
            </Suspense>
        </>
    );
}

export default Home;
