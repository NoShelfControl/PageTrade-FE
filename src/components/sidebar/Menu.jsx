import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Home
      </a>
      <a href="/library">
        Library
        </a>
      <a href="/profile/:userId">
        Profile
        </a>
    </StyledMenu>
  )
}

export default Menu;
