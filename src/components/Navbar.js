import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-scroll";

const pages = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "Work",
    link: "work",
  },
  {
    name: "About me",
    link: "about",
  },
  {
    name: "Contact",
    link: "contacts",
  },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClick = (page) => {
    handleCloseNavMenu();
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "transparent", color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DOTJSON
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} >
                  <Link to={page.link} spy={true} smooth={true} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DOTJSON
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <ul style={{ listStyle: "none", display: "flex" }}>
              <li
                onClick={() => handleCloseNavMenu()}
                style={{ margin: "0 1rem" }}
              >
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li
                onClick={() => handleCloseNavMenu()}
                style={{ margin: "0 1rem" }}
              >
                <Link to="work" spy={true} smooth={true}>
                  Work
                </Link>
              </li>
              <li
                onClick={() => handleCloseNavMenu()}
                style={{ margin: "0 1rem" }}
              >
                <Link to="about" spy={true} smooth={true}>
                  About me
                </Link>
              </li>
              <li
                onClick={() => handleCloseNavMenu()}
                style={{ margin: "0 1rem" }}
              >
                <Link to="contacts" spy={true} smooth={true}>
                  Contacts
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
