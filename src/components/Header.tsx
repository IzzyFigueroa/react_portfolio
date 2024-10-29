import { Link } from "react-router-dom";
import Nav from "./Nav";


function Header() {

  return (
    <header>
      {/* div.logo will give you a className already loaded in */}
      <div className="logo">
        {/* <img src="/images/barney.webp" alt="dino logo" /> */}
        <Link to="/">
          <h3>Izzy Figueroa</h3>
        </Link>
      </div>


      <Nav />
    </header>
  )
}

export default Header;