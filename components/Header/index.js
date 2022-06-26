import ArrowLeftIcon from "../Icon/ArrowLeftIcon";
import { colors, breakpoints } from "../../styles/theme";
import { useRouter } from "next/router";
import Avatar from "../Avatar";
import useUser from "../../hooks/useUser";
import SearchInput from "../searchInput";
export default function Header({ title, search, handleSearch }) {
  const { user } = useUser();

  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <>
      <header>
        <div>
          {search ? (
            <section>
              <Avatar src={user?.avatar} size={"s"} />
              <SearchInput
                placeholder="Buscar un usuario"
                handleSearch={handleSearch}
              />
            </section>
          ) : (
            <>
              <div onClick={goBack}>
                <ArrowLeftIcon />
              </div>
              <strong>{title}</strong>
            </>
          )}
        </div>
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
          flex-direction: row;
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
          justify-content: start;
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
