import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
                <TripData image={Trip1} heading="Trip in Indonesia" text="Indonesia, officially Republic of Indonesia, is a country in Southeast Asia and Oceania between Indian and Pacific Oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi and parts of Borneo and New Guinea"/>

                <TripData image={Trip2} heading="Trip in Malaysia" text="Malaysia is a Southeast Asian Country occupying parts of Malay Peninsula and the island of Borneo. It's known for its beaches, rainforest and mix of Malay, Chinese, Indian and European cultural influences"/>

                <TripData image={Trip3} heading="Trip in France" text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches, Paris. It's capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower"/>
            </div>
        </div>
    );
};

export default Trip;