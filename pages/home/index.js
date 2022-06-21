import { useState, useEffect } from "react";
import Tweet from "../../components/Tweet";
import { getTweet } from "../../firebase/client/client";
import { breakpoints } from "../../styles/theme";
import useUser from "../../hooks/useUser";
import Avatar from "../../components/Avatar";
import { useRouter } from "next/router";
import { getFollowedUsersTweets } from "../../firebase/client/query/tweetsQuerys";
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
        setTimeline
      );
    }
  }, [user]);

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
            <Tweet
              key={tweet.id}
              message={tweet.content}
              tweetId={tweet.id}
              date={tweet.createdAt}
              downloadImageURL={tweet.downloadImageURL}
              comentCounts={tweet.comentCounts}
              userId={tweet.userId}
              likeCounts={tweet.likeCounts}
              shareCounts={tweet.shareCounts}
            />
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
