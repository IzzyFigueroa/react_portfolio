import Nav from "./Nav";


function Header() {

    return (
      <header>
        {/* div.logo will give you a className already loaded in */}
        <div className="logo">
        {/* <img src="/images/barney.webp" alt="dino logo" /> */}
        <h3>Izzy Figueroa</h3>
        </div>
            
       
        <Nav />
      </header>
    )
  }

  export default Header;