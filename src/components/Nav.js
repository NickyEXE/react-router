import React from 'react';
import { Link } from 'react-router-dom'

const Nav = props => {
  return (
    <div className="simple-flex-row">
      <Link to="/pets"><div>🐰🐱🐶🐹☕️🍵</div></Link>
      <Link to="/"><div>Home</div></Link>
      <Link to="/pets"><div>Pets</div></Link>
      <Link to="/login"><div>Login</div></Link>
      <Link to="/help"><div>?</div></Link>
    </div>
  )
}

export default Nav;
