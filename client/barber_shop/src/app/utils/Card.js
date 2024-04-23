import React from "react";

const Card = ({ image, title, discription }) => {
  return (
    <div className=" my-3 mx-2 bg-gray-50 p-9 py-12 text-center flex flex-col gap-5 justify-center items-center">
      <img className=" h-16" src='/assets/icons/razor.png' />
      <p className=" text-2xl font-bold tracking-wider ">Moustache Trim</p>
      <p className=" text-sm font-medium text-gray-500 tracking-wider">
        Moustache Trim Lorem vulputate massa ons amet ravida haretra nuam the
        drana miss uctus enec accumsan aliquam sit sapien.
      </p>
    </div>
  );
};

export default Card;
