const request = require('supertest');
const app = require('/home/asplap3256/twisks-be/server.js'); 
const allUserService = require('../service/allUser.service');


jest.mock('../service/allUser.service', () => ({
  fetchAllUser: jest.fn(),
  allUser: jest.fn(),
  blockUser: jest.fn(),
  unblockUser: jest.fn(),
  unblockPost: jest.fn(),
  totalUserCount: jest.fn(),
  activeUserCount: jest.fn(),
  newUserCount: jest.fn(),
}));


describe('All User Routes', () => {
 
    it('should return all users', async () => {
      
   const expectedResponse=  allUserService.fetchAllUser.mockResolvedValue([
        {
          "_id": "647ea80cc082c015ea5679c8",
          "userName": "pirai",
          "profilePhoto": "648aa6bfd8e28ead95cbc660_star.jpg",
          "followersCount": 3,
          "followingCount": 1
      },
      {
          "_id": "647eb6dbc082c015ea5679c9",
          "userName": "priya",
          "profilePhoto": "648aa6bfd8e28ead95cbc660_star.jpg",
          "followersCount": 3,
          "followingCount": 1
      },
      
      ]);
      const response = (await request(app).get('/user/allUsers'));
      expect(response.status).toBe(200);
      expect(response.body.status).toBe(1);
      expect(response.body.message).toBe('Successfully fetched User Profile Details');
      expect(response.body.allUser).toHaveLength(2);
    });
  

  describe('GET /user/usersForReport', () => {
    it('should return users with reports', async () => {
      allUserService.allUser.mockResolvedValue([
        { _id: 1, userName: 'user1', reportsUser: ['report1', 'report2'] },
        { _id: 2, userName: 'user2', reportsUser: ['report3'] },
      ]);
      const response = await request(app).get('/user/usersForReport');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe(1);
      expect(response.body.message).toBe('Successfully fetched User Profile Details');
      expect(response.body.allUsers).toHaveLength(2);
    });
  });
  describe('GET /user/block/:id', () => {
    it('should block the user', async () => {
      allUserService.blockUser.mockResolvedValue({ blocked: true });
      const response = await request(app).get('/user/block/1');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe(1);
      expect(response.body.message).toBe('Blocked User');
      expect(response.body.block.blocked).toBe(true);
    });
  });
  describe('GET /user/unblock/:id', () => {
    it('should unblock the user', async () => {
      allUserService.unblockUser.mockResolvedValue({ blocked: false });
      const response = await request(app).get('/user/unblock/1');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe(1);
      expect(response.body.message).toBe('UnBlocked User');
      expect(response.body.unblock.blocked).toBe(false);
    });
  });

  describe('GET /user/unblockPost/:id', () => {
    it('should unblock the post', async () => {
      allUserService.unblockPost.mockResolvedValue({ blocked: false });
      const response = await request(app).get('/user/unblockPost/1');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe(1);
      expect(response.body.message).toBe('Unblocked Post');
      expect(response.body.unblockPost.blocked).toBe(false);
    });
  });
  describe('GET /user/allCounts', () => {
    it('should return user counts', async () => {
      allUserService.totalUserCount.mockResolvedValue([
        { _id: 1, cumulativeCounts: 10, month: 'Jan' },
        { _id: 2, cumulativeCounts: 20, month: 'Feb' },
      ]);
       allUserService.activeUserCount.mockResolvedValue(50)
      allUserService.newUserCount.mockResolvedValue([
        { _id: 1, newCounts: 5, month: 'Jan' },
        { _id: 2, newCounts: 10, month: 'Feb' },
      ]);
      const response = await request(app).get('/user/allCounts');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe(1);
      expect(response.body.message).toBe('Users Count');
      expect(response.body.count).toHaveLength(1);
      expect(response.body.count[0].totalUserCount).toHaveLength(2);
      expect(response.body.count[0].activeUserCount).toBe(50);
      expect(response.body.count[0].newUserCount).toHaveLength(2);
    });
  });
});
