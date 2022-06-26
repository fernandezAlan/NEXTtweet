import { colors } from "../../styles/theme";

export default function ProfileInformation({
  name,
  username,
  description,
  followsCount,
  followersCount,
  sameUser,
}) {
  return (
    <>
      <section>
        <div>
          <strong className="name">{name}</strong>
          <span className="username">{`@${username}`}</span>
        </div>
        <p>{description}</p>
      </section>
      <section>
        <strong>{followsCount}</strong>
        <span>{`Siguiendo`}</span>
        <strong>{followersCount}</strong>
        <span>{`Siguidores`}</span>
      </section>
      <style jsx>{`
        section {
          ${sameUser && "margin-top:40px;"}
          margin-left: 15px;
          margin-bottom: 30px;
        }
        div {
          display: flex;
          flex-direction: column;
        }
        span {
          margin-left: 3px;
          color: ${colors.gray};
        }
        .username {
          margin-left: 10px;
        }
        .name {
          font-size: 20px;
          color: ${colors.black};
        }
        strong {
          margin-left: 10px;
        }
        p {
          padding: 10px;
          margin: 0px;
          max-width: 100%;
          overflow-wrap: anywhere;
        }
      `}</style>
    </>
  );
}
