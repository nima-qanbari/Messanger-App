import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    </div>
  )
}

export default Chats