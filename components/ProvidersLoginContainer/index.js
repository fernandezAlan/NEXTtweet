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

export default function ProvidersLoginCotainer() {
  return (
    <>
      <Button
        color={colors.googleColor}
        size={"L"}
        onClick={() => loginWithProvider(googleProvider)}
      >
        <GoogleIcon fill={"white"} />
        ingresar con con Google
      </Button>
      <Button
        color={colors.facebookColor}
        size={"L"}
        onClick={() => loginWithProvider(facebookProvider)}
      >
        <FacebookIcon fill={"white"} />
        ingresar con con Facebook
      </Button>
      <Button
        color={colors.githubColor}
        size={"L"}
        onClick={() => loginWithProvider(githubProvider)}
      >
        <GithubIcon fill={"white"} />
        ingresar con con Github
      </Button>
    </>
  );
}
