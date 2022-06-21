import { useState, useEffect } from "react";
import { isUserSigned } from "../firebase/client/auth";
import { useRouter } from "next/dist/client/router";
const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOW: undefined,
};

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOW);
  const router = useRouter();
  useEffect(() => {
    isUserSigned(setUser);
  }, []);
  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/");
  });

  /*
  const addNewUser = async () => {
    const newUser = await loginWithGithub();
    setUser(newUser);
  };
  */

  return { user, USER_STATES };
}
