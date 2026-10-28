import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { MotionConfig } from "motion/react";

const Home = lazy(() => import("./pages/home/Home"));
function PageLoadingFallback() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "center",
                background: (theme) => theme.gradients.hero,
            }}
        >
            <CircularProgress
                size={36}
                thickness={4}
                sx={{ color: "secondary.main" }}
            />
        </Box>
    );
}

function App() {
    return (
        <BrowserRouter>
            <MotionConfig reducedMotion="user">
                <Suspense fallback={<PageLoadingFallback />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Suspense>
            </MotionConfig>
        </BrowserRouter>
    );
}

export default App;
