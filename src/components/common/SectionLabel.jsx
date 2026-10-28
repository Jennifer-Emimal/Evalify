
import { Typography } from "@mui/material";

function SectionLabel({ children, align = "center" }) {
  return (
    <Typography
      component="p"
      variant="sectionLabel"
      align={align}
    >
      {children}
    </Typography>
  );
}

export default SectionLabel;
