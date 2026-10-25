
import { Paper, Stack, Typography } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

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
        <AutoAwesomeRoundedIcon />
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
