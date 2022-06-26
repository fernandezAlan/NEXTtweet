export default function MenuIcon({ onClick }) {
  return (
    <>
      <svg
        onClick={onClick}
        height={30}
        viewBox="0 0 30 30"
        width={30}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m4.5 6.5h12" />
          <path d="m4.498 10.5h11.997" />
          <path d="m4.5 14.5h11.995" />
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
