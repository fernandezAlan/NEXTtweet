import { colors } from "../../styles/theme";

export default function Button({ disabled, children, onClick }) {
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          background-color: ${colors.black};
          color: ${colors.white};
          border-radius: 15px;
          padding: 10px;
          cursor: pointer;
          border: solid 1px #000;
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
