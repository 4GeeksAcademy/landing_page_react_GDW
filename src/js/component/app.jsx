import React from "react";
import LandingPageNavbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx"

function App() {
    return (
        <div>
            <LandingPageNavbar/>
            <Jumbotron/>
            <Card/>
            <Footer/>
        </div>
    )
}

export default App;