import React, { useState, useRef } from 'react';
import BurgerMenu from './BurgerMenu';
import Menu from './Menu';
import { useOnClickOutside } from '../../hooks/SidebarHook';

function Sidebar() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div ref={node}>
        <BurgerMenu open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  )
}

export default Sidebar;
