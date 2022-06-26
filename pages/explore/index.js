import Header from "../../components/Header";
import { getUserByName } from "../../firebase/client/query/userQuery";
import { useState } from "react";
import SearchResults from "../../components/SearchResults";
export default function Explore() {
  // -------ENUM------------
  const STATES = {
    NOT_SEARCH: 0,
    NOT_FOUND: 1,
    LOADING: 2,
    FINISH: 3,
    ERROR: -1,
  };

  // -------USE STATE------------
  const [foundUsers, setFoundUsers] = useState([]);
  const [searchState, setSearchState] = useState(STATES.NOT_SEARCH);

  // -------SEARCH FUNCTION------------
  const getUsersByName = ({ name }) => {
    setSearchState(STATES.LOADING);
    getUserByName({ name })
      .then((users) => {
        if (users.length) {
          setFoundUsers(users);
          setSearchState(STATES.FINISH);
        } else {
          setSearchState(STATES.NOT_FOUND);
        }
      })
      .catch(() => {
        setSearchState(STATES.ERROR);
      });
  };

  return (
    <>
      <Header search handleSearch={getUsersByName} />
      <SearchResults
        STATES={STATES}
        searchState={searchState}
        foundUsers={foundUsers}
      />
    </>
  );
}
