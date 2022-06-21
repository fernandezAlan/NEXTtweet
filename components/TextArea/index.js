export default function TextArea({
  placeholder,
  size = "M",
  value,
  onChange,
  onFocus,
}) {
  const SIZES = {
    S: "100px",
    M: "150px",
    L: "200px",
  };
  return (
    <>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      ></textarea>
      <style jsx>{`
        textarea {
          background-color: white;
          border: 0px;
          height: 20vh;
          outline: none;
          width: ${SIZES[size]};
          resize: none;
          font-size: 20px;
          margin: 20px;
        }
        ::placeholder {
          font-size: 20px;
        }
      `}</style>
    </>
  );
}
