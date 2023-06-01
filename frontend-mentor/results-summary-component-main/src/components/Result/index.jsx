
import * as C from './style'


export default function Result() {
    return(
        <C.Result>
            <h2>Your Result</h2>
            <C.Score>
                <p>76</p>
                <span>of 100</span>
            </C.Score>
            <C.ResultInfo>
                <p>Great</p>
                <span>
                    You scored higher than 65% of the people who 
                    have taken these test
                </span>
            </C.ResultInfo>
        </C.Result>
    )
}
