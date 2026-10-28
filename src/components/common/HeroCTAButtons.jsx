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
        variant={inverted ? "heroPrimaryInverted" : "contained"}
        endIcon={<ArrowForwardIcon />}
      >
        Start free
      </Button>

      <Button
        variant={inverted ? "heroSecondaryInverted" : "heroSecondary"}
        startIcon={<PlayArrowIcon />}
      >
        Watch video
      </Button>
    </Stack>
  );
}

export default HeroCTAButtons;
