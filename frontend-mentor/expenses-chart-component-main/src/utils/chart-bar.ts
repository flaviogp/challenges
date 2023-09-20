import data from '../data/data.json'
import { Data } from "../interfaces";

interface Styles {
    height: string;
    backgroundColor: string
}


const getBiggestBar = (data: Data) => {
    let biggestBar = 0;
    data.forEach(item => {
        if(item.amount > biggestBar) biggestBar = item.amount 
    })
    return biggestBar
}

const setBgColorChartBar = (amount: number) => {
    const biggestBar = getBiggestBar(data);
    return amount === biggestBar ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'
}

const setHeightChatBar = (amount: number): string => {
    const biggestBar = getBiggestBar(data);
    const calc = ((amount*100) / biggestBar)
    const height = `${calc}%`
    return height
}

export const setStyleChartBar = (amount: number): Styles => {
    const heigth = setHeightChatBar(amount)
    const bgColor = setBgColorChartBar(amount);
    return {height: heigth, backgroundColor: bgColor}
}