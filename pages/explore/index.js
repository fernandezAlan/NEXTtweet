import Header from "../../components/Header";
import { getUserByName } from "../../firebase/client/query/userQuery";
import { useEffect, useState } from "react";
import PreviewProfile from "../../components/PreviewProfile";
export default function Explore() {
  const [foundUsers, setFoundUsers] = useState([]);
  const getUsersByName = ({ name }) => {
    getUserByName({ name }).then(setFoundUsers);
  };
  useEffect(() => {
    console.log("foundUsers", foundUsers);
  }, [foundUsers]);
  return (
    <>
      <Header search handleSearch={getUsersByName} />
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
