import React from "react";

function NavBar() {
  //nav element
  return (
    <nav>
      {/* //two child elements: an a element with an href of '#home' and an a element with an href of '#about' */}
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  )
}

export default NavBar;
