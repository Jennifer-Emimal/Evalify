
import { Paper, Stack, Typography } from "@mui/material";
import Brightness2RoundedIcon from "@mui/icons-material/Brightness2Rounded";

function BrandLogo() {
  return (
    <Stack
      direction="row"
      spacing={0.8}
      sx={{ alignItems: "center", flexShrink: 0 }}
    >
      <Paper variant="brandLogoIcon">
        <Brightness2RoundedIcon />
      </Paper>

      <Typography
        variant="brandLogo"
        color="text.primary"
      >
        Evalify
      </Typography>
    </Stack>
  );
}

export default BrandLogo;
