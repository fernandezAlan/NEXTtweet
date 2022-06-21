import { useState } from "react";
import Button from "../Button";
import { colors } from "../../styles/theme";
import Link from "next/link";
import { useRouter } from "next/router";
import ErrorMessage from "../ErrorMessage/index";
import { addNewUser } from "../../services/user";
export default function Form({ submitFunction, type }) {
  // ----ENUM CONFIG-------
  const BUTTON_SIZE = {
    REGISTER: "S",
    LOGIN: "M",
  };
  const BUTTON_LABEL = {
    REGISTER: "registrate",
    LOGIN: "iniciar sesión",
  };
  const REDIRECT_URL = {
    REGISTER: "/login",
    LOGIN: "/register",
  };
  const REDIRECT_LABEL = {
    REGISTER: "¿ya tienes cuenta?",
    LOGIN: "¿aún no tienes una cuenta?",
  };
  const LINK_LABEL = {
    REGISTER: "¡inicia sesion!",
    LOGIN: "¡registrate!",
  };

  const NEXT_PAGE = {
    REGISTER: "/edit/profile",
    LOGIN: "/home",
  };
  // ----USE STATE-------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);

  // ----USE ROUTER-------
  const router = useRouter();
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  // ----HANDLE FUNCTIONS-------
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    setloading(true);
    event.preventDefault();
    submitFunction({ email, password })
      .then((result) => {
        if (type === "REGISTER") {
          addNewUser({
            currentUserId: result.user.uid,
          });
        }
        console.log("result_new user", result);
        setError(false);
        setloading(false);
        router.push(NEXT_PAGE[type]);
      })
      .catch((error) => {
        console.log("error", error);
        setError(true);
        setloading(false);
      });
  };

  // --------------------------------
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="password">contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChangePassword}
        />
        <div>
          <Button
            color={colors.primary}
            size={BUTTON_SIZE[type]}
            disabled={loading}
          >
            {BUTTON_LABEL[type]}
          </Button>
        </div>
        <span>{REDIRECT_LABEL[type]}</span>
        <Link href={REDIRECT_URL[type]}>
          <a>{LINK_LABEL[type]}</a>
        </Link>
      </form>
      {error && type === "LOGIN" ? (
        <ErrorMessage
          message={
            "¡el email o contraseña introducidos no coinciden! vuelve a intentar o registrate por favor"
          }
        />
      ) : null}
      <style jsx>{`
        a {
          color: ${colors.primary};
        }
        div {
          margin: 30px;
        }
        input {
          height: 35px;
          border-radius: 5px;
          border: solid 1px ${error ? "red" : "gray"};
        }
        form {
          display: flex;
          flex-direction: column;
          width: 70%;
          align-items: center;
        }
      `}</style>
    </>
  );
}
