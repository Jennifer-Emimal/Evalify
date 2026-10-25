
import { Box, Stack, Typography } from "@mui/material";

function SectionLabel({ children, align = "center" }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: align === "left" ? "flex-start" : "center",
        mb: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", width: "fit-content" }}
      >
        <Typography
          component="p"
          variant="sectionLabel"
        >
          {children}
        </Typography>
      </Stack>
    </Box>
  );
}

export default SectionLabel;
