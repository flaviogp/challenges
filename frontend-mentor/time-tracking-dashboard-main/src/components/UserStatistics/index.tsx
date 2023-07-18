
import './style.css'

import data from '../../data/data.json'

import Statistic from './statistic'

interface Props {
    period: string
}

export default function UserStatistics (props: Props) {
    return(
        <div className="user-statistics">
            {
                data.map(item => <Statistic 
                    title={item.title}
                    period={props.period}
                    currentTime={item.timeframes[props.period as keyof typeof item.timeframes].current}
                    previousTime={item.timeframes[props.period as keyof typeof item.timeframes].previous}
                    key={item.title}
                    />)
            }
        </div>
    )
}



    // const RenderStatistic = (data: object[], period: string) => {
    //     if(period === 'daily'){
    //         return data.map(item => <Statistic 
    //                 title={item.title}
    //                 period={props.period}
    //                 currentTime={item.timeframes.daily.current}
    //                 previousTime={item.timeframes.daily.previous}
    //                 />)
    //     }else if(period === 'weekly'){
    //         return data.map(item => <Statistic 
    //                 title={item.title}
    //                 period={period}
    //                 currentTime={item.timeframes.weekly.current}
    //                 previousTime={item.timeframes.weekly.previous}
    //                 />)
    //     } else {
    //         return data.map(item => <Statistic 
    //                 title={item.title}
    //                 period={period}
    //                 currentTime={item.timeframes.monthly.current}
    //                 previousTime={item.timeframes.monthly.previous}
    //                 />)
    //     }
    // }