import React from 'react'
import styles from './NotesHeading.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const NotesHeading = ({groupName,GetInitials,color,showSidebar,setShowSidebar}) => {
  const handleBackBtn=()=>{
    setShowSidebar(true);
  }
  return (
    <div className={styles.container}>
         <div className={styles.backButton}>
         {!showSidebar && (
          <FontAwesomeIcon icon={faArrowLeft} onClick={()=>handleBackBtn()}/>
         )}
         </div>

        <div className={styles.avatar} style={{backgroundColor:color}}>
            <GetInitials groupName={groupName}/>
        </div>
        <div className={styles.groupName}>
            <p>{groupName}</p>
        </div>
    </div>
  )
}

export default NotesHeading