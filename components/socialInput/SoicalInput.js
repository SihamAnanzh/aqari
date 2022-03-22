import React , { ReactDOM } from 'react'
import {Facebook , Twitter,Email,Instagram, Mail} from '@mui/icons-material/';

const SoicalInput = () => {
  return (
   <div className="social-contanier">
     <div className="input-social insta">
        <div className="title">
          <span className="soical-icon"><Instagram/></span>
          <h3>Instgram</h3>
        </div>
        <div className="text">
           <div className="btn-link"></div>
           <input type="text" />
        </div>
     </div>
     <div className="input-social twitter">
     <div className="title">
          <span className="soical-icon"><Twitter/></span>
          <h3>Twitter</h3>
        </div>
        <div className="text">
           <div className="btn-link"></div>
           <input type="text" />
        </div>
     </div>
     <div className="input-social facebook">
     <div className="title">
          <span className="soical-icon"><Facebook/></span>
          <h3>Facebook</h3>
        </div>
        <div className="text">
           <div className="btn-link"></div>
           <input type="text" />
        </div>
     </div>
     <div className="input-social mail">
     <div className="title">
          <span className="soical-icon"><Email/></span>
          <h3>Email</h3>
        </div>
        <div className="text">
           <div className="btn-link"></div>
           <input type="text" />
        </div>
     </div>

   </div>
  )
}

export default SoicalInput



