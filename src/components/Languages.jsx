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
    <div>
      <ul>
        {languages.map((lang, index) => {
          return (
            <li key={index}>
              <a href="#">{lang}</a>
            </li>
          );
        })}
      </ul>
      <button>+</button>
    </div>
  );
};

export default Languages;
