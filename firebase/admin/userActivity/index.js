import { firestore } from "../admin";

import { Timestamp, FieldValue } from "firebase-admin/firestore";

const userActRef = firestore.collection("userActivity");
const tweetRef = firestore.collection("tweets");
export const createUserActivity = ({ currentUserId }) => {
  return userActRef.doc(currentUserId).set({ createdAccount: Timestamp.now() });
};
export const addUserActivity = async ({
  tweetId,
  currentUserId,
  targetUserId,
  typeActivity,
}) => {
  const doc = await userActRef.doc(currentUserId).get();
  const userActivity = doc.data();
  const userId = `user-id-${targetUserId}`;
  if (userActivity[userId]) {
    switch (typeActivity) {
      case "follow": {
        const path = `${userId}.followStatus`;
        userActRef.doc(currentUserId).update({ [path]: true });
        break;
      }
      case "unfollow":
        {
          const path = `${userId}.followStatus`;
          userActRef.doc(currentUserId).update({ [path]: false });
        }
        break;
      case "like": {
        const tweets = userActivity[userId].tweets;
        const path = `${userId}.tweets`;
        const findedTweet = tweets.find((tw) => tw.tweetId === tweetId);
        if (findedTweet) {
          tweets.forEach((tw) => {
            if (tw.tweetId === tweetId) {
              tw.likeStatus = true;
              tweetRef
                .doc(tweetId)
                .update({ likeCounts: FieldValue.increment(1) });
            }
          });
        } else {
          const newTweet = {
            likeStatus: true,
            comentStatus: false,
            shareStatus: false,
            tweetId,
          };
          tweets.push(newTweet);
        }
        userActRef.doc(currentUserId).update({ [path]: tweets });
        tweetRef.doc(tweetId).update({ likeCounts: FieldValue.increment(1) });
        break;
      }
      case "dislike": {
        const tweets = userActivity[userId].tweets;
        const path = `${userId}.tweets`;
        tweets.forEach((tw) => {
          if (tw.tweetId === tweetId) {
            tw.likeStatus = false;
            tweetRef
              .doc(tweetId)
              .update({ likeCounts: FieldValue.increment(-1) });
          }
        });
        userActRef.doc(currentUserId).update({ [path]: tweets });
        break;
      }
      case "coment": {
        const tweets = userActivity[userId].tweets;
        const path = `${userId}.tweets`;
        const findedTweet = tweets.find((tw) => tw.tweetId === tweetId);
        if (findedTweet) {
          tweets.forEach((tw) => {
            if (tw.tweetId === tweetId) {
              tw.comentStatus = true;
            }
          });
        } else {
          const newTweet = {
            likeStatus: false,
            comentStatus: true,
            tweetId,
            shareStatus: false,
          };
          tweets.push(newTweet);
        }
        userActRef.doc(currentUserId).update({ [path]: tweets });
        break;
      }
      case "delete-coment": {
        const tweets = userActivity[userId].tweets;
        const path = `${userId}.tweets`;
        tweets.forEach((tw) => {
          if (tw.tweetId === tweetId) {
            tw.comentStatus = false;
          }
        });
        userActRef.doc(currentUserId).update({ [path]: tweets });
        break;
      }
      case "share": {
        const tweets = userActivity[userId].tweets;
        const path = `${userId}.tweets`;
        tweets.forEach((tw) => {
          if (tw.tweetId === tweetId) {
            tw.shareStatus = true;
          }
        });
        userActRef.doc(currentUserId).update({ [path]: tweets });
        tweetRef.doc(tweetId).update({ shareCounts: FieldValue.increment(1) });
        break;
      }
      case "unShare": {
        const tweets = userActivity[userId].tweets;
        const path = `${userId}.tweets`;
        tweets.forEach((tw) => {
          if (tw.tweetId === tweetId) {
            tw.shareStatus = false;
          }
        });
        userActRef.doc(currentUserId).update({ [path]: tweets });
        tweetRef.doc(tweetId).update({ shareCounts: FieldValue.increment(-1) });
        break;
      }
      default:
        break;
    }
  } else {
    const data = {
      followStatus: false,
      tweets: [],
    };
    const tweetData = {
      tweetId,
      likeStatus: false,
      comentStatus: false,
      shareStatus: false,
    };
    switch (typeActivity) {
      case "follow":
        data.followStatus = true;
        break;
      case "like":
        tweetData.likeStatus = true;
        break;
      case "coment":
        tweetData.comentStatus = true;
        break;
      case "share":
        tweetData.shareStatus = true;
        break;
      default:
        break;
    }
    data.tweets.push(tweetData);
    userActRef.doc(currentUserId).set({ [userId]: data }, { merge: true });
  }
};
