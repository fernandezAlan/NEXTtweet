import { auth } from "../firebase/client/auth";

export const getAllTweets = () => {
  return new Promise((resolve, reject) => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:3000/api/tweets", config)
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();

          resolve(data);
        } else reject(new Error("server error"));
      })
      .catch((error) => reject(error));
  });
};

export const deleteTweet = async ({ tweetId }) => {
  const token = await auth.currentUser.getIdToken();
  const config = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tweetId }),
  };
  return fetch(`http://localhost:3000/api/tweets/delete`, config);
};

export const addShareTweet = async ({ tweetId }) => {
  const token = await auth.currentUser.getIdToken();
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tweetId }),
  };
  return fetch(`http://localhost:3000/api/tweets/share`, config);
};

export const unshareTweet = async ({ tweetId }) => {
  const token = await auth.currentUser.getIdToken();
  const config = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tweetId }),
  };
  return fetch(`http://localhost:3000/api/tweets/share`, config);
};

export const createNewTweet = async (tweetData) => {
  const token = await auth.currentUser.getIdToken();
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tweetData),
  };
  return fetch(`http://localhost:3000/api/tweets/create`, config);
};
