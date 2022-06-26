import Tweet from "../../../../components/Tweet";
import ArrowLeftIcon from "../../../../components/Icon/ArrowLeftIcon";
import { breakpoints } from "../../../../styles/theme";
import { getTweetsById } from "../../../../firebase/admin/querys/tweetsQuerys";
export default function SelectedTweet(props) {
  return (
    <>
      <header>
        <ArrowLeftIcon />
      </header>
      <div>
        <Tweet
          message={props.content}
          id={props.id}
          tweetId={props.id}
          date={props.createdAt}
          downloadImageURL={props.downloadImageURL}
          userId={props.userId}
          comentCounts={props.comentCounts}
          principal
          createComend
        />
      </div>
      <style jsx>{`
        div {
          height: auto;
          overflow-y: scroll;
        }
        header {
          height: 49px;
          border-bottom: solid 1px #ccc;
          width: 350px;
          background-color: #fff;
          padding: 0px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
  const { tweetId } = params;
  const props = await getTweetsById(tweetId);
  return { props };
}
