import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import imr from "./assets/images.png"
import can from "./assets/imagepen.png"
import hero from "./assets/hero.png"
import panda  from "./assets/imagespanda.png"
import './index.css'
import MapLiat from './MapLiat.jsx'

createRoot(document.getElementById('root')).render(
  <>
   <div className="llkpar">
     <MapLiat/>
    </div>
  </>
);