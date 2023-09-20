import { Data } from '../../../interfaces/index'
import { getPercentTotalLastMonth, getTotal } from '../../../utils/total-accounts';

interface TotalProps{
    data: Data;
}
export default function Total({data}: TotalProps){


    return(        
    <footer role="contentinfo" className="total">
        <div className="total-month">
            <p>Total this month</p>
            <span>${getTotal(data)}</span>
        </div>
        <div className="total-percent-month">
            <span>{getPercentTotalLastMonth(230.4, data)}</span>
            <p>from last month</p>
        </div>
    </footer>
)
}