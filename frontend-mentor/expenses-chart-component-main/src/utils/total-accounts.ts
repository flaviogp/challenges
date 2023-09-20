import { Data } from "../interfaces"


export const getTotal = (data: Data) => {
    let total = 0
    data.forEach(item => total += item.amount)
    return total
}

export const getPercentTotalLastMonth = (TotalLastMounth: number, data: Data): string => {
    let result;
    const percent = ((TotalLastMounth*100) / getTotal(data))
    if(percent > 100){
        result = `+${(percent - 100).toFixed(1)}`
    }else if(percent < 100 && percent > 0){
        result = `${(percent - 100).toFixed(1)}`
    }else if (percent === 0){
        result = '100'
    }
    return `${result}%`

}