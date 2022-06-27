import Avatar from "../Avatar";
import TextArea from "../TextArea";
import useUser from "../../hooks/useUser";
import { useState } from "react";
import { colors } from "../../styles/theme";
import Button from "../Button";
import CheckAnimation from "../CheckAnimation/index";
import { addNewComent } from "../../services/coment";
import Spinner from "../Spinner/index";
import Tweet from "../Tweet/index";
import ErrorMessage from "../ErrorMessage";
import { useRouter } from "next/router";
export default function AddComent({ tweetId, comentCounts }) {
  // ------ENUM-------------------------
  const STATUS = {
    LOADING: 0,
    ENABLE: 1,
    SUCCESS: 2,
    ERROR: -1,
  };

  // -----------USE USER------------------
  const { user } = useUser();

  // -----------USE STATES----------------
  const [value, setValue] = useState("");
  const [comentStatus, setComentStatus] = useState(STATUS.ENABLE);
  const [comentsDone, setComentsDone] = useState([]);

  // -----------USE ROUTER-----------------
  const router = useRouter();
  const locale = router.pathname.split("/")[1];

  // -----------HANDLE FUNCTIONS------------
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setComentStatus(STATUS.LOADING);
    addNewComent({
      rootId: tweetId,
      userId: user.uid,
      coment: value,
    })
      .then(() => {
        setValue("");
        setComentStatus(STATUS.SUCCESS);
        const newComent = {
          avatar: user.avatar,
          displayName: user.displayName,
          id: null, // traer el id correspondiente
          message: value,
          date: Date.now(),
        };
        setComentsDone([...comentsDone, newComent]);
      })
      .catch(() => {
        setValue("");
        setComentStatus(STATUS.ERROR);
      });
  };

  return (
    <section>
      {comentStatus === STATUS.ERROR && (
        <ErrorMessage
          message={"ah ocurrido un error, vuelve a intentarlo mas tarde"}
        />
      )}
      {comentsDone.length !== 0 &&
        comentsDone.map((coment) => (
          <Tweet
            key={coment.date}
            avatar={coment.avatar}
            displayName={coment.displayName}
            id={coment.id}
            message={coment.message}
            date={coment.date}
          />
        ))}
      <div>
        <Avatar src={user?.avatar} />
        <section>
          <form onSubmit={handleSubmit}>
            <TextArea
              placeholder={"Tweetea tu respuesta"}
              size={locale === "status" ? "S" : "L"}
              value={value}
              onChange={handleValue}
              onFocus={() => setComentStatus(STATUS.ENABLE)}
            ></TextArea>
            {comentStatus === STATUS.LOADING && <Spinner />}
            {comentStatus === STATUS.SUCCESS && (
              <CheckAnimation width="25px" height="25px" />
            )}
            {comentStatus === STATUS.ENABLE && (
              <Button
                color={colors.primary}
                disabled={value.length === 0 || comentStatus === STATUS.LOADING}
              >
                Responder
              </Button>
            )}
          </form>
        </section>
      </div>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        div {
          display: flex;
          padding: 10px;
        }
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: ${comentCounts > 0 ? "0px" : "60px"};
        }
      `}</style>
    </section>
  );
}
