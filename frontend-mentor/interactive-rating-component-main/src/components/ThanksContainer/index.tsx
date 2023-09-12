import ThanksImage from '../../assets/images/illustration-thank-you.svg'
import RatingResult from '../RatingResult'
import TextContent from '../TextContent'

interface ThanksContainer {
    rate: number
}

const ThanksContainer = ({rate}: ThanksContainer) => {
    return(
        <div className="container">
            <div className="image-thanks">
                <img src={ThanksImage} alt="" />
            </div>
            <RatingResult rate={rate}/>
            <TextContent
            finished
            title='Thank You!'
            text='We appreciate you taking the time to give a
                rating. if you ever need more support, dont
                hesitate to get in touch!'
            />

        </div>
    )
}

export default ThanksContainer