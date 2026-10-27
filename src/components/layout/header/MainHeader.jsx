import { useState } from "react";
import {
  Button,
  Container,
  Collapse,
  IconButton,
  Paper,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import BrandLogo from "../../common/BrandLogo";
import { NAV_ITEMS } from "../../../constants/homeContent";

function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Paper component="header" variant="navbarHeader">
      <Container maxWidth={false} disableGutters>
        <Paper
          component="nav"
          variant="navbarInner"
          aria-label="Main navigation"
        >
          <BrandLogo />

          {/* Desktop navigation: all links share equal spacing */}
          <Paper
            component="div"
            variant="navbarDesktopNavigation"
          >
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.label}
                component="a"
                href={item.href}
                variant="nav"
              >
                {item.label}
              </Button>
            ))}
          </Paper>

          {/* Desktop actions */}
          <Paper
            component="div"
            variant="navbarDesktopActions"
          >
            <Button variant="signIn">
              Sign in
            </Button>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Get started
            </Button>
          </Paper>

          {/* Mobile menu toggle */}
          <IconButton
            variant="navbarMenuToggle"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setMobileMenuOpen((prev) => !prev)
            }
          >
            {mobileMenuOpen ? (
              <CloseRoundedIcon />
            ) : (
              <MenuRoundedIcon />
            )}
          </IconButton>
        </Paper>

        {/* Mobile navigation */}
        <Collapse in={mobileMenuOpen} unmountOnExit>
          <Paper
            id="mobile-navigation"
            component="div"
            variant="navbarMobileNavigation"
          >
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.label}
                component="a"
                href={item.href}
                variant="mobileNav"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Button>
            ))}

            <Button
              variant="mobileSignIn"
              onClick={closeMobileMenu}
            >
              Sign in
            </Button>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={closeMobileMenu}
            >
              Get started
            </Button>
          </Paper>
        </Collapse>
      </Container>
    </Paper>
  );
}

export default MainHeader;