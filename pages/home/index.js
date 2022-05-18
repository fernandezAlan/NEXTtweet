import AppLayout from "../../components/AppLayout/index";
import { useState, useEffect } from "react";
import Tweet from "../../components/Tweet";
import { getTweet } from "../../firebase/client";
import { breakpoints } from "../../styles/theme";
export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    getTweet().then(setTimeline);
  }, []);

  return (
    <>
      <AppLayout>
        <header>
          <h2>inicio</h2>
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
            />
          ))}
        </section>
        <nav>nav</nav>
      </AppLayout>
      <style jsx>{`
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
        }
        h2 {
          font-size: 21px;
          font-weight: 800;
        }

        nav {
          bottom: 0;
          border-top: 1px solid #ccc;
          position: fixed;
          height: 49px;
          width: 100%;
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
