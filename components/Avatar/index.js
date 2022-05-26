export default function Avatar({ src, alt, text, withText, size = "m" }) {
  const SIZES = {
    s: "32px",
    m: "49px",
    l: "78px",
  };
  return (
    <>
      <div>
        <img src={src} alt={alt} title={alt} />
        {withText && <strong>{text || alt}</strong>}
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: ${withText ? "center" : "flex-start"};
          align-items: center;
          width: auto;
        }
        img {
          width: ${SIZES[size]};
          height: ${SIZES[size]};
          border-radius: 9999px;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}
