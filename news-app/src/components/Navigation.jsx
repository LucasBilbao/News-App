import React from 'react';
import Nav from './Nav';
import Search from './Search';

function Navigation() {
  return (
    <div className="navigation">
      <div>
        <Nav></Nav>
        <Search></Search>
      </div>
    </div>
  );
}

export default Navigation;
