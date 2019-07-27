import React from "react";
import { Link } from "gatsby";
import me from '../assets/me.png';

const ListLink = props => (
  <li className='header-li' key={props.to}>
    <Link className='linkStyle' to={props.to} activeClassName='activeClass'>{props.children}</Link>
  </li>
)

const Header = () => (
    <header className='header'>
      <Link to="/">
        <h3><img src={me} style={{height:'40px', width:'40px'}} alt='me'/></h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/projects" k><h3>Projects</h3></ListLink>
        <ListLink to="/skills"><h3>Skills</h3></ListLink>
        <ListLink to="/contact"><h3>Contact</h3></ListLink>
        <ListLink to="/blog"><h3>Blog</h3></ListLink>
      </ul>
    </header>
)

export default Header;