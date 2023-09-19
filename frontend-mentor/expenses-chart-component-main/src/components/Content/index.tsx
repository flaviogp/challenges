import { Data } from "../../interfaces";
import Chart from "./Chart";
import Total from "./Total";


interface ContentProps{
    data: Data;
}
export default function Content({data}:ContentProps){
    return(        
    <div className="content">
        <h1>Spending - Last 7 days</h1>
        <Chart data={data}/>
        <Total />
    </div>
)
}