 import {NavLink} from 'react-router-dom'

function Nav() {
    return (
      <nav>
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutme">About Me</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </nav>
    )
  }
  
export default Nav;  