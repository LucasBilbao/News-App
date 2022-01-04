import React from 'react';
import PropTypes from 'prop-types';

function Footer() {
  return (
    <footer>
      <p>© Copyright GNews</p>
    </footer>
  );
}

Footer.propTypes = {
  position: PropTypes.string,
};

export default Footer;
