import { Comment, Data } from "../../interfaces/interfaces"
import iconReply from '../../assets/images/icon-reply.svg'
import iconDelete from '../../assets/images/icon-delete.svg'
import iconEdit from '../../assets/images/icon-edit.svg'
import { MessageScore } from "./MessageScore";
import { useState } from "react";
import ChatFooter from "../ChatFooter";

interface MessageProps {
    commentInfo: Comment;
    data: Data
    replie?: boolean;
    commentId? : number;
    setScore: (e: React.MouseEvent<HTMLSpanElement>, commentId: number, replieId?:number) => void;
    deleteComment: (id: number, parentId?: number) => void;
    createComment: (comment: Comment, id?: number) => void
    updateComment: (content: string, id: number) => void
}
export default function Message({commentInfo, commentId, replie = false, data, setScore, deleteComment, createComment, updateComment}: MessageProps){
    const [reply, setReply] = useState(false)
    const [edit, setEdit] = useState(false)


    const handleDelete = (replie: boolean) => {

        return(
            !replie ?
            deleteComment(commentInfo.id) :
            deleteComment(commentInfo.id, commentId)
        )
            
    }

    return(
        <>        
            <div className={replie ? `message replie` : 'message'}>
                <header>
                    <img src={commentInfo.user.image.webp} alt="user image" />
                    <p>{commentInfo.user.username}</p>
                    <span>{commentInfo.createdAt}</span>
                </header>
                <div className="message-content">
                    {commentInfo.content}
                </div>
                <footer>
                    <MessageScore 
                        score={commentInfo.score} 
                        setScore={setScore}
                        commentId={commentInfo.id}  
                        fatherCommentId={commentId}
                        replie
                    />
                    {
                        commentInfo.user.username === data.currentUser.username
                        ?
                        <div className="control-message">
                            <span className="edit-message"
                                onClick={() => setEdit(true)}
                            >
                                <img src={iconEdit} alt="edit comment" />
                                Edit
                            </span>
                            <span className="delete-message"
                                onClick={() => handleDelete(replie)}
                            >
                                <img src={iconDelete} alt="delete comment"/>
                                Delete
                            </span>    
                        </div>
                        :
                        <div className="reply" onClick={() =>{ 
                            setReply(!reply)
                            }}>
                            <img src={iconReply} alt="reply icon" />
                            Reply
                        </div>
                    }
                </footer>
            </div>

            {
                reply &&
                <ChatFooter 
                    data={data} 
                    id={commentInfo.id} 
                    setReply={setReply} 
                    reply={reply} 
                    createComment={createComment}
                />
            }

            {
                edit &&
                <ChatFooter 
                    data={data} 
                    id={commentInfo.id} 
                    setEdit={setEdit} 
                    edit={edit} 
                    updateComment={updateComment}
                    content={commentInfo.content}
                />
            }
        </>

    )
}