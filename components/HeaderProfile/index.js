import ArrowLeftIcon from "../Icon/ArrowLeftIcon";
import { signOut } from "../../firebase/client/auth";
import { useRouter } from "next/router";
import { colors, breakpoints } from "../../styles/theme";
import MenuIcon from "../Icon/MenuIcon";
import { useState } from "react";
import { deleteUser } from "../../services/user";
export default function HeaderProfile({ name, tweetsLength }) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const logOut = () => {
    signOut();
    router.push("/login");
  };
  const handleDeleteUser = () => {
    deleteUser().then(() => {
      router.replace("/login");
    });
  };

  const goBack = () => {
    router.back();
  };
  return (
    <>
      <header>
        <section>
          <div onClick={goBack}>
            <ArrowLeftIcon />
          </div>
          <div>
            <strong>{name}</strong>
            <span>{`${tweetsLength} tweets`}</span>
          </div>
        </section>
        <section>
          <MenuIcon onClick={() => setShowMenu(!showMenu)} />
          <nav>
            {showMenu && (
              <ul>
                <li onClick={logOut}>cerrar sesion</li>
                <li onClick={handleDeleteUser}>borra cuenta</li>
              </ul>
            )}
          </nav>
        </section>
      </header>
      <style jsx>{`
        nav {
          background-color: white;
          position: absolute;
          top: 100%;
          left: 60%;
          width: 130px;
          border-radius: 5px;
          border: solid 1px ${colors.grayOpacity};
        }
        ul {
          padding: 12px;
          margin: 0px;
        }
        li {
          list-style-type: none;
          padding: 7px;
          cursor: pointer;
        }
        li:hover {
          background-color: #80808038;
          border-radius: 10px;
        }
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
