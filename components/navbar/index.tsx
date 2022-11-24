import React, { ChangeEvent, useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import CartButton from "../cart";
import { Menu, useTheme } from "@mui/material";
import { Cart } from "../../models/Cart";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import useProduct from "../../hooks/useProduct";

type Props = {
  cartList: Cart[];
  categories: string[];
};
const Navbar: React.FC<Props> = ({ cartList, categories }) => {
  const { filterProducts, filterCategories } = useProduct();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleProductSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchTerm: string = event.currentTarget.value;
    if (!searchTerm || searchTerm.length >= 3) {
      filterProducts(searchTerm);
    }
  };
  const handleCategorySearch = (category: string): void => {
    setAnchorElNav(null);
    filterCategories(category);
  };
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: theme.palette.common.black }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FontDownloadIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: "none", lg: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AMASTORE
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
              <MenuItem onClick={() => handleCategorySearch("")}>
                <Typography textAlign="center">ALL PRODUCTS</Typography>
              </MenuItem>
              {categories.map((category: string) => (
                <MenuItem
                  key={category}
                  onClick={() => handleCategorySearch(category)}
                >
                  <Typography textAlign="center">{category}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FontDownloadIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={() => handleCategorySearch("")}>
              <Typography textAlign="center">ALL PRODUCTS</Typography>
            </MenuItem>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategorySearch(category)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {category}
              </Button>
            ))}
          </Box>
          <CartButton list={cartList} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search all products…"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleProductSearch(event)
              }
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
