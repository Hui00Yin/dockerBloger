import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/detail">Detail</Link>
      </nav>
    );
  }
}

export default Nav;
