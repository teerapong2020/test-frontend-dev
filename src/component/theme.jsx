import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function Theme() {
  const [theme, setTheme] = useState(false);
  console.log(theme);
  

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);
  const handleSwitch = () => {
    setTheme(!theme);
    localStorage.setItem("theme", JSON.stringify(!theme));
  };

  return (
    <div>
      <div className={theme?"bg-black h-screen":"bg-white h-screen"} >
        <button>
          <Link to={"/"} className={theme?"bg-gray-600 text-3xl text-white":"bg-gray-600 text-3xl text-white"}>หน้าหลัก</Link>
        </button>
        <div className="flex justify-center h-1/2 items-end ">
        <button onClick={handleSwitch} className="text-red-700 text-6xl bg-yellow-400 p-12 rounded-xl ">swtich</button>
        </div>
      </div>
    </div>
  );
}
