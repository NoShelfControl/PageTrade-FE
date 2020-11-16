import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default function Sidebar() {
  return (
    <Menu>
      <a href="/" className="nav-item">
        Home
      </a>
      <a href="/library" className="nav-item">
        Library
      </a>
      <a href="/profile" className="nav-item">
        Profile
      </a>
      <a href="/requests" className="nav-item">
        Requests
      </a>
      <a href="/about" className="nav-item">
        About
      </a>
    </Menu>
  );
};
