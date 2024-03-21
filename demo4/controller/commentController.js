const commment = require("../modle/commentModule");
const post = require("../modle/postModule");

exports.createCommentController = async (req, res) => {
  try {
    const { user, post, body } = req.body;

    const comment = new Comment({
      post,
      user,
      comment,
    });

    const savedData = await comment.save();

    const udatedPost = await post.findByIdAndUpdate(
      post,
      { $push: { commment: savedData._id } },
      { new: true }
    ).populate("comment").exec();
  } catch (error) {
    console.log(error);
  }
};
