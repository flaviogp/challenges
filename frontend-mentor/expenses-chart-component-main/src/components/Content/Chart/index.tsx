
import {Fragment} from 'react'
import { Data } from "../../../interfaces";
import ChartDaily from "./ChatDaily";

interface ChartProps{
    data: Data;
}
export default function Chart({data}: ChartProps){
    return(        
        <div className="chart">
            {data.map(data =>{ 
                return(
                    <Fragment key={data.day}>
                        <ChartDaily
                            amount={data.amount} 
                            day={data.day}
                        />
                    </Fragment>
                )
            })}
        </div>
    )
}