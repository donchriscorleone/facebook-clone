import React from "react";

const page = [
  "Sign Up",
  "Log In",
  "Messenger",
  "Facebook Lite",
  "Watch",
  "People",
  "Pages",
  "Page Categories",
  "Places",
  "Games",
  "Locations",
  "Marketplace",
  "Facebook Pay",
  "Groups",
  "Jobs",
  "Oculus",
  "Portal",
  "Instagram",
  "Local",
  "Fundraisers",
  "Services",
  "Sources of Voting Information",
  "About this",
  "Create an Ad",
  "Create a Page",
  "Developers",
  "Careers",
  "Privacy",
  "Cookies",
  "Ad Options",
  "The rules",
  "Help",
  "Settings",
];

const Pages = () => {
  return (
    <div className="my-3 w-1/2 h-1/2 text-xs mx-auto">
      {page.map((p, index) => {
        return (
          <span key={index} className="mr-2 hover:underline">
            <a href="#">{p}</a>
          </span>
        );
      })}
    </div>
  );
};

export default Pages;
