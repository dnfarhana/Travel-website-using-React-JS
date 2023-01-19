import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";

function Home(){
    return(
        <>
        <Navbar></Navbar>
        <Hero cName="hero" heroImg="https://images.unsplash.com/photo-1488628278511-2177a435414d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" title="Your Journey Your Story" text="Choose your Favourite Destination" buttonText="Travel Plan" url="/" btnClass="show"/>
        <Destination/>
        </>
    );
};

export default Home;