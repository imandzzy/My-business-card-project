import React from "react"
import Footer from "./components/Footer.js"
import Info from "./components/Info.js"
import Main from "./components/Main.js"

export default function App() {
    return (
        <div className="page--container">
           <Info />
           <Main />
           <Footer />
        </div>
    )
}
