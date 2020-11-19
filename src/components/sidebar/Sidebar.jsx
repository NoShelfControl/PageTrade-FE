import React, { useState, useRef } from 'react';
import Menu from './Menu';
import BurgerMenu from './BurgerMenu';
import menu_icon from '../../assets/menu_icon.svg.png';
import { useOnClickOutside } from '../../hooks/SidebarHook';

function Sidebar() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <div ref={node}>
        <BurgerMenu open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Sidebar;
