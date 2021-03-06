import { colors } from "../../styles/theme";
export default function Avatar({
  src,
  alt,
  text,
  withText,
  size = "m",
  onClick,
  displayName,
  userName,
}) {
  const SIZES = {
    s: "32px",
    m: "49px",
    l: "78px",
  };
  return (
    <>
      <div onClick={onClick}>
        <img src={src} alt={alt} title={alt} />
        {displayName && (
          <section>
            <strong>
              <p>{displayName}</p>
            </strong>
            <span>
              <p>{`@${userName}`}</p>
            </span>
          </section>
        )}
      </div>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          width: 100px;
        }
        span {
          color: ${colors.gray};
        }
        div {
          display: flex;
        }
        img,
        object {
          width: ${SIZES[size]};
          height: ${SIZES[size]};
          border-radius: 9999px;
          object-fit: cover;
          margin-right: ${displayName ? "10px" : "0px"};
          cursor: pointer;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100px;
          margin: 0px;
        }
      `}</style>
    </>
  );
}
