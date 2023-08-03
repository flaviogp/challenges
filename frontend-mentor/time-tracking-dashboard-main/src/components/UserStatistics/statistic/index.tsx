import './style.css'

interface Props {
    title: string
    period: string
    currentTime: number
    previousTime: number

}

export default function Statistic (props: Props) {

    const titleToClass = (title: string): string => {
        const lowerCase = title.toLowerCase();
       
        return lowerCase.replace(' ', '-');
    }
    
    
    return(
        <div className={`${titleToClass(props.title)} statistic`}>
            <div className="statistic-info">
                <div className="statistic-header">
                    <p>{props.title}</p>
                    <a href=""></a>
                </div>
                <div className="time-info">
                    <p className="current-time">{props.currentTime}hrs</p>
                    <span className="previous-time">last {props.period} - {props.previousTime}hrs</span>
                </div>
            </div>

        </div>
    )
}