module.exports = app => {
  return {
    port: process.env.PORT || 3000,
    db: {
      uri: process.env.MONGODB_URI || "mongodb://localhost/myapp"
    },
    jwtSecret: process.env.JWT_SECRET || "M3rcury-AP1",
    jwtSession: process.env.JWT_SESSION ||{ session: false }
  }
};
