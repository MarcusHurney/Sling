import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostAuthNavbar extends Component {
  render() {
    return (
      <header className="primary-header">
        <h1>You have arrived!</h1>
        <nav>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/users" activeClassName="active">
            Users
          </NavLink>
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default PostAuthNavbar;
