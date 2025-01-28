import React, { useState } from "react";
import { FaFileWord } from "react-icons/fa6";
import axios from "axios"

const Body = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convert, setConvert] = useState("");
  const [downloadError, setDownloadError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setConvert("please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await axios.post(
        "http://localhost:3000/convertfile",
        formData,
        {
          responseType: "blob",
        }
      );
      console.log(response.data);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      console.log(url);
      const link = document.createElement("a");
      console.log(link);
      link.href = url;
      console.log(link);
      link.setAttribute(
        "download",
        selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf"
      );
      console.log(link);
      document.body.appendChild(link);
      console.log(link);
      link.click();
      link.parentNode.removeChild(link);
      setSelectedFile(null);
      setDownloadError("");
      setConvert("File Converted Successfully");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status == 400) {
        setDownloadError("Error occurred: ", error.response.data.message);
      } else {
        setConvert("");
      }
    }
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 flex flex-col justify-center items-center h-screen">
        <div className="border-2 border-dashed border-blue-500 p-5 shadow-lg rounded-lg h-[27rem] flex flex-col  items-center">
          <div className="text-center m-3 p-2">
            <h1 className="text-3xl font-bold">Convert Word to PDF Online</h1>
          </div>
          <div className="text-center mb-3">
            <p className="text-sm m-3 ">
              Easily convert Word documents to PDF format online, without having
              to install any software.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <input
              type="file"
              accept=".doc, .docx"
              className="hidden"
              onChange={handleFileChange}
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="w-full bg-gray-100 text-gray-700 flex items-center justify-center px-4 py-6 rounded-lg shadow-lg"
            >
              <FaFileWord className="text-3xl mr-3" />
              <span className="text-xl mr-2">
                {selectedFile ? selectedFile.name : "Choose File"}
              </span>
            </label>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!selectedFile}
            className="text-white bg-blue-500 hover:bg-blue700 disabled:bg-gray-400 disabled:pointer-events-none duration-300  text-lg px-4 py-2 rounded-lg font-bold m-3 mt-6"
          >
            Convert File
          </button>
          {convert && (
            <div className="text-green-500 text-center">{convert}</div>
          )}
          {downloadError && (
            <div className="text-red-500 text-center">{downloadError}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
