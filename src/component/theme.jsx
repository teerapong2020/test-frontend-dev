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
          <Link to={"/"} className="text-blue-300 text-5xl">หน้าหลัก</Link>
        </button>
        <button onClick={handleSwitch} className="text-red-700 text-4xl bg-yellow-400 ">swtich</button>
      </div>
    </div>
  );
}
