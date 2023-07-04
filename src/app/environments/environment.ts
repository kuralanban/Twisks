export const environment={
  production: false,
  baseUrl:"http://localhost:3000",
  profilePicRetrival:'http://localhost:3000/profile/',
  imgRetrivalPath: 'http://localhost:3000/uploads/',
  userId:sessionStorage.getItem('userId'),
  username:sessionStorage.getItem('username'),
  role:sessionStorage.getItem('role'),
}
