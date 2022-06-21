import CreateIcon from "../Icon/CreateIcon";
import HomeIcon from "../Icon/HomeIcon";
import SearchIcon from "../Icon/SearchIcon";
import { colors, breakpoints } from "../../styles/theme";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav>
        <Link href={"/compose/createTweet"}>
          <a>
            <CreateIcon />
          </a>
        </Link>
        <Link href={"/home"}>
          <a>
            <HomeIcon />
          </a>
        </Link>
        <SearchIcon />
      </nav>
      <style jsx>{`
        nav {
          position: fixed;
          background-color: white;
          width: 350px;
          bottom: 0;
          height: 8vh;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-top: 1px solid ${colors.gray};
        }
        a {
          color: ${colors.black};
        }
        @media (max-width: ${breakpoints.mobile}) {
          nav {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
