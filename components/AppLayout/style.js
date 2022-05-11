import css from "styled-jsx/css";
import { breakpoints } from "../../styles/theme";
import { fonts,colors } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const backgroundColor= addOpacityToColor(colors.primary,0.3)
export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, #fafafa 1px),
      radial-gradient(${backgroundColor} 1px, #fafafa 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }
  * {
    box-sizing: border-box;
  }
`;
export default css`
  div {
    display: flex;
    height: 100vh;
    justify-content:center;
  }
  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 10px 25px rgb(0, 0, 0, 0.1);
    height: 90%;
    width: 90%;
  }
  @media (min-width: ${breakpoints.mobile}) {
    main: {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`;
