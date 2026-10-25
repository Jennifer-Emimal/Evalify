
import { Box } from "@mui/material";

function GradientText({ children, sx = {} }) {
  return (
    <Box
      component="span"
      sx={{
        background: (theme) => theme.gradients.PurpleBlue,
        backgroundClip: "text",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default GradientText;
