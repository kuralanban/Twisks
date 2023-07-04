// types.ts

export interface CommentNotification {
  _id: string;
  PostuserId: string;
  PostId: string;
  commentedBy: string;
  comment: string;
  username: string;
  postImage: string;
  createdAt: Date;
  updatedAt: Date;
  videoFile:string;
  __v: number;
}

export interface LikeNotification {
  userId: string;
  likedByUsername: string;
  likedPostImage: string;
  _id: string;
  timestamp: Date;
}

export interface FollowerNotification {
  _id: string;
  email: string;
  name: string;
  password: string;
  userName: string;
  accountType: string;
  profilePhoto: string;
  active: boolean;
  blocked: boolean;
  following: string[];
  followers: string[];
  reportsUser: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  userSocketId: string;
  gender: string;
  bioDetails: string;
  dateOfBirth: Date;
  recentSearchedUser: any[];
}
