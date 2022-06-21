export default function TweetNotFound({ message }) {
  return (
    <>
      <div>{message}</div>
      <style jsx>{`
        div {
          height: 50px;
          width: 200px;
          padding: 10px;
          background-color: #0099ff2b;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px auto 20px auto;
        }
      `}</style>
    </>
  );
}
