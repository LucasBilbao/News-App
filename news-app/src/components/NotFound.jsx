import React from 'react';

function NotFound() {
  const style = {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    marginTop: '50px',
  };

  return (
    <div className="wrapper">
      <h1 style={style}>Error 404: could not find page!</h1>
    </div>
  );
}

export default NotFound;
