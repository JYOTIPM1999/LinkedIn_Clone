import { UserModel } from "../models/User.model.js";

export const signupUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    return res.status(200).send({ message: "Signup successful" });
  } catch (e) {
    return res.status(500).send({ message: "Error while Signing up" });
  }
};
