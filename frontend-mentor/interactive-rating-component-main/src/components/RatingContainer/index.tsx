import { useState } from 'react'
import starIcon from '../../assets/images/icon-star.svg'
import Ratings from '../Ratings'
import TextContent from '../TextContent'

interface RatingContainerProps {
    rate: number
    setRate: (value: number) => void
    setSubmitRate: (value: boolean) => void
}

const RatingContainer = ({setRate, setSubmitRate, rate}: RatingContainerProps) => {
    const [error, setError] = useState(false)



const handleClick = () => {
    if(rate === 0) return setError(true);

    setError(false)
    setSubmitRate(true);
}

    return(
        <div className="container">
            <div className="image-container">
                <img src={starIcon} alt="icon star" />
            </div>
            <TextContent 
                title='How did we do?'
                text='Please let us know how we did with your
                    support request. All feedbacks is appreciated
                    to help un improve our offering!'
            />
            <Ratings setRate={setRate}/>
            {error && <p className='error-message'>choose a rating before continuing</p>}
            <button type="submit" onClick={() => handleClick()}>
                SUBMIT
            </button>
        </div>
    )
}

export default RatingContainer