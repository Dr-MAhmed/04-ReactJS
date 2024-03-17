import React from 'react';
import { useEffect } from 'react';

const Navbar = ({color}) => {
    useEffect(() => {
        alert("Hey i am first rendering");
      }, [])
    
      useEffect(() => {
        alert("Hey I am running because color was changed")
      }, [color])


  return (
    <div>
      Hey i am a Navbar
    </div>
  );
}

export default Navbar;
