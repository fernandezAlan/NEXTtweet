import css from "styled-jsx/css";
import { breakpoints, fonts, colors } from "../../styles/theme";

import { addOpacityToColor } from "../../styles/utils";

const backgroundColor = addOpacityToColor(colors.primary, 0.3);
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
  textarea,
  input {
    font-family: ${fonts.base};
  }
`;
export default css`
  div {
    display: flex;
    height: 100%;
    justify-content: center;
  }
  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 10px 25px rgb(0, 0, 0, 0.1);
    height: 100%;
    min-height: 100vh;
    width: 350px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    main {
      height: 100%;
      width: 100%;
    }
  }
`;
