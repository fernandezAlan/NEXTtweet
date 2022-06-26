import { messageColors } from "../../styles/theme";

export default function Message({ content, type, size = "M" }) {
  const {
    infoBackground,
    infoColor,
    successColor,
    successBackground,
    warningColor,
    warningBackground,
    errorColor,
    errorBackground,
  } = messageColors;
  const TYPES = {
    INFORMATION: [infoBackground, infoColor],
    WARNING: [warningBackground, warningColor],
    SUCCESS: [successBackground, successColor],
    ERROR: [errorBackground, errorColor],
  };
  const SIZES = {
    S: ["100px", "50px"],
    M: ["200px", "100px"],
    L: ["300px", "250px"],
  };
  return (
    <>
      <section>
        <div>{content}</div>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          width: ${SIZES[size][0]};
          height: ${SIZES[size][1]};
          background-color: ${TYPES[type][0]};
          color: ${TYPES[type][1]};
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
