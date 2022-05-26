// import { useState } from "react";

import { colors } from "../../../styles/theme";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import { uploadImage } from "../../../firebase/client/client";
import { updateUser } from "../../../firebase/client/auth";
import CheckAnimation from "../../../components/CheckAnimation";
import Spinner from "../../../components/Spinner/index";
import { useRouter } from "next/router";
export default function EditProfile() {
  const [file, setFile] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [finish, setFinish] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleName = (event) => {
    setDisplayName(event.target.value);
  };

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function (evt) {
        setImgURL(fileReader.result);
      });
      fileReader.readAsDataURL(file);
    }
  }, [file]);

  const handleSumbit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const photoURL = await uploadImage({ file, folder: "profile-img" });
      await updateUser({ photoURL, displayName });
      setFinish(true);
    } catch (error) {
      console.log("error en handleSumbit", error);
    }
  };

  return !finish ? (
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
            />
          </label>
          <input
            type="text"
            placeholder="tu nombre..."
            className="input_file"
            value={displayName}
            onChange={handleName}
          />
        </section>
        {loading ? (
          <Spinner />
        ) : (
          <Button
            color={colors.primary}
            disabled={displayName === "" || !imgURL}
          >
            crear perfil
          </Button>
        )}
      </form>
      <style jsx>{`
        span {
          font-size: 15px;
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
        img {
          display: ${imgURL ? "block" : "none"};
          width: 150px;
          height: 150px;
          border-radius: 99999px;
          margin: 30px;
          cursor: pointer;
          object-fit: cover;
          border: solid 3px ${colors.primary};
        }
        img:hover {
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
          height: 70vh;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        input {
          width: 165px;
        }
        label {
          width: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input[type="text"] {
          border: 0px;
          border-bottom: solid ${colors.primary} 3px;
          outline: none;
          width: 150px;
          font-size: 15px;
        }
        input[type="file"] {
          display: none;
        }
      `}</style>
    </>
  ) : (
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
          width: 100vw;
          height: 100vh;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
