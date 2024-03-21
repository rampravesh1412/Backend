const File = require("../modles/fileModles");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("file is-->", file);

    const path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

    console.log("Path is -->", path);

    file.mv(path, (err) => {
      console.log(err);
    });

    res.status(200).json({
      sucess: true,
      message: "local file uploaded",
    });

    //     console.log("This is file console ->", file);
    // const file = req.files.file;
    //     const splitData = file.name.split(".");
    //     // console.log(splitData);

    //     const path = __dirname + "/files/" + Date.now() + "." + splitData[1];
    //     console.log("Path ->", path);

    //     file.mv(path, (error) => {
    //       console.log(error);
    //     });

    //     res.json({
    //       sucess: true,
    //       message: "local file uploaded",
    //     });
  } catch (error) {
    return res.status(404).json({
      sucess: false,
      message: "we are facing the issue with uploding your file",
    });
  }
};

function isFileTypeSupported(type, supportedType) {
  return supportedType.includes(type);
}

async function uploadFileInCloudinary(file, folder) {
  const options = { folder };
  options.resource_type = "auto";
  console.log("file.tempFilePath==>", file.tempFilePath);
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}
exports.imageUpload = async (req, res) => {
  try {
    //data fetch help of body
    const { name, tag, email } = req.body;
    const file = req.files.imageFile;
    console.log(file);

    // validation
    const supportedType = ["jpeg", "jpg", "png", "gif"];
    const fileType = file.name.split(`.`)[1].toLowerCase();
    console.log("filetype==>", fileType);
    console.log(
      "isFileTypeSupported==>",
      isFileTypeSupported(fileType, supportedType)
    );
    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        sucess: false,
        message: "we are facing the issue in fileType are not supported",
      });
    }

    //file format support
    const response = await uploadFileInCloudinary(file, "rpk");
    console.log("response--->", response);

    // database entry

    const fileData = await File.save({
      name,
      tag,
      email,
      imgUrl: response.secure_url,
    });

    res.status(200).json({
      sucess: true,
      imgUrl: response.secure_url,
      message: "Image has been uploaded successfully.",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      message: `Server error occured! and image have not uploaded`,
    });
  }
};
