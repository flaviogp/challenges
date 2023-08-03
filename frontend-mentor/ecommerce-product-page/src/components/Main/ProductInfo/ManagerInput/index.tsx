import { MouseEvent} from "react"

interface Iprops{
    amount: number;
    setAmount: (value: number) => void

}

export function ManagerInput({amount, setAmount}: Iprops) {

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const el = e.target as Element;
        if(el.id === 'minus' && amount <= 0) return setAmount(0);
        if(el.id === 'minus') setAmount(amount - 1)
        if(el.id === 'plus') setAmount(amount + 1)
    }
    return(
        <label htmlFor="qtd-product">
            <div className="icon-minus" id="minus" onClick={e => handleClick(e)}>
            </div>
            <input type="number" name="qtd-product" id="qtd-product" value={amount} readOnly/>
            <div className="icon-plus" id="plus" onClick={e => handleClick(e)}>
            </div>
        </label>
    )
}