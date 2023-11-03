import React from "react";
import { CommandIcon, MoonIcon, SunIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/theme-provider";

function Navbar() {
  // Use context
  const { theme, setTheme } = React.useContext(ThemeContext);

  function toggleDarkmode() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <nav className="flex items-center justify-between max-w-screen-lg mx-auto w-11/12">
      {/* Left side */}
      <ul className="flex items-center py-5 gap-10">
        <Link to={"/"} className="flex items-center gap-2">
          <CommandIcon size={30} />
          <h1 className="font-bold text-2xl">Portfolio.</h1>
        </Link>

        <Link
          to={"/about"}
          className="flex items-center gap-2 hover:underline underline-offset-4"
        >
          <h1 className="text-lg">About</h1>
        </Link>

        <Link
          to={"/projects"}
          className="flex items-center gap-2 hover:underline underline-offset-4"
        >
          <h1 className="text-lg">Projects</h1>
        </Link>

        <Link
           to={"/skills"}
           className="flex items-center gap-2 hover:underline underline-offset-4"
        >
           <h1 className="text-lg">Skills</h1>
        </Link>
      </ul>

      {/* Right side */}
      <ul>
        <button onClick={toggleDarkmode}>
          {theme === "light" ? <MoonIcon size={25} /> : <SunIcon size={30} />}
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
