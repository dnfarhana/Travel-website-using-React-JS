import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/1.jpg";
import Footer from "../components/Footer";

function Service(){
    return(
        <>
        <Navbar></Navbar>
        <Hero cName="hero-mid" heroImg={AboutImg} title="Service" btnClass="hide"/>
        <Footer/>
        </>
    );
};

export default Service;