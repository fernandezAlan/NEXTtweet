export default function ErrorMessage({ message }) {
  return (
    <>
      <span>{message}</span>
      <style jsx>{`
        span {
          width: 200px;
          background-color: #ff00002e;
          border: solid 1px red;
          padding: 10px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
