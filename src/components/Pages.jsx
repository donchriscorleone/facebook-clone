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
    <div className="">
      <ul className="flex text-xs justify-center">
        {page.map((p, index) => {
          return (
            <li key={index} className="inline mx-1 hover:underline">
              <a href="#">{p}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pages;
