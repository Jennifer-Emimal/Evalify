import { Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function HeroCTAButtons({ sx = {} }) {
  return (
    <Stack
      direction="row"
      spacing={1.2}
      sx={{ mt: 3, flexWrap: "wrap", ...sx }}
    >
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
      >
        Start free trial
      </Button>

      <Button
        startIcon={<PlayArrowIcon />}
        sx={{
          backgroundColor: "background.paper",
          color: "text.primary",
          "&:hover": {
            backgroundColor: "background.soft",
          },
        }}
      >
        Watch demo
      </Button>
    </Stack>
  );
}

export default HeroCTAButtons;
