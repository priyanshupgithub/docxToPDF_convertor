const express = require("express");
const multer = require("multer");
const docxToPDF = require("docx-pdf");
const path = require("path");

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/convertfile", upload.single("file"), (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "File not uploaded",
      });
    }

    let outputpath = path.join(
      __dirname,
      "files",
      `${req.file.originalname}+.pdf`
    );
    docxToPDF(req.file.path, outputpath, function (err, result) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Error converting docx to pdf.",
          details: err.message,
        });
      }

      res.download(outputpath, () => {
        console.log("File downloaded.");
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.get("/", (req, res) => {
  res.send("Main Page");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
