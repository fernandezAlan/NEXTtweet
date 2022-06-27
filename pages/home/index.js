import { useState, useEffect } from "react";
import Tweet from "../../components/Tweet";
import { breakpoints } from "../../styles/theme";
import useUser from "../../hooks/useUser";
import Avatar from "../../components/Avatar";
import { useRouter } from "next/router";
import {
  getFollowedUsersTweets,
  getTweetById,
} from "../../firebase/client/query/tweetsQuerys";
import SharedLabel from "../../components/SharedLabel";
export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  const { user } = useUser();
  const router = useRouter();
  const goToProfile = (userId) => {
    router.push(`/user/${userId}`);
  };
  useEffect(() => {
    if (user?.userInformation) {
      const followedUsersId = user.userInformation.follows;
      const currentUserId = user.uid;
      getFollowedUsersTweets({ followedUsersId, currentUserId }).then(
        (tweets) => {
          if (tweets.length) {
            setTimeline(tweets);
          } else if (process.env.NODE_ENV === "production") {
            getTweetById({ tweetId: "hZPDy6CyyXqUh1W9UOaH" }).then(
              (welcomeMessage) => {
                setTimeline([welcomeMessage]);
              }
            );
          }
        }
      );
    } else if (user?.userInformation === null) {
      router.push("/edit/profile");
    }
  }, [user]);
  useEffect(() => {
    console.log("timeline", timeline);
  }, [timeline]);

  return (
    <>
      <header>
        <div>
          <Avatar
            src={user?.avatar}
            size={"s"}
            onClick={() => goToProfile(user.uid)}
          />
          <span>inicio</span>
        </div>
      </header>

      <section>
        {timeline.map((tweet) => {
          return (
            <>
              {tweet.type === "shared" && (
                <SharedLabel userId={tweet.userId} currentUserId={user.uid} />
              )}
              <Tweet
                key={tweet.type + tweet.id}
                message={tweet.content}
                tweetId={tweet.id}
                date={tweet.createdAt}
                downloadImageURL={tweet.downloadImageURL}
                comentCounts={tweet.comentCounts}
                userId={tweet.userId}
                likeCounts={tweet.likeCounts}
                shareCounts={tweet.shareCounts}
              />
            </>
          );
        })}
      </section>
      <style jsx>{`
        div {
          width: 30%;
          display: flex;
          justify-content: space-evenly;
        }
        section {
          margin-top: 10vh;
          height: 90vh;
          overflow-y: scroll;
        }
        header {
          border-bottom: 1px solid #ccc;
          height: 49px;
          position: fixed;
          top: 0;
          width: 350px;
          display: flex;
          align-items: center;
          background-color: white;
        }
        span {
          font-size: 21px;
          font-weight: 600;
        }

        @media (max-width: ${breakpoints.mobile}) {
          header {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
