import Avatar from "../Avatar/index";
import { getTimeAgo } from "../../utils";
import IconsContainer from "../IconsContainer";
import DeleteIcon from "../Icon/DeleteIcon";
export default function Tweet({
  avatar,
  displayName = "usuario_desconocido",
  username,
  message,
  id,
  date,
  downloadImageURL,
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
            <DeleteIcon />
          </div>
          <span>
            <p>{username && `@${username}`}</p>
          </span>
          <p>{message}</p>
          {downloadImageURL && <img src={downloadImageURL} />}

          <IconsContainer />
        </section>
      </article>
      <style jsx>{`
        img {
          width: 100%;
          border-radius: 15px;
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 0;
        }
        strong {
          width: 50%;
          font-size: 15px;
          font-weight: 600;
        }
        article {
          margin-bottom: 25px;
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
