import { Fragment } from "react";
import { Comment, Data } from "../../interfaces/interfaces"
import Message from '../Message'


interface ChatContainerProps {
    data: Data;
    setScore: (e: React.MouseEvent<HTMLSpanElement>, commentId: number, replieId?:number) => void;
    deleteComment: (id: number, parentId?: number) => void
    createComment: (comment: Comment, id?: number) => void
    updateComment: (content: string, id: number) => void
}
export default function ChatContainer({data, setScore, deleteComment, createComment, updateComment}: ChatContainerProps){

    return(
        <div className="chat-container">
            {
            data.comments
                .map((comment) => {
                    return(
                        <Fragment key={comment.id}>
                            <Message 
                                commentInfo={comment} 
                                data={data}
                                setScore={setScore}
                                deleteComment={deleteComment}
                                createComment={createComment}
                                updateComment={updateComment}
                                />
                            {
                                comment.replies && comment.replies.length >= 1 &&
                                comment.replies.map(replie =>{
                                    
                                    return(
                                        <div className="replies-container" key={replie.id}>
                                            <Message 
                                                commentInfo={replie} 
                                                data={data} 
                                                replie={true} 
                                                commentId={comment.id}
                                                setScore={setScore}
                                                deleteComment={deleteComment}
                                                createComment={createComment}
                                                updateComment={updateComment}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Fragment>
                    )

                }
                )
            }
        </div>
    )
}