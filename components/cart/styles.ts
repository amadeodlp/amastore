import { SwipeableDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: "25vw",
  backdropFilter: "none",
}));
