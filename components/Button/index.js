import { colors } from "../../styles/theme";

export default function Button({ disabled, children, onClick, color, size }) {
  const SIZES = {
    S: "75px",
    M: "100px",
    L: "250px",
  };
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          background-color: ${color};
          color: ${colors.white};
          border-radius: 10px;
          padding: 10px;
          cursor: pointer;
          border: 0px;
          width: ${size ? SIZES[size] : "auto"};
          text-align: center;
        }
        button > :global(svg) {
          margin-right: 8px;
        }
        button[disabled] {
          opacity: 0.2;
          pointer-events: none;
        }
        button:active {
          background-color: #323232;
          border: solid 1px #323232;
        }
      `}</style>
    </>
  );
}
