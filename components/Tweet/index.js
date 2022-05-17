import Avatar from "../Avatar/index";
export default ({ avatar, username, message, id }) => {
  return (
    <>
      <article key={id}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <div>
          <strong>{username}</strong>
          <p>{message}</p>
        </div>
      </article>
      <style jsx>{`
        article {
          padding: 10px 15px;
          display: flex;
        }
        div {
          padding: 10px;
        }
      `}</style>
    </>
  );
};
