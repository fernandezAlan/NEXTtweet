import AddComent from "../AddComent";
import Avatar from "../Avatar/index";
import { getTimeAgo, formatDate } from "../../utils";
import IconsContainer from "../IconsContainer";
import DeleteIcon from "../Icon/DeleteIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/user";
import useUser from "../../hooks/useUser";
import { deleteTweet } from "../../services/tweets";
import Message from "../Message";

export default function Tweet({
  message,
  id,
  date,
  downloadImageURL,
  createComend,
  principal,
  tweetId,
  comentCounts,
  userId,
  likeCounts,
  shareCounts,
}) {
  // ---------USE USER------------------
  const { user: currentUser } = useUser();

  // ---------USE STATES----------------
  const [user, setUser] = useState(null);
  const [deleted, setDelected] = useState(false);
  const router = useRouter();

  // ---------HANDLE FUNCTIONS---------
  const handleTweetDetails = () => {
    router.push(`/status/${tweetId}`);
  };
  const goToUserProfile = () => {
    router.push(`/user/${userId}`);
  };
  const handleDeleteTweet = () => {
    deleteTweet({ tweetId }).then(() => {
      setDelected(true);
    });
  };

  // -------USE EFFECT----------------
  useEffect(() => {
    getUserById(userId).then(setUser);
  }, []);

  if (deleted)
    return (
      <>
        <div>
          <Message type={"INFORMATION"} content={"tweet eliminado"} />
        </div>
        <style jsx>{`
          div {
            width: 100%;
            height: 150px;
          }
        `}</style>
      </>
    );
  return (
    <>
      <article key={tweetId}>
        <div>
          <Avatar
            src={user?.avatar}
            alt={user?.username}
            displayName={user?.displayName}
            onClick={goToUserProfile}
            userName={user?.userName}
          />
          {!principal && (
            <Link href={`/status/${tweetId}`}>
              <a>
                <time>{getTimeAgo(date)}</time>
              </a>
            </Link>
          )}
          {currentUser?.uid === user?.id && (
            <DeleteIcon onClick={handleDeleteTweet} />
          )}
        </div>
        <section>
          <div className="content_container" onClick={handleTweetDetails}>
            <p className="content">{message}</p>
            {downloadImageURL && <img src={downloadImageURL} />}
            {principal && <span>{formatDate(date)}</span>}
          </div>
          {!createComend && (
            <IconsContainer
              tweetId={tweetId}
              comentCounts={comentCounts}
              likeCounts={likeCounts}
              shareCounts={shareCounts}
              userId={userId}
            />
          )}
        </section>
      </article>
      {principal && <AddComent tweetId={tweetId} comentCounts={comentCounts}/>}
      <style jsx>{`
        .content {
          font-size: ${principal ? "22px" : "15px"};
          margin-left: ${principal ? "0px" : "48px"};
          white-space: normal;
        }
        .content_container {
          display: flex;
          flex-direction: column;
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
          white-space: nowrap;
          font-size: ${principal ? "20px" : "15px"};
        }
        strong {
          width: 30%;
          font-size: 15px;
          font-weight: 600;
        }
        article {
          margin-bottom: ${principal ? "0px" : "50px"};
          width: 100%;
          padding: 10px 15px;
          display: flex;
          flex-direction: column;
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
        span {
          margin: 15px 0px;
        }
      `}</style>
    </>
  );
}
