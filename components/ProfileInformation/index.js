import { colors } from "../../styles/theme";

export default function ProfileInformation({ name, username, description }) {
  return (
    <>
      <section>
        <div>
          <strong>{name}</strong>
          <span>{`@${username}`}</span>
        </div>
        <p>{description}</p>
      </section>
      <style jsx>{`
        section {
          margin-left: 15px;
          margin-bottom: 30px;
        }
        div {
          display: flex;
          flex-direction: column;
        }
        span {
          color: ${colors.gray};
        }
        strong {
          font-size: 20px;
          color: ${colors.black};
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const apiResponse = await fetch(`http://localhost:3000/api/tweets/${id}`);
  if (apiResponse.ok) {
    const props = await apiResponse.json();
    return { props };
  }
}
