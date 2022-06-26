import PreviewProfile from "../PreviewProfile";
import Message from "../Message";
import Spinner from "../Spinner";

export default function SearchResults({ STATES, searchState, foundUsers }) {
  if (searchState === STATES.LOADING) return <Spinner />;
  if (searchState === STATES.ERROR)
    return (
      <Message
        content={"ocurrió un error, vuelve a intentarlo"}
        type={"ERROR"}
      />
    );
  if (searchState === STATES.NOT_FOUND)
    return (
      <Message
        content={"no se encontraron usuarios con ese nombre"}
        type={"INFORMATION"}
      />
    );
  return (
    <>
      <section>
        {foundUsers.map((user) => (
          <PreviewProfile
            key={user.id}
            avatar={user.avatar}
            displayName={user.displayName}
            userName={user.userName}
            description={user.description}
            userId={user.id}
          />
        ))}
      </section>
      <style jsx>{`
        section {
          margin-top: 50px;
        }
      `}</style>
    </>
  );
}
