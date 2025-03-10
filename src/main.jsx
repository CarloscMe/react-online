import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from "./componentes/header"
import { Nav } from "./componentes/nav"
import { Products } from "./componentes/products"
import "./styles.css"



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <Nav />
    <Products />
    
  </StrictMode>,
)
