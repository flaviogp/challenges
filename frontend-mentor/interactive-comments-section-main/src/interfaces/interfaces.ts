export type Image = { png: string, webp: string }

export type User = { image: Image, username: string }

export type Comment = {
    id: number,
    content: string,
    createdAt: string,
    score: number,
    replyingTo?: string,
    user: User,
    replies?: Comment[]
}


export interface Data {
    currentUser: User,
    comments: Comment[]
}
