import Tweet from "../../../components/Tweet/index";
export default function TweetDetail(props) {
  return (
    <Tweet
      avatar={props.avatar}
      message={props.content}
      id={props.userId}
      username={props.userName}
      date={props.createdAt}
      displayName={props.displayName}
      downloadImageURL={props.downloadImageURL}
    />
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const apiResponse = await fetch(`http://localhost:3000/api/tweets/${id}`);
  if (apiResponse.ok) {
    const props = await apiResponse.json();
    return { props };
  }
}
