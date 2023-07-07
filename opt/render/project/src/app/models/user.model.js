module.exports = (mongoose) => {
  const User = mongoose.model(
    "userdetails",
    mongoose.Schema(
      {
        userSocketId: {
          type: String,
        },
        email: {
          type: String,
          required: true,
          lowercase: true,
          unique: [true, { message: "User already exists" }],
        },
        name: {
          type: String,
        },
        password: {
          type: String,
        },
        dateOfBirth: {
          type: Date,
        },
        userName: {
          type: String,
          required: true,
          unique: [true, { message: "Username already taken" }],
        },

        following: [
          {
            id: {
              type: String,
            },
            createdAt: {
              type: Date,
              default: Date.now,
            },
          },
        ],
        followers: [
          {
            id: {
              type: String,
            },
            createdAt: {
              type: Date,
              default: Date.now,
            },
          },
        ],
        reportsUser: [
          {
            reportedUserId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
            reportType: {
              type: String,
            },
            createdAt: {
              type: Date,
              default: Date.now,
            },
          },
        ],
        accountType: {
          type: String,
        },
        profilePhoto: {
          type: String,
        },
        reportsUser: [
          {
            reportedUserId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
            reportType: {
              type: String,
            },
            createdAt: {
              type: Date,
              default: Date.now,
            },
          },
        ],
        active: {
          type: Boolean,
          default: false,
        },
        gender: {
          type: String,
        },
        bioDetails: {
          type: String,
          sparse: true,
        },
        blocked: {
          type: Boolean,
          default: false,
        },
        blockedAt: {
          type: Date,
        },
        recentSearchedUser: [
          {
            id: {
              type: String,
            },
          },
        ],
      },
      { timestamps: true }
    )
  );
  return User;
};
