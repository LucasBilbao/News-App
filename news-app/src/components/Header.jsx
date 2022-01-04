import React from 'react';

function Header() {
  return (
    <header>
      <h1 data-test="header-title" className="title">
        PewNews
      </h1>
      <h2 data-test="header-subtitle" className="subtitle">
        NEWS
      </h2>
    </header>
  );
}

export default Header;
