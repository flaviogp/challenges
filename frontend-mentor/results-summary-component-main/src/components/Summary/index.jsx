
import { SummaryContainer } from './style';

import SummaryItem from '../SummaryItem';

import data from '../../data/data.json'

export default function Summary() {
    return(
        <SummaryContainer>
            <h2>Summary</h2>
            <div className="summary-items">
                {data.map(item => 
                    <SummaryItem key={item.category} icon={item.icon} desc={item.category} score={item.score}/>
                )}
            </div>
            <button>Continue</button>
        </SummaryContainer>
    )
}