import { useState, useEffect } from "react";
import { getUserById } from "../../services/user";
import { colors } from "../../styles/theme";
import ShareIcon from "../Icon/shareIcon";
export default function SharedLabel({ userId, currentUserId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserById(userId).then(setUser);
  }, [userId]);
  return (
    <>
      <div>
        <ShareIcon fill={colors.gray} />
        {userId === currentUserId ? (
          <span>compartisté</span>
        ) : (
          <span>{`${user?.displayName} compartió`}</span>
        )}
      </div>
      <style jsx>{`
        div {
          color: ${colors.gray};
          margin-left: 75px;
          display: flex;

          align-items: center;
        }
        span {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}
