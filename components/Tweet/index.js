import Avatar from "../Avatar/index";
import { getTimeAgo } from "../../utils";
import IconsContainer from "../IconsContainer";
export default function Tweet({
  avatar,
  displayName = "usuario_desconocido",
  username,
  message,
  id,
  date,
}) {
  return (
    <>
      <article key={id}>
        <Avatar src={avatar} alt={username} />
        <section>
          <div>
            <strong>
              <p>{displayName}</p>
            </strong>
            <time>{getTimeAgo(date.toMillis())}</time>
            <span>{"°°°"}</span>
          </div>
          <span>
            <p>{username && `@${username}`}</p>
          </span>
          <p>{message}</p>
          <IconsContainer />
        </section>
      </article>
      <style jsx>{`
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 0;
        }
        strong {
          font-size: 15px;
          font-weight: 600;
        }
        article {
          width: 100%;
          padding: 10px 15px;
          display: flex;
        }
        section {
          width: 100%;
          padding: 10px;
        }
        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        span,
        time {
          color: rgb(83, 100, 113);
        }
      `}</style>
    </>
  );
}
