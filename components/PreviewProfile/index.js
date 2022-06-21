import { useEffect, useState } from "react";
import { getUserById } from "../../services/user";
import Avatar from "../Avatar";
import FollowButton from "../FollowButton/index";
export default function PreviewProfile({
  userId,
  displayName,
  userName,
  description,
}) {
  const [avatarURL, setAvatarURL] = useState(null);

  useEffect(() => {
    getUserById(userId).then((user) => {
      setAvatarURL(user.avatar);
    });
  });

  return (
    <>
      <div className="container">
        <section>
          <Avatar src={avatarURL} />
        </section>
        <section>
          <div>
            <h3>{displayName}</h3>
            <FollowButton />
          </div>
          <h4>{userName}</h4>
          <p>{description}</p>
        </section>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          padding: 10px;
        }

        section > div {
          display: flex;
        }
        h1 h4 {
          margin: 0px;
        }
      `}</style>
    </>
  );
}
