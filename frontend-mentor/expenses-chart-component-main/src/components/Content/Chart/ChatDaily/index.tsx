import { useState } from "react";
import { setStyleChartBar } from "../../../../utils/chart-bar";
interface ChartDailyProps{
    amount: number;
    day: string
}

export default function ChartDaily({amount, day}: ChartDailyProps){
    const [viewAmount, setViewAmount] = useState(false)


    return(        
        <div className="daily">
            <div 
                style={setStyleChartBar(amount)}
                className="chat-bar"
                onMouseEnter={() => setViewAmount(true)}
                onMouseOut={() => setViewAmount(false)}
            >
                {viewAmount && <span className="amount">{`$${amount}`}</span>}
            </div>
            <p>{day}</p>
        </div>
    )
}