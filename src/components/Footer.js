import React from "react"

export default function Footer() {
    return (
        <footer className="footer--container">
            <div className="footer--github_content">
                <span className="text--github"> My works here: </span>
                <span>
                    <a href="https://github.com/imandzzy" target="_blank" rel="noopener noreferrer" className="footer--github">
                        <span>
                            <ion-icon name="logo-github"></ion-icon>
                        </span>
                    </a>
                </span>
            </div>

            <div class="vertical--line"></div>
           
            <div className="footer--socialmedias_content">
               <span className="footer--socialmedias_icons">
               <a href="https://www.facebook.com/andystrawhat" target="_blank" rel="noopener noreferrer">
                   <span className="fb_icon">
                       <ion-icon name="logo-facebook"></ion-icon>
                   </span>
               </a>
               </span>
               <span className="footer--socialmedias_icons">
               <a href="https://www.instagram.com/imandzzy/" target="_blank" rel="noopener noreferrer">
                   <span className="insta_icon">
                       <ion-icon name="logo-instagram"></ion-icon>
                   </span>
               </a>
               </span>
            </div>
        </footer>
    )
}