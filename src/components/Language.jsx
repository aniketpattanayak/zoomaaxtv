import { useState } from "react";

const Language = () => {
  const languages = [
    "English", "ಕನ್ನಡ", "বাংলা", "తెలుగు", "हिंदी", "Nederlands",
    "தமிழ்", "한국인", "polski", "عربي", "Deutsch", "Türkçe",
    "മലയാളം", "italiano", "dansk", "français", "español", "แบบไทย"
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      <h1 className="text-2xl font-[Gilroy-Extrabold] mb-6">Choose the Language</h1>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-lg">
        {languages.map((language) => (
          <button
            key={language}
            className={`flex justify-center items-center px-4 py-3 w-[30%] rounded-lg text-lg  transition hover:cursor-pointer 
                        ${selectedLanguage === language ? "bg-[#53C0EA] text-white" : "bg-white text-black"}
                        `}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Language;
