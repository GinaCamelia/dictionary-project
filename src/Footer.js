import React from "react";
import "./Footer.css";


export default function Footer() {
    return (
      <div className="Footer">
        <div className="link-github mt-5">
              <a href="/" 
              className="link"
              target="_blank"
              rel="noreferrer">Open-source code{" "}</a>
              by <a href="https://laughing-kilby-b8cd7c.netlify.app" 
              className="link"
              target="_blank"
              rel="noreferrer">Gina-Camelia Hodorogea </a> and hosted on <a href="https://leafy-granita-e5a9c7.netlify.app" target="_blank" rel="no referrer" className="link">Netlify</a>
            </div>
              <div className="contact-details">
                <span className="email"><strong>E-mail:{" "}</strong></span>
                camelia_hodorogea@yahoo.com
                <span className="instagram"><strong>{" "}Instagram:</strong></span> @gina.camelia
              </div>   
        </div>
    );
} 
