import { useRef, useState } from "react";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Container,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import MotionReveal from "../../../components/common/MotionReveal";
import SectionLabel from "../../../components/common/SectionLabel";
import sectionStyles from "../../../theme/sectionStyles";
import { TESTIMONIALS } from "../../../constants/homeContent";

function TestimonialsSection() {
    const theme = useTheme();
    const styles = sectionStyles.testimonialsStyles;
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef(null);

    const showPrevious = () => {
        setActiveIndex((index) => (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };
    const showNext = () => {
        setActiveIndex((index) => (index + 1) % TESTIMONIALS.length);
    };
    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;

        const swipeDistance = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;

        if (Math.abs(swipeDistance) >= 50) {
            if (swipeDistance > 0) showPrevious();
            else showNext();
        }
    };

    return (
        <Box
            id="testimonials"
            component="section"
            sx={styles.section}
        >
            <Container
                maxWidth={false}
                disableGutters
                sx={styles.container(theme)}
            >
                <MotionReveal sx={styles.headingMotion}>
                    <Box>
                        <SectionLabel align="left">Customer stories</SectionLabel>

                        <Typography
                            component="h2"
                            variant="h2"
                            sx={styles.heading}
                        >
                            Trusted by
                            <br />
                            recruiters worldwide.
                        </Typography>
                    </Box>

                    <Stack direction="row" sx={styles.navigation}>
                        <IconButton
                            aria-label="Previous testimonials"
                            onClick={showPrevious}
                            sx={styles.navigationButton}
                        >
                            <ArrowBackIosNewIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            aria-label="Next testimonials"
                            onClick={showNext}
                            sx={styles.navigationButton}
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                    </Stack>
                </MotionReveal>

                <Box
                    sx={styles.carouselViewport}
                    onTouchStart={(event) => {
                        touchStartX.current = event.touches[0].clientX;
                    }}
                    onTouchEnd={handleTouchEnd}
                >
                    <Box sx={styles.grid}>
                        {TESTIMONIALS.map((_, index) => {
                            const item =
                                TESTIMONIALS[
                                    (index + activeIndex) % TESTIMONIALS.length
                                ];

                            return (
                                <MotionReveal
                                    key={item.name}
                                    layout
                                    sx={styles.cardMotion}
                                >
                                    <Card component="article" sx={styles.card}>
                                        <CardContent sx={styles.cardContent}>
                                            <Typography
                                                variant="body1"
                                                sx={styles.quote}
                                            >
                                                “{item.quote}”
                                            </Typography>

                                            <Stack
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
                                </MotionReveal>
                            );
                        })}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default TestimonialsSection;
