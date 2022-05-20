import Avatar from "../Avatar/index";
import { getTimeAgo } from "../../utils";
import IconsContainer from "../IconsContainer";
import DeleteIcon from "../Icon/DeleteIcon";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Tweet({
  avatar,
  displayName = "usuario_desconocido",
  username,
  message,
  id,
  date,
  downloadImageURL,
}) {
  const router = useRouter();
  const handleTweetDetails = () => {
    router.push(`/status/${id}`);
  };
  return (
    <>
      <article key={id}>
        <Avatar src={avatar} alt={username} />
        <section>
          <div>
            <strong>
              <p>{displayName}</p>
            </strong>
            <Link href={`/status/${id}`}>
              <a>
                <time>{getTimeAgo(date)}</time>
              </a>
            </Link>
            <DeleteIcon />
          </div>
          <span>
            <p>{username && `@${username}`}</p>
          </span>
          <div className="content_container" onClick={handleTweetDetails}>
            <p>{message}</p>
            {downloadImageURL && <img src={downloadImageURL} />}
          </div>

          <IconsContainer />
        </section>
      </article>
      <style jsx>{`
        .content_container {
          cursor: pointer;
        }
        a {
          color: #555;
          font-size: 14px;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        img {
          width: 100%;
          border-radius: 15px;
        }
        p {
          overflow: hidden;
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
