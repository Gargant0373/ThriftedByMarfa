import Footer from "../misc/Footer";
import Navbar from "../misc/Navbar";
import ParallaxText from "../misc/ParallaxText";
import Product from "../misc/Product";
import "./Landing.css";

function Landing() {
    return <>
        <Navbar />
        <img className="photo" src="./images/landing.jpg" alt="Picture of founding people" />
        <ParallaxText baseVelocity={5}>THRIFTED by MARFA</ParallaxText>
        <ParallaxText baseVelocity={-5}>TOALE TARI, BAIETI MARI</ParallaxText>
        <Product />
        <Footer />
    </>
}

export default Landing;