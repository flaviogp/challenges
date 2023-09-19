import { useState } from "react";
import data from '../../../../data/data.json'
interface ChartDailyProps{
    amount: number;
    day: string
}
interface Styles {
    height: string;
    backgroundColor: string
}
export default function ChartDaily({amount, day}: ChartDailyProps){
    const [viewAmount, setViewAmount] = useState(false)

    const setBgColorChartBar = () => {
        let biggestBar = 0;
        data.forEach(item => {
            if(item.amount > biggestBar) biggestBar = item.amount 
        })
        
        return amount === biggestBar ? '#ccc' : '#f00'
    }

    const setStyleChartBar = (): Styles => {
        const heigth = (amount + 50).toFixed(0).toString()
        const bgColor = setBgColorChartBar();
        console.log(heigth, bgColor)
        return {height: `${heigth}px`, backgroundColor: bgColor}
    }
    return(        
        <div className="daily">
            {viewAmount && <span className="amount">{`$${amount}`}</span>}
            <div 
                style={setStyleChartBar()}
                className="chat-bar"
                onMouseEnter={() => setViewAmount(true)}
                onMouseOut={() => setViewAmount(false)}
            ></div>
            <p>{day}</p>
        </div>
    )
}