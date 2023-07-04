export interface postDetails {
    _id:string,
    userId: string,
    username: string,
    caption:string,
    fileName: string,
    likes: Number,
    savedBy: Array<object>,
    reports: Array<object>,
    likedBy: Array<object>
    createdAt: Date

}

