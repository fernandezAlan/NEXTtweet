import Head from "next/head";
import Button from "../components/Button";
import GithubIcon from "../components/Icon/GithubIcon";
import { colors } from "../styles/theme";
import { useEffect } from "react";
import Avatar from "../components/Avatar";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";
export default function Home() {
  const { user, addNewUser, USER_STATES } = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  return (
    <>
      <div>
        <Head>
          <title>devTeet</title>
        </Head>
        <h1> DEV TW</h1>
        <h2>comparte código entre desarrolladores</h2>
        {user === USER_STATES.NOT_LOGGED && (
          <Button onClick={addNewUser}>
            <GithubIcon fill={"white"}></GithubIcon>
            inicia sesion con Github
          </Button>
        )}
        {user && user.avatar ? (
          <div>
            <Avatar src={user.avatar} alt={user.username} withText />
          </div>
        ) : null}
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          height: 100%;
          padding: 20px;
        }
        h1 {
          color: ${colors.primary};
          font-size: 25px;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 20px;
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
        }
        strong {
          color: gray;
        }
      `}</style>
    </>
  );
}
