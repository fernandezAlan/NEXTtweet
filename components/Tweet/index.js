import Avatar from "../Avatar/index";
import { splitDate } from "../../utils";
export default function Tweet({ avatar, username, message, id, date }) {
  const { day, onlyDate } = splitDate(date);
  return (
    <>
      <article key={id}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <div>
          <strong>{username}</strong>
          <p>{message}</p>
          <time>{`${day},${onlyDate}`}</time>
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
}
