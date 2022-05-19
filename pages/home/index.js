import AppLayout from "../../components/AppLayout/index";
import { useState, useEffect } from "react";
import Tweet from "../../components/Tweet";
import { getTweet } from "../../firebase/client";
import { breakpoints } from "../../styles/theme";
import Nav from "../../components/Nav";
import useUser from "../../hooks/useUser";
import Avatar from "../../components/Avatar";
export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    getTweet().then(setTimeline);
  }, []);

  return (
    <>
      <AppLayout>
        <header>
          <div>
            <Avatar src={user?.avatar} size={"s"} />
            <span>inicio</span>
          </div>
        </header>

        <section>
          {timeline.map((tweet) => (
            <Tweet
              key={tweet.id}
              avatar={tweet.avatar}
              message={tweet.content}
              id={tweet.id}
              username={tweet.userName}
              date={tweet.createdAt}
              displayName={tweet.displayName}
              downloadImageURL={tweet.downloadImageURL}
            />
          ))}
        </section>
        <Nav />
      </AppLayout>
      <style jsx>{`
        div {
          width: 30%;
          display: flex;
          justify-content: space-evenly;
        }
        section {
          margin-top: 10vh;
        }
        header {
          border-bottom: 1px solid #ccc;
          height: 49px;
          position: fixed;
          top: 0;
          width: 300px;
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
