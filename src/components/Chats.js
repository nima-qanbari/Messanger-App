import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'

//firebase
import { auth } from '../firebase'

//components
import Navbar from './Navbar'

//styles
import styles from "./Chats.module.css"

const Chats = () => {

    const history = useNavigate()

    const logoutHandler = async () => {
        await auth.signOut();
        history("/")
    }

  return (
    <div className={styles.container}>
        <Navbar logoutHandler={logoutHandler}/>
        <ChatEngine 
            height="calc(100vh - 50px)"
            projectID="0b4dab96-d427-46af-846c-dbc40e949161"
            userName="."
            userSecret="."
        />
    </div>
  )
}

export default Chats