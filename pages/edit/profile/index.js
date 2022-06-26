// import { useState } from "react";

import { colors, breakpoints } from "../../../styles/theme";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import { uploadImage } from "../../../firebase/client/client";
import { updateUser } from "../../../firebase/client/auth";
import CheckAnimation from "../../../components/CheckAnimation";
import Spinner from "../../../components/Spinner/index";
import { useRouter } from "next/router";
import { createUserInformation } from "../../../services/user";
import useUser from "../../../hooks/useUser";
export default function EditProfile() {
  // ---------USE STATE--------------------
  const [file, setFile] = useState(null);
  const [imgURL, setImgURL] = useState(
    "https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f9c9.png"
  );
  const [displayName, setDisplayName] = useState("");
  const [userName, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [finish, setFinish] = useState(false);
  const [loading, setLoading] = useState(false);

  // ---------USE ROUTER-----------------------
  const router = useRouter();

  // ----------USE USER-------------------------
  const { user: currentUser } = useUser();

  // ----------HANDLE FUNCTIONS-----------------
  const handleName = (event) => {
    setDisplayName(event.target.value);
  };
  const handleUserName = (event) => {
    setUsername(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  // -----------USE EFFECTS----------------------
  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function (evt) {
        setImgURL(fileReader.result);
      });
      fileReader.readAsDataURL(file);
    }
  }, [file]);
  useEffect(() => {
    if (currentUser?.avatar) setImgURL(currentUser.avatar);
    if (currentUser?.displayName) setDisplayName(currentUser.displayName);
    if (currentUser?.userName) setUsername(currentUser.userName);
  }, [currentUser]);

  const handleSumbit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let photoURL = imgURL;
      if (currentUser.avatar !== imgURL && file) {
        photoURL = await uploadImage({ file, folder: "profile-img" });
      }
      await updateUser({ photoURL, displayName });
      await createUserInformation({ userName, description, displayName });
      setFinish(true);
    } catch (error) {
      console.log("error en handleSumbit", error);
    }
  };
  if (finish)
    return (
      <>
        <div>
          <section>
            {" "}
            <span>
              ¡Felicidades!
              <br /> Ya estas registrado
            </span>
            <div className="check_container">
              <CheckAnimation />
            </div>
          </section>
          <Button color={colors.primary} onClick={() => router.push("/home")}>
            {" "}
            ir al inicio
          </Button>
        </div>
        <style jsx>{`
          .check_container {
            margin: 20px;
            width: auto;
            height: auto;
          }
          div {
            text-align: center;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 350px;
            height: 100vh;
            flex-direction: column;
          }
          @media (max-width: ${breakpoints.mobile}) {
            div {
              width: 100vw;
            }
          }
        `}</style>
      </>
    );
  return (
    <>
      <form onSubmit={handleSumbit}>
        <section>
          <label>
            <span>Elige una foto de perfil</span>

            <img src={imgURL} />

            <div></div>
            <input
              type="file"
              onChange={(event) => setFile(event.target.files[0])}
              disabled={loading}
            />
          </label>
          <input
            type="text"
            placeholder="tu nombre..."
            className="input_file"
            value={displayName}
            onChange={handleName}
            disabled={loading}
          />

          <input
            type="text"
            placeholder="nombre de usuario"
            className="input_file"
            value={userName}
            onChange={handleUserName}
            disabled={loading}
          />
          <textarea
            placeholder="Descripción(opcional)"
            value={description}
            onChange={handleDescription}
            disabled={loading}
          ></textarea>
        </section>
        {loading ? (
          <Spinner />
        ) : (
          <Button
            color={colors.primary}
            disabled={displayName === "" || !imgURL || userName === ""}
          >
            crear perfil
          </Button>
        )}
      </form>
      <style jsx>{`
        textarea {
          background-color: white;
          border: 0px;
          height: 20vh;
          outline: none;
          width: 150px;
          resize: none;
          font-size: 15px;
          margin: 20px;
        }
        span {
          font-size: 15px;
          color: ${colors.gray};
        }
        div {
          width: 150px;
          height: 150px;
          background-color: #cac7c7;
          border-radius: 99999px;
          margin: 20px;
          cursor: pointer;
          display: ${imgURL ? "none" : "block"};
        }
        img,
        object {
          display: ${imgURL ? "block" : "none"};
          width: 150px;
          height: 150px;
          border-radius: 99999px;
          margin: 30px;
          cursor: pointer;
          object-fit: cover;
          background-color: #80808063;
        }
        img:hover {
          filter: brightness(0.5);
        }
        object:hover {
          filter: brightness(0.5);
        }
        div:hover {
          filter: brightness(0.5);
        }
        section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        form {
          display: flex;
          height: 90%;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        input {
          width: 165px;
          margin: 20px;
        }
        label {
          width: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input[type="text"] {
          border: 0px;
          outline: none;
          width: 150px;
          font-size: 15px;
        }
        input[type="file"] {
          display: none;
        }
      `}</style>
    </>
  );
}
