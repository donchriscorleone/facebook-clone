import React from "react";
import LoginTag from "./LoginTag";
import Card from "./Card";

function Main() {
  return (
    <div className="flex justify-center items-center gap-x-2 h-screen font-serif-Times New Roman border-8">
      <LoginTag />
      <Card />
    </div>
  );
}

export default Main;
