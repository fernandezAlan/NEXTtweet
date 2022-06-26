import Tweet from "../../../components/Tweet/index";
import Header from "../../../components/Header";
import { getTweetsById } from "../../../firebase/admin/querys/tweetsQuerys";

export default function TweetDetail(props) {
  return (
    <>
      <Header title={"Tweet"} />
      <section>
        <Tweet
          message={props.content}
          userId={props.userId}
          tweetId={props.id}
          date={props.createdAt}
          downloadImageURL={props.downloadImageURL}
          comentCounts={props.comentCounts}
          likeCounts={props.likeCounts}
          shareCounts={props.shareCounts}
          principal
        />
      </section>
      {props.coments.length
        ? props.coments.map((coment) => (
            <Tweet
              key={coment.id}
              message={coment.content}
              userId={coment.userId}
              tweetId={coment.id}
              date={coment.createdAt}
              downloadImageURL={coment.downloadImageURL}
              comentCounts={coment.comentCounts}
              likeCounts={coment.likeCounts}
              shareCounts={coment.shareCounts}
            />
          ))
        : null}
      <style jsx>{`
        section {
          margin-top: 50px;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const tweet = await getTweetsById(id);
  if (tweet.coments.length) {
    const promises = tweet.coments.map(async (comentId) => {
      return await getTweetsById(comentId);
    });
    const coments = await Promise.all(promises);
    tweet.coments = coments;
  }
  return { props: tweet };
}
