import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from "./componentes/header"
import { Nav } from "./componentes/nav"
import { Products } from "./componentes/products"
import { Footer } from "./componentes/footer"
import "./styles.css"



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <Nav />
    <Products />
    <Footer />
    
  </StrictMode>,
)
