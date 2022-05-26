import { useEffect } from "react";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";
import Spinner from "../components/Spinner";
export default function Home() {
  const { user, USER_STATES } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/home");
    } else if (user === USER_STATES.NOT_LOGGED) {
      router.replace("/login");
    }
  }, [user]);

  return (
    <>
      <div>
        <Spinner />
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
