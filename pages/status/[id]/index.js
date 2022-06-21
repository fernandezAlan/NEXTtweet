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
  const apiResponse = await fetch(`http://localhost:3000/api/tweets/${id}`);

  if (apiResponse.ok) {
    const response = await apiResponse.json();
    if (response.coments.length) {
      const promises = response.coments.map(async (comentId) => {
        return await getTweetsById(comentId);
      });
      const coments = await Promise.all(promises);
      response.coments = coments;
    }
    return { props: response };
  }
}
