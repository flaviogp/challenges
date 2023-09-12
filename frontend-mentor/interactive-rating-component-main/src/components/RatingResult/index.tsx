
interface RatingResultProps {
    rate:number
}

const RatingResult = ({rate}: RatingResultProps) => {
    return(
        <div className="result">
            <p>
                You selected {rate} out of 5
            </p>
        </div>
    )
}


export default RatingResult