// import { useState } from "react";

import { colors } from "../../../styles/theme";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import { uploadImage } from "../../../firebase/client/client";
import { updateUser } from "../../../firebase/client/auth";
export default function EditProfile() {
  const [file, setFile] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  const [displayName, setDisplayName] = useState("");
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
    try {
      const photoURL = await uploadImage({ file, folder: "profile-img" });
      const updated = await updateUser({ photoURL, displayName });
      console.log("updated", updated);
    } catch (error) {
      console.log("error en handleSumbit", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <section>
          <label>
            <span>elige una foto de perfil</span>
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
        <Button color={colors.primary} disabled={displayName === "" || !imgURL}>
          crear perfil
        </Button>
      </form>
      <style jsx>{`

        div {
          width: 100px;
          height: 100px;
          background-color:#cac7c7;
          border-radius: 99999px;
          margin: 20px;
          cursor:pointer;
          display:${imgURL ? "none" : "block"};
          
        }
        img{
        display:${imgURL ? "block" : "none"};
        width: 100px;
          height: 100px;
          border-radius: 99999px;
          margin: 20px;
          cursor:pointer;
          object-fit: cover;
        }
        img:hover{
            filter: brightness(0.5);
        }
        div:hover{
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
          width: 165px;
        }
        input[type="text"] {
          border: 0px;
          border-bottom: solid gray 1px;
          outline: none;
          width:150px;
        }
        input[type="file"] {
       display:none
        }
        }
      `}</style>
    </>
  );
}
