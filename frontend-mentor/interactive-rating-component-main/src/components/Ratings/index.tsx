
import { ChangeEvent } from "react"
import Rate from "./Rate"

interface RatingsProps {
    setRate: (value: number) => void
}

const Ratings = ({setRate}: RatingsProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRate(Number(e.currentTarget.id))
    }

    return(
        <div className="ratings">
            <Rate num={'1'} handleChange={handleChange}/>        
            <Rate num={'2'} handleChange={handleChange}/>        
            <Rate num={'3'} handleChange={handleChange}/>        
            <Rate num={'4'} handleChange={handleChange}/>        
            <Rate num={'5'} handleChange={handleChange}/>        
        </div>
    )
}

export default Ratings