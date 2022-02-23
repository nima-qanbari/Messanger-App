import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

//gif
import spinner from "../assets/spinner.gif"

//css
import styles from "./Chats.module.css";

//components
import Navbar from "./Navbar";

//context
import { AuthContext } from "../Context/AuthContextProvider"


const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useNavigate();

  useEffect(() => {
    if (!user) {
      history("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "0b4dab96-d427-46af-846c-dbc40e949161",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "5b25c605-f5a8-42f3-8f3e-da24715d3b9b",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    history("/");
  };

  if (!user || loading)
    return (
      <div>
        <img src={spinner} alt="spinner" />
        <h3>loading...</h3>
      </div>
    );

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="0b4dab96-d427-46af-846c-dbc40e949161"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
