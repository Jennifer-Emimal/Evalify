import {
    Avatar,
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import SectionLabel from "../../../components/common/SectionLabel";
import GradientText from "../../../components/common/GradientText";
import sectionStyles from "../../../theme/sectionStyles";
import { TESTIMONIALS } from "../../../constants/homeContent";
import useMotionSettings from "../../../hooks/useMotionSettings";

function TestimonialsSection() {
    const theme = useTheme();
    const styles = sectionStyles.testimonialsStyles;
    const { duration, stagger, easing, distance } = useMotionSettings();

    return (
        <Box
            id="testimonials"
            component="section"
            sx={styles.section}
        >
            <Container maxWidth="lg">
                {/* Section heading */}
                <Box
                    component={motion.div}
                    initial={styles.headingInitial(distance)}
                    whileInView={styles.visible}
                    viewport={styles.viewport}
                    transition={{ duration, ease: easing }}
                    sx={styles.headingMotion}
                >
                    <SectionLabel>Loved by recruiters</SectionLabel>

                    <Typography
                        component="h2"
                        variant="h2"
                        sx={styles.heading}
                    >
                        Recruiters are getting their
                        <br />
                        <GradientText>evenings back.</GradientText>
                    </Typography>
                </Box>

                {/* Testimonial cards */}
                <Box sx={styles.grid}>
                    {TESTIMONIALS.map((item, index) => (
                        <Box
                            key={item.name}
                            component={motion.div}
                            initial={styles.cardInitial(index, distance)}
                            whileInView={styles.visible}
                            viewport={styles.viewport}
                            transition={{
                                duration,
                                delay: index * stagger,
                                ease: easing,
                            }}
                            sx={styles.cardMotion}
                        >
                            <Card
                                component="article"
                                sx={styles.card}
                            >
                                <CardContent sx={styles.cardContent}>
                                    {/* Star rating */}
                                    <Stack
                                        direction="row"
                                        aria-label="5 out of 5 stars"
                                        sx={styles.stars}
                                    >
                                        {Array.from(
                                            { length: 5 },
                                            (_, starIndex) => (
                                                <StarRoundedIcon
                                                    key={starIndex}
                                                    sx={styles.star}
                                                />
                                            )
                                        )}
                                    </Stack>

                                    {/* Quote */}
                                    <Box
                                        component={motion.div}
                                        initial={styles.quoteInitial(
                                            theme.motion.distance.small
                                        )}
                                        whileInView={styles.visible}
                                        viewport={styles.viewport}
                                        transition={{
                                            duration,
                                            delay: stagger,
                                            ease: easing,
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={styles.quote}
                                        >
                                            “{item.quote}”
                                        </Typography>
                                    </Box>

                                    <Divider sx={styles.divider} />

                                    {/* Customer profile */}
                                    <Stack
                                        component={motion.div}
                                        initial={styles.profileInitial(
                                            theme.motion.distance.small
                                        )}
                                        whileInView={styles.visible}
                                        viewport={styles.viewport}
                                        transition={{
                                            duration,
                                            delay: stagger * 2,
                                            ease: easing,
                                        }}
                                        direction="row"
                                        sx={styles.profile}
                                    >
                                        <Avatar
                                            src={item.portrait}
                                            alt={item.name}
                                            sx={styles.avatar}
                                        />

                                        <Box sx={styles.profileDetails}>
                                            <Typography
                                                variant="body2"
                                                sx={styles.profileName}
                                            >
                                                {item.name}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={styles.profileRole}
                                            >
                                                {item.role}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default TestimonialsSection;
