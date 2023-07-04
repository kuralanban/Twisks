const mongoose = require("mongoose");
const request = require("supertest");
const reportService=require("../service/reported.service");
const app = require("/home/asplap3256/twisks-be/server.js");

jest.mock("../service/reported.service", () => ({
  reportedUser: jest.fn().mockResolvedValue([{ _id:"64869a6f1fb449fb8381e5fc" }]),
  particularReportedPost: jest.fn().mockResolvedValue([{ _id:"64869a6f1fb449fb8381e5fc" }])
 }));

describe('Reported Routes', () => {
  
    it('should get reported user by userId', async () => {
      const userId = '6488024f6422a74e328bd0a3';
      const response = await request(app).get(`/reports/reportedUser/${userId}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        "message": "Successfully fetched User Profile Details",
        "reports": [{ "_id": "64869a6f1fb449fb8381e5fc" }],
        "status": 1
      });
      
    });
  
    it('should get particular reported post by userId', async () => {
      const userId = '64869a6f1fb449fb8381e5fb'; 
      const response = await request(app).get(`/reports/particularReportedPost/${userId}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        "message": "Successfully fetched User Profile Details",
        "particularPost": [{ "_id": "64869a6f1fb449fb8381e5fc" }],
        "status": 1
      });
      
    });
  
   
  });