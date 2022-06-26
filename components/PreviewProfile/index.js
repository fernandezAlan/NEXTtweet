import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { getUserById } from "../../services/user";
import { colors } from "../../styles/theme";
import Avatar from "../Avatar";
import FollowButton from "../FollowButton/index";
import { useRouter } from "next/router";
export default function PreviewProfile({
  userId,
  displayName,
  userName,
  description,
}) {
  // ---------USE STATE----------------------
  const [avatarURL, setAvatarURL] = useState(null);

  // ---------USE USER-----------------------
  const { user: currentUser } = useUser();
  // ---------USE ROUTER---------------------
  const router = useRouter();
  // ---------USE EFFECT---------------------
  useEffect(() => {
    getUserById(userId).then((user) => {
      setAvatarURL(user.avatar);
    });
  });

  const goToProfile = () => {
    router.push(`user/${userId}`);
  };

  return (
    <>
      <div className="container">
        <section className="avatar_container">
          <Avatar src={avatarURL} onClick={goToProfile} />
        </section>
        <section className="content_container">
          <div>
            <div>
              <h3>{displayName}</h3>
              <h4>@{userName}</h4>
            </div>
            {currentUser && currentUser.uid !== userId ? (
              <FollowButton userId={userId} />
            ) : null}
          </div>
          <p>{description}</p>
        </section>
      </div>
      <style jsx>{`
        section > div > div {
          width: 60%;
        }
        .content_container {
          width: 80%;
        }
        .avatar_container {
          padding: 10px;
        }
        .container {
          display: flex;
          padding: 10px;
        }

        section > div {
          display: flex;
        }
        h3,
        h4,
        p {
          margin: 0px;
        }
        h4 {
          font-weight: 500;
          color: ${colors.gray};
        }
        p {
          padding: 10px;
        }
      `}</style>
    </>
  );
}
