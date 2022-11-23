import React, { ChangeEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import Cart from "../cart";
import { Menu, useTheme } from "@mui/material";
import { CartItem } from "../../models/CartItem";
import useProduct from "../../hooks/useProduct";

type Props = {
  cartList: CartItem[];
  categories: string[];
};
const Navbar: React.FC<Props> = ({ cartList, categories }) => {
  const { filterProducts, filterCategories } = useProduct();
  const [openNav, setOpenNav] = useState<boolean>(false);
  const handleOpenNavMenu = () => {
    setOpenNav(!openNav);
  };
  const handleProductSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchTerm: string = event.currentTarget.value;
    if (!searchTerm || searchTerm.length >= 3) {
      filterProducts(searchTerm);
    }
  };
  const handleCategorySearch = (category: string) => {
    setOpenNav(false);
    filterCategories(category);
  };
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: "fixed",
          backgroundColor: theme.palette.common.black,
        }}
      >
        <Toolbar sx={{ position: "relative", justifyContent: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleOpenNavMenu}
            aria-label="open drawer"
            aria-controls="menu-appbar"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <Menu
              id="menu-appbar"
              open={openNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {categories.map((category: string) => {
                return (
                  <MenuItem
                    key={category}
                    onClick={() => handleCategorySearch(category)}
                  >
                    <Typography textAlign="center">{category}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            AMASTORE
          </Typography>
          <Cart list={cartList} />
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
      </AppBar>
    </Box>
  );
};

export default Navbar;
