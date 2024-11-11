import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import styles from "./NotesHomePage.module.css"
import Img from '../../assets/heroimg.png'
const NotesHomePage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.img}>
        <img src={Img} alt='image' />
      </div>
      <div className='heading'>
        <h1>Pocket Notes</h1>
      </div>
      <div className={styles.para}>
        <p>
          Send and receive messages without keeping your phone online. <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
    </div>
    <div className={styles.encrypted}>
      <FontAwesomeIcon icon={faLock}/>
      <p>end to end encrypted</p>
    </div>
  </div>
  )
}

export default NotesHomePage