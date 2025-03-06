import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from "../src/componentes/header.jsx"
import { Nav } from "../src/componentes/nav.jsx"
import "./styles.css"



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <Nav />
    
  </StrictMode>,
)
