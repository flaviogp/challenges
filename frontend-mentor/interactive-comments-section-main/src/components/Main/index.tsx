import { useEffect, useState} from "react";
import {Data, Comment} from "../../interfaces/interfaces";
import ChatContainer from "../ChatContainer";
import ChatFooter from "../ChatFooter";

interface MainProps {
    data: Data
}
export default function Main({data}: MainProps){
    const localData = localStorage.getItem('data') === null ? data : JSON.parse(localStorage.getItem('data') as string)
    const [commentsData, setCommentsData] = useState<Data>(localData);
    // const [commentsData, setCommentsData] = useState<Data>(data);
    
    
    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(commentsData))
    },[commentsData])

    const setScore = (e: React.MouseEvent<HTMLSpanElement>, commentId: number, fatherId?:number) => {
        e.preventDefault();
        const id = e.currentTarget.id;
        const newCommentsData = {...commentsData};

            if(fatherId){
                const currentComment = newCommentsData.comments.find(comment => comment.id === fatherId)
                const currentReplie = currentComment?.replies?.find(replie => replie.id === commentId);
                if(!currentReplie) return;
                const newReplie = id === 'plus' ?
                        {...currentReplie, score: currentReplie.score+1}:
                        {...currentReplie, score: currentReplie.score > 0 ? currentReplie.score-1 : currentReplie.score}
                const currentReplieIndex = currentComment?.replies?.indexOf(currentReplie)
                if(typeof currentReplieIndex === 'undefined') return
                if(!currentComment || !currentComment.replies) return;
                currentComment.replies[currentReplieIndex] = newReplie;
                if(!currentComment) return;
                const currentCommentIndex = newCommentsData.comments.indexOf(currentComment)
                newCommentsData.comments[currentCommentIndex] = currentComment
            }else{

                const currentComment = newCommentsData.comments.find(comment => comment.id === commentId)
                if(!currentComment) return;

                const newComment = id === 'plus' ?
                    {...currentComment, score: currentComment.score+1}:
                    {...currentComment, score: currentComment.score > 0 ? currentComment.score-1 : currentComment.score}
                const currentCommentIndex = newCommentsData.comments.indexOf(currentComment)
                newCommentsData.comments[currentCommentIndex] = newComment;
            }
        
        setCommentsData(newCommentsData)
    }

    const createComment = (comment: Comment, id?: number) => {
        
        if(id){
            const newData = {...commentsData}
            const currentComment = newData.comments.find(comment => comment.id === id);
            if(currentComment){
                const currentCommentIndex = newData.comments.indexOf(currentComment)
                currentComment.replies?.push(comment)
                newData.comments[currentCommentIndex] = currentComment
                setCommentsData({...newData})
                return;
            }
            const currentCommentReplie = newData.comments.filter(comment => comment.replies?.find(replie => replie.id === id))[0]
            if(!currentCommentReplie.replies) return;
            const commentIndex = newData.comments.indexOf(currentCommentReplie)
            const currentReplie = currentCommentReplie.replies.find(replie => replie.id === id)
            if(!currentReplie) return;
            const replieIndex = currentCommentReplie.replies.indexOf(currentReplie)
            currentCommentReplie.replies.splice(replieIndex+1, 0, comment);
            newData.comments[commentIndex] = currentCommentReplie
            setCommentsData({...newData})

        }else{
            const newComments = [...commentsData.comments, comment];
            setCommentsData({...commentsData, comments: newComments})
        }
    }

    const deleteComment = (id: number, parentId?: number) => {
        const newCommentsData = {...commentsData}

        if(parentId){
            console.log(parentId, id)
            const currentComment = newCommentsData.comments.find(comment => comment.id === parentId);
            if(!currentComment) return;
            const currentReplie = currentComment.replies?.find(comment => comment.id === id);
            if(!currentReplie) return;
            const currentReplieIndex =  currentComment.replies?.indexOf(currentReplie);
            if(typeof currentReplieIndex === 'undefined') return;
            const currentCommentIndex =  newCommentsData.comments.indexOf(currentComment);
            newCommentsData.comments[currentCommentIndex].replies?.splice(currentReplieIndex, 1)
        }else{
            const currentComment = newCommentsData.comments.find(comment => comment.id === id);
            if(!currentComment) return;
            const currentCommentIndex =  newCommentsData.comments.indexOf(currentComment)
            newCommentsData.comments.splice(currentCommentIndex, 1)

        }
        setCommentsData(newCommentsData)
    }

    const updateComment = (content: string, id: number)=> {
        const newData = {...commentsData}
        const currentComment = newData.comments.find(comment => comment.id === id);

        if(currentComment){
            const currentCommentIndex = commentsData.comments.indexOf(currentComment)
            const newComment = {...currentComment, content: content}
            newData.comments[currentCommentIndex] = newComment
            setCommentsData({...newData})
        }else{
            const currentComment = newData.comments.filter(comment => comment.replies?.find(replie => replie.id === id))[0]
            const currentReplie = currentComment.replies?.find(replie => replie.id === id)
            if(!currentReplie) return;
            const currentReplieIndex = currentComment.replies?.indexOf(currentReplie)
            if(typeof currentReplieIndex === 'undefined') return;
            const currentCommentIndex = newData.comments.indexOf(currentComment)
            const newReplie = {...currentReplie, content: content}
            if(!currentComment.replies) return;
            currentComment.replies[currentReplieIndex] = newReplie;
            newData.comments[currentCommentIndex] = currentComment
            setCommentsData({...newData})
        }

    }

    return(
        <div className="main">
            <ChatContainer 
                data={commentsData} 
                setScore={setScore}
                deleteComment={deleteComment}
                createComment={createComment}
                updateComment={updateComment}
                
            />
            <ChatFooter 
                data={commentsData} 
                createComment={createComment}
                updateComment={updateComment}
                />
        </div>
    )
}