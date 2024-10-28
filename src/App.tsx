import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import ContactForm from "./pages/ContactForm";
import Landing from "./pages/landing";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />

{/* We put routes in main becasue it will be wrapped in scss */}
    <main>
    <Routes>

<Route path="/" element={<Landing/>}/>
<Route path="/contact" element={<ContactForm/>}/>

</Routes>
    </main>

      <Footer />

    </>
  )
}

export default App;


// The seter fucntion takes what you want the variable to now be. It is not meant to be sent an assignment 

//the only time you should use or create a state var is ONLY when that var value neetds to change the html in some way