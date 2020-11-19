import React from 'react';
import { StyledBurger } from './BurgerMenu.styled';

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default BurgerMenu;
