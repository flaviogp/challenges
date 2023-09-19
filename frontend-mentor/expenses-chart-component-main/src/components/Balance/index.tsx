
interface BalanceProps {
    balance: number
}
export default function Balance ({balance}: BalanceProps){
    return(
        <header role='banner'>
            <div className="balance-info">
                <p>My balance</p>
                <span>{`$${balance}`}</span>
            </div>
            <div className="icon">
                <div className="circle-white"></div>
                <div className="circle-black"></div>
            </div>
        </header>
    )
}