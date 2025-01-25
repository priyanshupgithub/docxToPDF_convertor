import React from "react";

const Body = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 flex flex-col justify-center items-center h-screen">
        <div className="border-2 border-dashed border-blue-500 p-5 shadow-lg rounded-lg h-96 flex flex-col  items-center">
          <div className="text-center m-3 p-2">
            <h1 className="text-3xl font-bold">
              Convert Word to PDF Online
            </h1>
          </div>
          <div className="text-center mb-3">
            <p className="text-sm m-3 ">
              Easily convert Word documents to PDF format online, without having
              to install any software.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <input type="file"
            accept=".doc, .docx"
            className=""
            id="fileInput"
            />
            <label htmlFor="fileInput"className="w-full bg-gray-100 text-gray-700 flex items-center justify-center px-4 py-6 rounded-lg shadow-lg"></label>
          </div>
          <button className="text-white bg-blue-500 hover:bg-blue700 disabled:bg-gray-400 disabled:pointer-events-none duration-300  text-lg px-4 py-2 rounded-lg font-bold m-3">Convert File</button>
        </div>
      </div>
    </>
  );
};

export default Body;
