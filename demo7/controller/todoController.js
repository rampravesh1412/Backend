const Todo = require("../modle/modleSchema");

exports.createTodo = async (req, res) => {
  try {
    const { title, discription } = req.body;
    const response = await Todo.create({ title, discription });

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    res.status(500).json({
      success: false,
      data: "internal sever error",
      message: error.message,
      s,
    });
  }
};
