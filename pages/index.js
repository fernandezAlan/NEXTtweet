import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import GithubIcon from "../components/Icon/GithubIcon";
import { colors } from "../styles/theme";
import { loginWithGithub, isUserSigned } from "../firebase/client";
import { useState, useEffect } from "react";
import Avatar from "../components/Avatar";
export default function Home() {
  const [user, setUser] = useState(undefined);
  const handleClick = async () => {
    const newUser = await loginWithGithub();
    setUser(newUser);
  };
  useEffect(() => {
    isUserSigned(setUser);
  }, []);

  return (
    <AppLayout>
      <div>
        <Head>
          <title>devTeet</title>
        </Head>
        <h1> DEV TW</h1>
        <h2>comparte código entre desarrolladores</h2>
        {user === null && (
          <Button onClick={handleClick}>
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
    </AppLayout>
  );
}
