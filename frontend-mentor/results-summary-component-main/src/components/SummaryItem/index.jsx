import * as C from './style'

export default function SummaryItem({icon, desc, score}) {
    return(
        <C.SummaryItem desc={desc}>
            <div className="content">
                <div className="info">
                    <img src={icon}  /> {/*alt={`Icon ${desc}`}*/}
                    <p>{desc}</p>
                </div>
                <div className="score-item">
                    <p>
                        {`${score} `}<span>/ 100</span>
                    </p> 
                </div>
            </div>
            <div className="bg"></div>
        </C.SummaryItem>
    )
}