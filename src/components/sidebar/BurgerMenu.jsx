import React from 'react';
import { StyledBurger } from './BurgerMenu.styled';

// eslint-disable-next-line react/prop-types
const BurgerMenu = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default BurgerMenu;
