import { colors, breakpoints } from "../../../styles/theme";
import Banner from "../../../components/Banner";
import Avatar from "../../../components/Avatar/index";
import ProfileInformation from "../../../components/ProfileInformation";
import Tweet from "../../../components/Tweet";
import {
  getTweetsByUserId,
  getUserById,
} from "../../../firebase/admin/querys/tweetsQuerys";
import useUser from "../../../hooks/useUser";
import HeaderProfile from "../../../components/HeaderProfile";
import FollowButton from "../../../components/FollowButton";
import { useState, useEffect } from "react";
import Spinner from "../../../components/Spinner";
import SharedLabel from "../../../components/SharedLabel";
import TweetNotFound from "../../../components/TweetNotFound";
export default function Profile({ tweets, user }) {
  console.log("tweets", tweets);
  const { user: currentUser } = useUser();
  const sameUser = user.id === currentUser?.uid;
  const followState = user.followers.find(
    (userId) => userId === currentUser?.uid
  );
  const [loading, setLoading] = useState(true);
  const [followsCount, setFollowsCount] = useState(user?.followsCount);
  const [followersCount, setFollowersCount] = useState(user?.followersCount);

  const handleFollowerCount = (type) => {
    switch (type) {
      case "follow":
        setFollowersCount(followersCount + 1);
        break;
      case "unfollow":
        setFollowersCount(followersCount - 1);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (currentUser) setLoading(false);
  }, [currentUser]);

  if (loading)
    return (
      <>
        <div>
          <Spinner />
        </div>
        <style jsx>{`
          div {
            width: 350px;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          @media (max-width: ${breakpoints.mobile}) {
            div {
              width: 100vw;
            }
          }
        `}</style>
      </>
    );

  return (
    <>
      <HeaderProfile name={user.displayName} tweetsLength={tweets.length} />
      <Banner>
        <div className="avatar_container">
          {user?.avatar && <Avatar src={user.avatar} size={"l"} />}
        </div>
      </Banner>

      {!sameUser && (
        <FollowButton
          state={!!followState}
          userId={user.id}
          handleFollowerCount={handleFollowerCount}
        />
      )}
      {user && (
        <ProfileInformation
          name={user.displayName}
          username={user.userName}
          description={user.description}
          followsCount={followsCount}
          followersCount={followersCount}
          sameUser={sameUser}
        />
      )}
      <nav>
        <span>tweets</span>
      </nav>
      <section>
        {tweets.length > 0 &&
          tweets.map((tw) => {
            return (
              <>
                {tw.type === "shared" && (
                  <SharedLabel
                    userId={user.id}
                    currentUserId={currentUser?.uid}
                  />
                )}
                {tw.error ? <TweetNotFound message={tw.error}/>: <Tweet
                  key={tw.id}
                  message={tw.content}
                  tweetId={tw.id}
                  date={tw.createdAt}
                  downloadImageURL={tw.downloadImageURL}
                  originalUserId={tw.originalUserId}
                  userId={tw.userId}
                  comentCounts={tw.comentCounts}
                  likeCounts={tw.likeCounts}
                  shareCounts={tw.shareCounts}
                />}
                
              </>
            );
          })}
      </section>
      <style jsx>{`
        section {
          padding-bottom: 8vh;
        }
        .avatar_container {
          width: 78px;
          height: 78px;
          position: relative;
          top: 60%;
          left: 5%;
          border-radius: 99999px;
        }

        div {
          display: flex;
          flex-direction: column;
        }
        span {
          color: ${colors.gray};
        }
        nav > span {
          color: ${colors.black};
          margin: 15px;
        }
        nav {
          border-top: solid ${colors.gray} 1px;
          padding: 20px;
        }
        @media (max-width: ${breakpoints.mobile}) {
          .avatar_container {
            left: 5%;
          }
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { userId } = params;
  const tweets = await getTweetsByUserId(userId);
  const user = await getUserById(userId);
  const props = {
    tweets,
    user,
  };
  return { props };
}
