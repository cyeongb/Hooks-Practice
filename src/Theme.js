import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "lightBlue",
    background: "lightYellow",
  },
  dark: {
    foreground: "gray",
    background: "violet",
  },
};

const ThemeContext = React.createContext(themes.light);

const Theme = () => {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemeButton />
    </div>
  );
};

const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.color }}>
      This is styled by theme Context ~~~
    </button>
  );
};
export default Theme;
