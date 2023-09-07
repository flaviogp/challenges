
import { MouseEvent } from 'react';
import iconMinus from '../../../assets/images/icon-minus.svg'
import iconPlus from '../../../assets/images/icon-plus.svg'


interface MessageScoreProps {
    score: number;
    setScore: (e: React.MouseEvent<HTMLSpanElement>, commentId: number, replieId?:number) => void;
    fatherCommentId: number | undefined
    commentId: number
    replie: boolean
}


export const MessageScore = ({score, setScore, fatherCommentId, commentId, replie}: MessageScoreProps) => {

    const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
        return (
            replie ? 
            setScore(e, commentId, fatherCommentId) :
            setScore(e, commentId)
        )
    }

    return(
        <label htmlFor="score">
            <span id='minus' 
                onClick={(e) => handleClick(e)}
            >
                <img src={iconMinus} alt="icon minus" />
            </span>
            <input type="number" name="score" id="score" readOnly value={score}/>
            <span id='plus'
                onClick={(e) => handleClick(e)}
            >
                <img src={iconPlus} alt="icon plus" />
            </span>
        </label>
    )
}