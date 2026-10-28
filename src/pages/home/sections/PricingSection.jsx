
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import CheckIcon from "@mui/icons-material/Check";

import SectionLabel from "../../../components/common/SectionLabel";
import GradientText from "../../../components/common/GradientText";
import MotionReveal from "../../../components/common/MotionReveal";
import { PRICING_PLANS } from "../../../constants/homeContent";

function PricingSection() {
  const [yearly, setYearly] = useState(false);
  const theme = useTheme();

  const { pricingStyles } = theme;

  return (
    <Box
      id="pricing"
      component="section"
      sx={pricingStyles.section}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={pricingStyles.container(theme)}
      >
        <MotionReveal sx={pricingStyles.headerMotion}>
          <Box sx={pricingStyles.header}>
            <Box>
              <SectionLabel align="left">Simple pricing</SectionLabel>

              <Typography
                component="h2"
                variant="sectionTitle"
                sx={pricingStyles.heading}
              >
                Start free.{" "}
                <GradientText>Scale when </GradientText>
                you're ready.
              </Typography>
            </Box>

            <Box sx={pricingStyles.billingToggle}>
              <Button
                aria-pressed={!yearly}
                onClick={() => setYearly(false)}
                sx={
                  yearly
                    ? pricingStyles.monthlyButtonInactive
                    : pricingStyles.monthlyButtonActive
                }
              >
                Monthly
              </Button>

              <Button
                aria-pressed={yearly}
                onClick={() => setYearly(true)}
                sx={
                  yearly
                    ? pricingStyles.yearlyButtonActive
                    : pricingStyles.yearlyButtonInactive
                }
              >
                Yearly
                <Box
                  component="span"
                  sx={pricingStyles.savingsLabel}
                >
                  Save 20%
                </Box>
              </Button>
            </Box>
          </Box>
        </MotionReveal>

        <Box sx={pricingStyles.grid}>
          {PRICING_PLANS.map((plan) => (
            <MotionReveal
              key={plan.name}
              sx={pricingStyles.cardMotion}
            >
              <Card
                component="article"
                sx={
                  plan.popular
                    ? pricingStyles.popularCard
                    : pricingStyles.card
                }
              >
                {plan.popular && (
                  <Chip
                    label="Most popular"
                    sx={pricingStyles.popularBadge}
                  />
                )}

                <CardContent
                  sx={
                    plan.popular
                      ? pricingStyles.popularCardContent
                      : pricingStyles.cardContent
                  }
                >
                  <Typography
                    component="h3"
                    variant="stepTitle"
                    sx={pricingStyles.planName}
                  >
                    {plan.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={pricingStyles.planDescription}
                  >
                    {plan.description}
                  </Typography>

                  <Stack sx={pricingStyles.price}>
                    <Typography
                      variant="h2"
                      sx={pricingStyles.priceAmount}
                    >
                      ${yearly ? plan.yearly : plan.monthly}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={pricingStyles.pricePeriod}
                    >
                      /month
                    </Typography>
                  </Stack>

                  <Stack sx={pricingStyles.features}>
                    {plan.features.map((feature) => (
                      <Stack
                        key={feature}
                        sx={pricingStyles.featureRow}
                      >
                        <CheckIcon
                          sx={pricingStyles.featureIcon}
                        />

                        <Typography
                          variant="stepDescription"
                          sx={pricingStyles.featureText}
                        >
                          {feature}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Box sx={pricingStyles.buttonSpacer} />

                  <Button
                    fullWidth
                    variant={plan.popular ? "contained" : "text"}
                    sx={
                      plan.popular
                        ? pricingStyles.popularButton
                        : pricingStyles.standardButton
                    }
                  >
                    {plan.button}
                  </Button>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default PricingSection;
