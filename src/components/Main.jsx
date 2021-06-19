import React from "react";
import LoginTag from "./LoginTag";
import Card from "./Card";

function Main() {
  return (
    <div className="flex justify-center items-center gap-x-12 h-full font-serif-Times New Roman bg-gray-100">
      <LoginTag />
      <Card />
    </div>
  );
}

export default Main;
