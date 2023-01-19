import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/1.jpg";

function Service(){
    return(
        <>
        <Navbar></Navbar>
        <Hero cName="hero-mid" heroImg={AboutImg} title="Service" btnClass="hide"/>
        
        </>
    );
};

export default Service;