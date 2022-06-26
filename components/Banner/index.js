import { colors } from "../../styles/theme";
export default function Banner({ imgURL, children }) {
  return (
    <>
      {imgURL ? (
        <img src={imgURL} alt="imagen_banner" />
      ) : (
        <div>{children}</div>
      )}
      <style jsx>{`
        div {
          margin-top: 50px;
          background-color: ${colors.primary};
          width: 100%;
          height: 15vh;
        }
      `}</style>
    </>
  );
}
