import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
// no 4 is in the page.tsx
// 5.here we will use use context
const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.secondary.main,
        color: theme.secondary.text,
      }}
    >
      This is basic context api
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Box;
