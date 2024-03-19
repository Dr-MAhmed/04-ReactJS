import React from 'react';
import Button from './Button';

const Navbar = ({count}) => {
  return (
    <div>
      I aam a navbar
      <span></span>
      <Button count={count}/>
    </div>
  );
}

export default Navbar;
