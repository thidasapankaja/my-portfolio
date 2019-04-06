import React from "react"
import { Link } from "gatsby"
import me from '../assets/me.png';

import './layout.css';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link className='linkStyle' to={props.to} activeClassName='activeClass'>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: `80%`, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}><img src={me} style={{height:'40px', width:'40px'}} alt='me'/></h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/projects/"><h3 style={{ display: `inline` }}>Projects</h3></ListLink>
        <ListLink to="/skills"><h3 style={{ display: `inline` }}>Skills</h3></ListLink>
        <ListLink to="/contact/"><h3 style={{ display: `inline` }}>Contact</h3></ListLink>
      </ul>
    </header>
    {children}
  </div>
)