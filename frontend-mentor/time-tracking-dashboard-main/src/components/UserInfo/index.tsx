import './style.css'
import jeremy  from '../../assets/images/image-jeremy.png'

interface Props {
    setterPeriod: (value: string) => void ;
}

export default function UserInfo (props: Props) {

    return(
        <div className="user-info">
            <div className="info">
                <div className="photo">
                    <img src={jeremy} alt="self photo" />
                </div>
                <div className='user-name'>
                    <span>Report for</span>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="period">
                <p onClick={ () => props.setterPeriod('daily')}>Daily</p>
                <p onClick={ () => props.setterPeriod('weekly')}>Weekly</p>
                <p onClick={ () => props.setterPeriod('monthly')}>Monthly</p>
            </div>
        </div>
    )
}