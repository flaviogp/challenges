import CardBack from "../../components/CardBack";
import CardFront from "../../components/CardFront";



export default function CardsContainer () {
    return (
        <div className="cards-container">
            <CardFront />
            <CardBack />
        </div>
    )
}