import { useEffect, useState } from "react";
import { colors } from "../../styles/theme";
import { followUser, unfollowUser } from "../../services/user";
import useUser from "../../hooks/useUser";
export default function FollowButton({ state, userId, handleFollowerCount }) {
  // --------ENUM---------------------
  const FOLLOW_STATE = {
    NOT_FOLLOW: 0,
    FOLLOW: 1,
    NOT_KNOW: -1,
  };
  // --------USE USER-----------------
  const { user: currentUser } = useUser();

  // --------USE STATE----------------
  const [follow, setFollow] = useState(FOLLOW_STATE.NOT_KNOW);
  const [disabled, setDisabled] = useState(false);
  // --------USE EFFECT---------------
  useEffect(() => {
    if (currentUser) {
      /**
       * currentUser tiene un array con los id's de todos los usuarios que sigue.
       * buscamos el id del usuario dentro del array.
       * dependiendo si encuentra o no el id, el boton tendra comportamientos distintos.
       */
      const findedUser = currentUser.userInformation.follows.find(
        (userFollowedId) => userFollowedId === userId
      );
      if (findedUser) {
        setFollow(FOLLOW_STATE.FOLLOW);
      } else {
        setFollow(FOLLOW_STATE.NOT_FOLLOW);
      }
    }
  }, [currentUser]);
  // --------HANDLE FUNCTION----------
  const handleFollow = () => {
    // dependiendo del estado de "follow", se seguirá al usuario o se dejará de seguir
    if (follow === FOLLOW_STATE.FOLLOW) {
      setFollow(FOLLOW_STATE.NOT_FOLLOW);
      setDisabled(true);
      unfollowUser({ userId })
        .then(() => {
          setDisabled(false);
          if (handleFollowerCount) {
            handleFollowerCount("unfollow");
          }
        })
        .catch(() => {
          setDisabled(false);
          setFollow(FOLLOW_STATE.FOLLOW);
        });
    } else {
      setFollow(FOLLOW_STATE.FOLLOW);
      setDisabled(true);
      followUser({ userId })
        .then(() => {
          setDisabled(false);
          if (handleFollowerCount) {
            handleFollowerCount("follow");
          }
        })
        .catch(() => {
          setDisabled(false);
          setFollow(FOLLOW_STATE.NOT_FOLLOW);
        });
    }
  };
  if (follow === FOLLOW_STATE.NOT_KNOW) return null;
  return (
    <>
      <div>
        <button onClick={handleFollow} disabled={disabled}>
          {follow ? "Siguiendo" : "Seguir"}
        </button>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: end;
          cursor: pointer;
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
          cursor: pointer;
        }
        button[disabled] {
          color: ${follow ? colors.grayOpacity : colors.white};
          background-color: ${follow ? colors.white : colors.grayOpacity};
          border: ${follow ? `solid 1px ${colors.grayOpacity}` : `0px`};
        }
      `}</style>
    </>
  );
}
