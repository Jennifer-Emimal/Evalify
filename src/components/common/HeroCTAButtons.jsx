import { Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function HeroCTAButtons({ sx = {}, inverted = false }) {
  return (
    <Stack
      direction="row"
      spacing={1.2}
      sx={{ mt: 3, flexWrap: "wrap", ...sx }}
    >
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={
          inverted
            ? {
                bgcolor: "common.white",
                color: "primary.main",
                "&:hover": { bgcolor: "grey.100" },
              }
            : undefined
        }
      >
        Start free
      </Button>

      <Button
        startIcon={<PlayArrowIcon />}
        sx={{
          backgroundColor: inverted ? "transparent" : "background.paper",
          color: inverted ? "common.white" : "text.primary",
          border: "1px solid",
          borderColor: inverted
            ? "rgba(255, 255, 255, 0.35)"
            : "divider",
          "&:hover": {
            backgroundColor: inverted
              ? "rgba(255, 255, 255, 0.08)"
              : "background.soft",
            borderColor: inverted
              ? "rgba(255, 255, 255, 0.55)"
              : "divider",
          },
        }}
      >
        Watch video
      </Button>
    </Stack>
  );
}

export default HeroCTAButtons;
