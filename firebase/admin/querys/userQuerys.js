import { firestore } from "../admin";
import { FieldValue } from "firebase-admin/firestore";

export const userInformationRef = firestore.collection("userInformation");

export const handleFollowUser = async ({ currentUserId, userId }) => {
  // current info documents
  const currentUserInfoDoc = await userInformationRef.doc(currentUserId).get();
  const currentUserInfo = userInformationRef.doc(currentUserId);
  const currentUserInformation = currentUserInfoDoc.data();
  currentUserInformation.id = currentUserInfoDoc.id;

  // user information documents
  const userInfoDoc = await userInformationRef.doc(userId).get();
  const userInfo = userInformationRef.doc(userId);
  const userInformation = userInfoDoc.data();
  userInformation.id = userInfoDoc.id;
  const follow = async () => {
    // update users documents
    if (currentUserInformation.follows.length === 0) {
      await currentUserInfo.update({ follows: [userId] });
      await currentUserInfo.update({ followsCount: FieldValue.increment(1) });
    } else {
      await currentUserInfo.update({ follows: FieldValue.arrayUnion(userId) });
      await currentUserInfo.update({ followsCount: FieldValue.increment(1) });
    }
    if (userInformation.followers.length === 0) {
      await userInfo.update({ followers: [currentUserId] });
      await userInfo.update({ followersCount: FieldValue.increment(1) });
    } else {
      await userInfo.update({
        followers: FieldValue.arrayUnion(currentUserId),
      });
      await userInfo.update({ followersCount: FieldValue.increment(1) });
    }
  };
  const unfollow = async () => {
    // update users documents
    const followIndex = currentUserInformation.follows.indexOf(userId);
    const followerIndex = userInformation.followers.indexOf(currentUserId);
    if (followIndex !== -1 && followerIndex !== -1) {
      await currentUserInfo.update({ follows: FieldValue.arrayRemove(userId) });
      await currentUserInfo.update({ followsCount: FieldValue.increment(-1) });

      await userInfo.update({
        followers: FieldValue.arrayRemove(currentUserId),
      });
      await userInfo.update({ followersCount: FieldValue.increment(-1) });
    }
  };

  return { follow, unfollow };
};

export const createUserInformation = ({ currentUserId, data }) => {
  return userInformationRef.doc(currentUserId).set(data);
};
