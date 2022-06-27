import { Container } from "react-bootstrap"
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/CartContext"
import About from "./pages/About"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
 
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}
export default App