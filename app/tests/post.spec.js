
// const request = require('supertest');
// const postService = require('../service/post.service');

// const app = require('/home/asplap3275/Desktop/twisks-be/server.js');


// // Mock data for testing
// const mockUser = {
//     _id: 'user-id',
//     following: [
//       { id: 'following-id-1' },
//       { id: 'following-id-2' },
//       { id: 'following-id-3' },
//     ],
//   };
  
//   const mockPosts = [
//     { userId: 'following-id-1', blocked: false, createdAt: new Date() },
//     { userId: 'following-id-2', blocked: false, createdAt: new Date() },
//     { userId: 'following-id-3', blocked: true, createdAt: new Date() },
//   ];
  
//   // Mock the dependencies
//   jest.mock('../models/user.model', () => ({
//     findOne: jest.fn().mockResolvedValue(

//       {
//         _id: 'user-id',
//         following: [
//           { id: 'following-id-1' },
//           { id: 'following-id-2' },
//           { id: 'following-id-3' },
//         ],
//       }
//     ),
//   }));
  
//   jest.mock('../models/post.model', () => ({
//     aggregate: jest.fn().mockResolvedValue(
//       [
//         { userId: 'following-id-1', blocked: false, createdAt: new Date() },
//         { userId: 'following-id-2', blocked: false, createdAt: new Date() },
//         { userId: 'following-id-3', blocked: true, createdAt: new Date() },
//       ]

//     ),
//   }));
  
//   describe('fetchUserFollowingPost', () => {
//     it('should fetch and return posts from users the given user follows', async () => {
//       // Arrange
//       const userId = 'user-id';
  
//       // Act
//       const result = await fetchUserFollowingPost(userId);
  
//       // Assert
//       expect(User.findOne).toHaveBeenCalledWith({ _id: userId });
//       expect(Post.aggregate).toHaveBeenCalledWith([
//         {
//           $match: {
//             userId: { $in: ['following-id-1', 'following-id-2', 'following-id-3'] },
//           },
//         },
//         {
//           $sort: {
//             createdAt: -1,
//           },
//         },
//         {
//           $lookup: {
//             from: 'userdetails',
//             let: { userIdObj: { $toObjectId: '$userId' } },
//             pipeline: [
//               {
//                 $match: {
//                   $expr: {
//                     $eq: ['$_id', '$$userIdObj'],
//                   },
//                 },
//               },
//               {
//                 $project: {
//                   profilePhoto: 1,
//                   userName: 1,
//                   _id: 0,
//                 },
//               },
//             ],
//             as: 'userDetails',
//           },
//         },
//       ]);
//       expect(result).toEqual([mockPosts[0], mockPosts[1]]);
//     });
  
//     it('should return an empty array if all fetched posts are blocked', async () => {
//       // Arrange
//       const userId = 'user-id';
//       const blockedPosts = [{ userId: 'following-id-3', blocked: true, createdAt: new Date() }];
//       Post.aggregate.mockResolvedValue(blockedPosts);
  
//       // Act
//       const result = await fetchUserFollowingPost(userId);
  
//       // Assert
//       expect(result).toEqual([]);
//     });
    
//     it('should return an error message if an error occurs during the process', async () => {
//       // Arrange
//       const userId = 'user-id';
//       const errorMessage = 'An error occurred';
//       User.findOne.mockRejectedValue(new Error(errorMessage));
  
//       // Act
//       const result = await fetchUserFollowingPost(userId);
  
//       // Assert
//       expect(result).toEqual(errorMessage);
//     });
//   });


const request = require('supertest');
const postService = require('../service/post.service');

const app = require('/home/asplap3275/Desktop/twisks-be/server.js');

jest.mock('../service/post.service', () => ({
  fetchUserFollowingPost: jest.fn(),
  saveNewPost: jest.fn(),
  fetchSavedposts: jest.fn(),
}));

describe('GET to test Posts', () => {
  it('should fetch saved posts',  async() => {
    const userId = '123';
   postService.fetchUserFollowingPost.mockResolvedValue([
    {
        "_id": "64942862e3ae309881f1bd18",
        "userId": "648c0780b460fa163572e399",
        "caption": "qwer",
        "fileName": "64942862e3ae309881f1bd17_metroPost.JPG",
        "likes": 0,
        "blocked": false,
        "savedBy": [
            "648c047468d337a95c7b8409",
            "648c0780b460fa163572e399"
        ],
        "reports": [],
        "likedBy": [],
        "createdAt": "2023-06-22T10:54:26.233Z",
        "updatedAt": "2023-06-22T12:10:56.967Z",
        "__v": 0,
        "userDetails": [
            {
                "userName": "kural",
                "profilePhoto": "6493f4cfbe08001982a27fbe_vanibhojan.jpg"
            }
        ]
    }
])
    const response = await request(app).get(`/post/savedPosts/${userId}`); 

    expect(response.statusCode).toBe(200);
    //expect(postService.fetchSavedposts).toHaveBeenCalledWith(userId);
    expect(response.body.message).toBe("Successfully Retrived savedPosts !")
    expect(response.body.status).toBe(1)
    expect(response.body.savedPosts).toHaveLength(1)
  }) 
});

