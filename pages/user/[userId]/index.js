import ArrowLeftIcon from "../../../components/Icon/ArrowLeftIcon";
import { breakpoints, colors } from "../../../styles/theme";
import Banner from "../../../components/Banner";
import Avatar from "../../../components/Avatar/index";
import ProfileInformation from "../../../components/ProfileInformation";
import Tweet from "../../../components/Tweet";
import {
  getTweetsByUserId,
  getUserById,
} from "../../../firebase/admin/querys/tweetsQuerys";
import { signOut } from "../../../firebase/client/auth";
export default function Profile({ tweets, user }) {
  return (
    <>
      <header>
        <div>
          <ArrowLeftIcon />
        </div>
        <div>
          <strong>Alan Fernandez</strong>
          <span>{`${tweets.length} tweets`}</span>
        </div>
        <button onClick={signOut}>salir</button>
      </header>
      <Banner />
      <div className="avatar_container">
        {user?.avatar && <Avatar src={user.avatar} size={"l"} />}
      </div>
      {user && (
        <ProfileInformation
          name={user.displayName}
          username={tweets[0].userName}
          description={"developer fullstack"}
        />
      )}
      <nav>
        <span>tweets</span>
      </nav>
      <section>
        {tweets.length > 0 &&
          tweets.map((tw) => (
            <Tweet
              key={tw.id}
              avatar={tw.avatar}
              displayName={tw.displayName}
              username={tw.username}
              message={tw.content}
              id={tw.id}
              date={tw.createdAt}
              downloadImageURL={tw.downloadImageURL}
            />
          ))}
      </section>
      <style jsx>{`
        section {
          padding-bottom: 8vh;
        }
        .avatar_container {
          width: 78px;
          height: 78px;
          position: relative;
          bottom: 5%;
          left: 5%;
          border-radius: 99999px;
          border: solid #fff 3px;
        }
        div:first-child {
          margin: 13px;
        }
        header {
          background-color: #fff;
          width: 300px;
          display: flex;
          border-bottom: solid 1px gray;
          height: 50px;
          align-items: center;
          position: fixed;
          z-index: 3;
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
          header {
            width: 100%;
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
