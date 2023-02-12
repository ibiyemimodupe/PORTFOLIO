import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Card from "./components/Card";
import Data from "./data/Data";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
    const cards = Data.map(item => {
        return (
            <Card 
                title={item.title}
                description={item.description}
                link={item.link}
                source={item.source}
                pic={item.pic}
            />
        )
    })        

    return(
        <div>
            <Navbar />
            <div className="border-cont">
                <div className="border">
                    <Header />
                    <About />
                    <Experience />
                    <Work />
                    <section className="cards-list">
                        {cards}
                    </section>
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    )
}