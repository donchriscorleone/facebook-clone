import React from "react";

const languages = [
  "Filipino",
  "Bisaya",
  "English (US)",
  "Español",
  "日本語",
  "한국어",
  "العربية",
  "Chinese (Simplified)",
  "Português (Brasil)",
  "Français (France)",
  "Deutsch",
];

const Languages = () => {
  return (
    <div className="my-2">
      <ul className="flex justify-center gap-3 text-xs">
        {languages.map((lang, index) => {
          return (
            <li key={index} className="inline hover:underline">
              <a href="#">{lang}</a>
            </li>
          );
        })}
        <li>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Languages;
