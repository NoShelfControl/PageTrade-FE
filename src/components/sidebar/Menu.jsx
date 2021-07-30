import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useCurrentUser } from '../../context/AuthContext';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {

  const user = useCurrentUser();

  if(!user) return <h1>Loading...</h1>;

  return (
    <StyledMenu open={open}>
      <a href="/">
        Home
      </a>
      <a href="/library">
        Library
      </a>
      <a href={`/profile/${user.id}`}>
        Profile
      </a>
    </StyledMenu>
  );
};

export default Menu;
