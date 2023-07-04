export interface UserInterface {
  _id:string;
  email: string;
  password: string;
  name: string;
  mobileNumber: number;
  dateOfBirth: Date;
  userName: string;
  accountType: string;
  userSocketId: string;
  bioDetails: string;
  gender: string;
  profilePhoto: string;
  active:boolean;
  blocked:boolean;
  blockedAt:Date;
  reportsUser: Array<reports>;
  followers: Array<followers>;
  following: Array<followers>;
  recentSearchedUser: Array<recentSearch>;
}
export interface followers {
  id: string;
  _id: string;
  createdAt: Date;
}
export interface reports {
  reportedUserId: string;
  reportType: string;
  _id: string;
  createdAt: Date;
}
export interface recentSearch {
  id: string;
}
