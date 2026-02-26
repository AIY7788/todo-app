import IconMoon from "../assets/images/icon-moon.svg?react";
import IconSun from "../assets/images/icon-sun.svg?react";
import { useThemeContext } from "../contexts/context";

function Header() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header className="flex justify-between items-center">
      <h1 className="uppercase font-bold text-gray-50 text-2xl tracking-[0.4em] sm:text-4xl">
        todo
      </h1>
      <div className="flex items-center">
        <input
          onChange={toggleTheme}
          checked={theme === "dark"}
          className="w-0"
          id="toggle_theme"
          type="checkbox"
        />
        <label htmlFor="toggle_theme" className="cursor-pointer overflow-hidden">
          {theme === "light" ? <IconMoon /> : <IconSun />}
        </label>
      </div>
    </header>
  );
}

export default Header;
