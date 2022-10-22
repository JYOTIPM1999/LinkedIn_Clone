import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@blogweb-shard-00-00.ch1hk.mongodb.net:27017,blogweb-shard-00-01.ch1hk.mongodb.net:27017,blogweb-shard-00-02.ch1hk.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-lhtsci-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (e) {
    console.log("Error while connecting with mongodb", e);
  }
};
