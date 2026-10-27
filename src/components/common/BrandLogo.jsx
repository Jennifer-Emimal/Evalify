
import { Paper, Stack, Typography } from "@mui/material";
import Brightness2RoundedIcon from "@mui/icons-material/Brightness2Rounded";

function BrandLogo() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 0.8,
        flexShrink: 0,
      }}
    >
      <Paper variant="brandLogoIcon">
        <Brightness2RoundedIcon />
      </Paper>

      <Typography
        variant="brandLogo"
        color="text.primary"
        sx={{ m: 0, lineHeight: 1 }}
      >
        Evalify
      </Typography>
    </Stack>
  );
}

export default BrandLogo;
