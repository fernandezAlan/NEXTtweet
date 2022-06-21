import { auth } from "../firebase/client/auth";
export const addNewActivity = async ({ type, tweetId, targetUserId }) => {
  const token = await auth.currentUser.getIdToken();
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tweetId, targetUserId }),
  };
  return fetch(`http://localhost:3000/api/activity/${type}`, config);
};
