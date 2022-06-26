import Button from "../Button/index";
import { colors } from "../../styles/theme";
import FacebookIcon from "../Icon/FacebookIcon";
import GoogleIcon from "../Icon/GoogleIcon";
import GithubIcon from "../Icon/GithubIcon";
import {
  loginWithProvider,
  googleProvider,
  githubProvider,
  facebookProvider,
} from "../../firebase/client/auth";
import { useRouter } from "next/dist/client/router";
import { addNewUser } from "../../services/user";
import { useState } from "react";

export default function ProvidersLoginCotainer() {
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleLogin = async (provider) => {
    loginWithProvider(provider)
      .then(async (providerResult) => {
        await addNewUser({ currentUserId: providerResult.user.uid });
        router.push("/");
      })
      .catch((error) => {
        setError(true);
        return new Error("login with provider error:", error);
      });
  };
  return (
    <>
      <section>
        {error && <span>ya existe un usuario registrado con ese email</span>}
        <div>
          {" "}
          <Button
            color={colors.googleColor}
            size={"L"}
            onClick={() => handleLogin(googleProvider)}
          >
            <GoogleIcon fill={"white"} />
            ingresar con con Google
          </Button>
        </div>
        <div>
          {" "}
          <Button
            color={colors.facebookColor}
            size={"L"}
            onClick={() => handleLogin(facebookProvider)}
          >
            <FacebookIcon fill={"white"} />
            ingresar con con Facebook
          </Button>
        </div>
        <div>
          <Button
            color={colors.githubColor}
            size={"L"}
            onClick={() => handleLogin(githubProvider)}
          >
            <GithubIcon fill={"white"} />
            ingresar con con Github
          </Button>
        </div>
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
        }
        span {
          color: red;
          font-size: 15px;
          margin-bottom: 10px;
        }
        div {
          margin-bottom: 10px;
          display: flex;
          justify-content: center;
          align-content: center;
        }
      `}</style>
    </>
  );
}
