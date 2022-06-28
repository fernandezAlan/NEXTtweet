export const addActivityToSessionStorage = ({
  type,
  tweetId,
  targetUserId,
}) => {
  const userActivity = JSON.parse(sessionStorage.getItem("userActivity"));
};
