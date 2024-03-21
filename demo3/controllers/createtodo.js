// import the modles

const Todo = require("../modles/todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, discription } = req.body;
    const response = await Todo.create({ title, discription });
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created SucessFully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};
