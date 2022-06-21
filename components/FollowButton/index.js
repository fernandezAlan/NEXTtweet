import { useState } from "react";
import { colors } from "../../styles/theme";
import { followUser, unfollowUser } from "../../services/user";
export default function FollowButton({ state, userId, handleFollowerCount }) {
  const [follow, setFollow] = useState(state);
  const handleFollow = () => {
    if (follow) {
      unfollowUser({ userId }).then((uid) => {
        setFollow(false);
        handleFollowerCount("unfollow");
      });
    } else {
      followUser({ userId }).then((uid) => {
        setFollow(true);
        handleFollowerCount("follow");
      });
    }
  };
  return (
    <>
      <div>
        <button onClick={handleFollow}>
          {follow ? "Siguiendo" : "Seguir"}
        </button>
      </div>
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          justify-content: end;
        }
        button {
          width: ${follow ? "80px" : "70px"};
          margin: 10px 30px 0px 10px;
          padding: 8px;
          color: ${follow ? colors.black : colors.white};
          background-color: ${follow ? colors.white : colors.black};
          border: ${follow
            ? `solid 1px ${colors.grayOpacity}`
            : `1px solid ${colors.black}`};
          border-radius: 30px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
