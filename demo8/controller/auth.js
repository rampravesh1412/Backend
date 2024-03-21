const User = require("../modle/userSchema");
const bcrypt = require("bcrypt");

exports.singup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });

    //verify the user are already exists or not
    if (existingUser) {
      return res.status(400).json({
        sucess: false,
        message: "This email are already used",
      });
    }

    //secure password
    let hashPassword;
    try {
      hashPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        sucees: false,
        message: "We are facing the securing the password issue",
      });
    }

    // create user Entry

    const user = await User.create({
      name,
      password: hashPassword,
      email,
      role,
    });

    return res.status(200).json({
      sucess: true,
      message: "user created sucessfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "user are not create we are facing the some issue",
    });
  }
};
