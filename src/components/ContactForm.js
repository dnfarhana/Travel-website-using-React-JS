import "./ContactFormStyles.css";

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send Message To Us!</h1>
            <form>
                <input placeholder="Name"/>
            </form>
        </div>
    );
};

export default ContactForm;
