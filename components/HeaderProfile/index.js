import ArrowLeftIcon from "../Icon/ArrowLeftIcon";
import { signOut } from "../../firebase/client/auth";
import { useRouter } from "next/router";
import { colors, breakpoints } from "../../styles/theme";

export default function HeaderProfile({ name, tweetsLength }) {
  const router = useRouter();
  const logOut = () => {
    signOut();
    router.push("/login");
  };
  return (
    <>
      <header>
        <section>
          <div>
            <ArrowLeftIcon />
          </div>
          <div>
            <strong>{name}</strong>
            <span>{`${tweetsLength} tweets`}</span>
          </div>
        </section>
        <section>
          <button onClick={logOut}>cerrar sesión</button>
        </section>
      </header>
      <style jsx>{`
        button {
          height: 30px;
          border-radius: 30px;
          border: solid 1px rgb(207, 217, 222);
          cursor: pointer;
        }
        button:active {
          background-color: #d4d4d4;
        }
        section {
          display: flex;
        }
        div {
          display: flex;
          flex-direction: column;
        }
        div:first-child {
          margin: 5px;
        }
        header {
          padding: 10px;
          background-color: #fff;
          width: 350px;
          display: flex;
          border-bottom: solid 1px gray;
          height: 50px;
          align-items: center;
          position: fixed;
          z-index: 3;
          justify-content: space-between;
        }
        span {
          color: ${colors.gray};
        }
        @media (max-width: ${breakpoints.mobile}) {
          header {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
