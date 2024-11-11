import React from 'react'
import NotesArea from './NotesArea'
import styles from './Notes.module.css'
import NotesHomePage from './NotesHomePage'

const Notes = ({groupName,GetInitials,color,isGroupSelected,showSidebar,setShowSidebar}) => {

  return (
    <div className={styles.container}> 
    {isGroupSelected?<NotesArea groupName={groupName} color={color} GetInitials={GetInitials} showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>:<NotesHomePage/>}
    </div>
  )
}

export default Notes