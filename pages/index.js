import Head from "next/head";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import GithubIcon from "../components/Icon/GithubIcon";
import { colors } from "../styles/theme";
export default function Home() {
  return (
    <AppLayout>
      <div>
        <Head>
          <title>devTeet</title>
        </Head>
        <h1> DEV TW</h1>
        <h2>comparte código entre desarrolladores</h2>
        <Button>
          <GithubIcon fill={'white'}></GithubIcon>
          inicia sesion con Github
          </Button>
      </div>
      <style jsx>{`
        div{
          display:flex;
          justify-content:center;
          flex-direction:column;
          align-items:center;
          height:100%;
          padding:20px
        }
        h1{
          color:${colors.primary};
          font-size:25px;
        }
        h2{
          color:${colors.secondary};
          font-size:20px;
        }
        `}</style>
    </AppLayout>
  );
}
