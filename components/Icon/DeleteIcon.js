import { colors } from "../../styles/theme";

export default function DeleteIcon({ onClick }) {
  return (
    <>
      <svg
        height="21"
        viewBox="0 0 21 21"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <g
          fill={"white"}
          fillRule="evenodd"
          stroke={colors.gray}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(3 2)"
        >
          <path d="m2.5 2.5h10v12c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2zm5-2c1.0543618 0 1.91816512.81587779 1.99451426 1.85073766l.00548574.14926234h-4c0-1.1045695.8954305-2 2-2z" />
          <path d="m.5 2.5h14" />
          <path d="m5.5 5.5v8" />
          <path d="m9.5 5.5v8" />
        </g>
      </svg>
      <style jsx>{`
        svg {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
