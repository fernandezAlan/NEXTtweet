import { useEffect } from "react";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";
import Spinner from "../components/Spinner";
import { colors } from "../styles/theme";
export default function Home() {
  const { user, USER_STATES } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user?.userInformation) {
      router.replace("/home");
    } else if (user) {
      router.replace("/edit/profile");
    } else if (user === USER_STATES.NOT_LOGGED) {
      router.replace("/login");
    }
  }, [user]);

  return (
    <>
      <div>
        <h1>TUITER</h1>
        <Spinner />
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
        }
        h1 {
          color: ${colors.primary};
        }
      `}</style>
    </>
  );
}
