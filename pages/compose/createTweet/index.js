import Button from "../../../components/Button";
import { useState, useEffect } from "react";
import useUser from "../../../hooks/useUser";
import Avatar from "../../../components/Avatar";
import { addTweet, uploadImage } from "../../../firebase/client/client";
import { useRouter } from "next/dist/client/router";
import { colors } from "../../../styles/theme";
import { createNewTweet } from "../../../services/tweets";

export default function createTweet() {
  // -----------ENUM---------------
  const COMPOSE_STATE = {
    USER_NOT_KNOW: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
  };
  const DRAG_IMAGE_STATE = {
    ERROR: -1,
    NONE: 0,
    DRAG_OVER: 1,
    UPLOADING: 2,
    COMPLETE: 3,
  };
  // ------USE STATE-------
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATE.USER_NOT_KNOW);
  const [error, setError] = useState(null);
  const [disableButton, setDisableButton] = useState(true);
  const [drag, setDrag] = useState(DRAG_IMAGE_STATE.NONE);
  const [file, setFile] = useState(null);
  const [imgURL, setImgURL] = useState(null);

  // ------USE ROUTER------
  const router = useRouter();
  // ------USE USER--------
  const { user } = useUser();

  // ------HANDLE FUNCTIONS-------
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = async (event) => {
    setStatus(COMPOSE_STATE.LOADING);
    setError(false);
    event.preventDefault();
    let downloadImageURL = null;
    if (file) {
      downloadImageURL = await uploadImage({ file, folder: "image" });
    }
    createNewTweet({
      content: message,
      downloadImageURL,
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
  const handleDragOver = () => {
    setDrag(DRAG_IMAGE_STATE.DRAG_OVER);
  };
  const handleDragLeave = () => {
    setDrag(DRAG_IMAGE_STATE.NONE);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATE.NONE);
    setDisableButton(false);
    const file = e.dataTransfer.files[0];
    setFile(file);
    const fileReader = new FileReader();
    fileReader.addEventListener("load", function (evt) {
      setImgURL(fileReader.result);
    });
    fileReader.readAsDataURL(file);
  };
  const handleDeleteImgUrl = () => {
    setImgURL(null);
    if (message.length === 0 || status === COMPOSE_STATE.LOADING) {
      setDisableButton(true);
    }
  };

  useEffect(() => {
    if (
      imgURL === null &&
      (message.length === 0 || status === COMPOSE_STATE.LOADING)
    ) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [message]);

  // ------------------------------
  return (
    <>
      {user && (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="avatar_container">
                <Avatar src={user.avatar} alt={user.username} />
              </div>
              <section>
                <textarea
                  placeholder="¿qué está pasando?"
                  value={message}
                  onChange={handleChange}
                  onDragEnter={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                ></textarea>
              </section>
            </div>
            {imgURL && (
              <div className="img_container">
                <button onClick={handleDeleteImgUrl}>x</button>
                <img src={imgURL} />
              </div>
            )}
            <Button disabled={disableButton} color={colors.primary}>
              compartir
            </Button>
            {error === COMPOSE_STATE.ERROR && (
              <span>a ocurrido un error, vuelve a intentarlo</span>
            )}
          </form>
        </>
      )}

      <style jsx>{`
        .img_container {
          display: flex;
          flex-direction: column;
          width: auto;
        }
        button {
          cursor: pointer;
          width: 30px;
          height: 30px;
          background-color: #000000d6;
          border: 0px;
          color: white;
          border-radius: 30px;
          z-index: 2;
          position: relative;
          top: 35px;
          left: 80%;
        }
        img {
          width: 180px;
          height: 20vh;
          object-fit: contain;
          border-radius: 10px;
          border: solid 1px ${colors.primary};
          margin-bottom: 15px;
        }
        div {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
        }
        .avatar_container {
          margin-top: 10vh;
          width: auto;
        }
        textarea {
          margin-top: 10vh;
          background-color: white;
          border: ${drag === DRAG_IMAGE_STATE.DRAG_OVER
            ? `dashed 1px ${colors.primary}`
            : "solid 1px transparent"};
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
    </>
  );
}
