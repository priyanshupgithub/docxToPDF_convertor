import React from "react";

const App = () => {
  return (
    <>
      <div className="container max-w-screen-2xl flex justify-between items-center mx-auto px-10 md:px-40 h-16 shadow-lg fixed bg-white">
        <div className="">
          <h1 className=" text-2xl font-bold cursor-pointer">
            Word<span className="text-green-600 text-3xl">To</span>PDF
          </h1>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold cursor-pointer hover:scale-125 duration-150">
            Home
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;
