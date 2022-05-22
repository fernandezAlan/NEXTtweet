import { colors } from "../../styles/theme";
export default function Banner({ imgURL }) {
  return (
    <>
      {imgURL ? <img src={imgURL} alt="imagen_banner" /> : <div></div>}
      <style jsx>{`
        div {
          margin-top: 50px;
          background-color: ${colors.gray};
          width: 100%;
          height: 15vh;
        }
      `}</style>
    </>
  );
}
