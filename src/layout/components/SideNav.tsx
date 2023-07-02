import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const StyledSidebar = styled.aside`
  background-color: #fff;
  padding: 3.2rem 2.4;
  border-bottom: 1px solid #f3f4f6;
  border-right: 1px solid #f3f4f6;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: #4b5563;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    text-decoration: none;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
const SideNav = () => {
  return (
    <Box component="aside" sx={{ pt: 10 }} ml={6}>
      <NavLink
        style={{
          textDecoration: "none",
        }}
        to="/"
      >
        <Typography
          color="primary"
          sx={{
            fontWeight: "bold",
          }}
          variant="body1"
        >
          Home
        </Typography>
      </NavLink>
      <NavLink
        to="cabins"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontWeight: "bold",
          }}
          variant="body1"
        >
          Cabins
        </Typography>
      </NavLink>
      <NavLink
        to="settings"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontWeight: "bold",
          }}
          variant="body1"
        >
          Settings
        </Typography>
      </NavLink>
      <NavLink
        to="bookings"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontWeight: "bold",
          }}
          variant="body1"
        >
          Bookings
        </Typography>
      </NavLink>
    </Box>
  );
};

export default SideNav;
