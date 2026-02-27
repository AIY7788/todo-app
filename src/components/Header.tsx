import IconMoon from "../assets/images/icon-moon.svg?react";
import IconSun from "../assets/images/icon-sun.svg?react";
import { useThemeContext } from "../contexts/themeContext";

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
        <label
          key={theme}
          htmlFor="toggle_theme"
          className={`cursor-pointer size-8 flex items-center justify-center animate-[spin_1s_ease-in-out_forwards]`}
        >
          {theme === "light" ? <IconMoon /> : <IconSun />}
        </label>
      </div>
    </header>
  );
}

export default Header;
