import {useState } from "react";
import { Data, Comment } from "../../interfaces/interfaces"

interface ChatFooterProps {
    data: Data
    createComment?: (comment: Comment, id?: number) => void;
    id?: number
    setReply?: (value: boolean) => void
    reply?: boolean
    setEdit?: (value: boolean) => void
    edit?: boolean
    updateComment?: (content: string, id: number) => void
    content?: string
}

const randonId = (): number => {
    return Math.floor(Math.random() * 10000)
}


export default function ChatFooter({data, createComment, id, setReply, reply, setEdit, edit, updateComment, content}: ChatFooterProps){
    const [message, setMessage] = useState('')
    const [editMsg, setEditMsg] = useState(edit)
    const handleClick = (id: number | undefined) => {
        const commentId = randonId()
        const commentCreatedAt = new Date().getDate().toString() + 's';
        const comment = {
            id: commentId,
            content: message,
            createdAt: commentCreatedAt,
            score: 0,
            replyingTo: '',
            user: {
              image: { 
                png: data.currentUser.image.png,
                webp: data.currentUser.image.webp
              },
              username: data.currentUser.username
            },
            replies: []
        }

        if(edit){
            if(!updateComment || !id) return
            updateComment(message, id)
            setEdit && setEdit(false)
            setMessage('');
            return;
        }

        if(!createComment) return;
        if(reply){
            const replyingTo = data.comments.find(comment => comment.id === id)?.user.username
            const replie = {...comment, replyingTo: replyingTo}
            createComment(replie, id)
        }else if(!reply){
            createComment(comment)
        }
    
   
        setMessage('')
        setReply && setReply(false)
    }


    return(
        <footer className={reply || edit? "chat-footer chat-reply" : 'chat-footer'}>
            <label htmlFor="comment">
                <input 
                    type="text" 
                    name="comment" 
                    id="comment"
                    value={!editMsg ? message : content}
                    onChange={(e) =>{
                        setEditMsg(false)
                        setMessage(e.currentTarget.value)
                    }}
                />
            </label>
            <div className="image-user">
                <img src={data.currentUser.image.webp} alt="current user image" />
            </div>
            <button 
                type="submit" 
                className="submit-message"
                onClick={() =>handleClick(id)}
                > SEND </button>
        </footer>
    )
}