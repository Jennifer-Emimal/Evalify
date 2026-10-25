import { createTheme } from "@mui/material/styles";

import breakpoints from "./core/breakpoints";
import components from "./core/Components";
import palette from "./core/palette";
import typography from "./core/typography";

import designTokens from "./designTokens";
import sectionStyles from "./sectionStyles";

const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components,
  ...designTokens,
  ...sectionStyles,
});

export default theme;