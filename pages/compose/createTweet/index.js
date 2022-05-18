import AppLayout from "../../../components/AppLayout";
import Button from "../../../components/Button";
import { useState } from "react";
import useUser from "../../../hooks/useUser";
import Avatar from "../../../components/Avatar";
import { addTweet } from "../../../firebase/client";
import { useRouter } from "next/dist/client/router";
export default function createTweet() {
  // -----------ENUM---------------
  const COMPOSE_STATE = {
    USER_NOT_KNOW: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
  };
  // ------USE STATE-------
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATE.USER_NOT_KNOW);
  const [error, setError] = useState(null);

  // ------USE ROUTER------
  const router = useRouter();
  // ------USE USER--------
  const { user } = useUser();

  // ------HANDLE FUNCTIONS-------
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    setStatus(COMPOSE_STATE.LOADING);
    setError(false);
    event.preventDefault();
    addTweet({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
      displayName: user.displayName,
    })
      .then(() => {
        setStatus(COMPOSE_STATE.SUCCESS);
        router.push("/home");
      })
      .catch((err) => {
        console.error("error create tweet", err);
        setError(COMPOSE_STATE.ERROR);
      });
  };

  const isButtonDisable =
    message.length === 0 || status === COMPOSE_STATE.LOADING;
  // ------------------------------
  return (
    <AppLayout>
      {user && (
        <form onSubmit={handleSubmit}>
          <div>
            <Avatar src={user.avatar} alt={user.username} />
            <textarea
              placeholder="¿qué está pasando?"
              value={message}
              onChange={handleChange}
            ></textarea>
          </div>
          <Button disabled={isButtonDisable}>compartir</Button>
          {error === COMPOSE_STATE.ERROR && (
            <span>a ocurrido un error, vuelve a intentarlo</span>
          )}
        </form>
      )}

      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
        }
        textarea {
          margin-top: 10vh;
          background-color: white;
          border: 0px;
          height: 20vh;
          outline: none;
          width: 180px;
          resize: none;
          font-size: 15px;
        }
        textarea::placeholder {
          font-size: 18px;
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </AppLayout>
  );
}
