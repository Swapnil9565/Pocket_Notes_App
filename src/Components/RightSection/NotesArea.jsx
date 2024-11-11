import React, { useState,useEffect } from 'react'
import styles from './NotesArea.module.css'
import enableBtn from '../../assets/enabledBtn.png'
import disableBtn from '../../assets/disabledBtn.png'
import NotesHeading from './NotesHeading'
const NotesArea = ({groupName,color,GetInitials,showSidebar,setShowSidebar}) => {
  const [enabledBtn, setEnabledBtn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [saveNotes, setSaveNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notesData") || "{}");
    setSaveNotes(savedNotes[groupName] || []);
  }, [groupName]);


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notesData") || "{}");
    savedNotes[groupName] = saveNotes;
    localStorage.setItem("notesData", JSON.stringify(savedNotes));
  }, [saveNotes, groupName]);
  
 const handleInputChange=(e)=>{
  if(e.target.value===""){
    setEnabledBtn(false);
  }
  else{
    setEnabledBtn(true)
  }
  setInputValue(e.target.value); 
}  
  
   const currentDate=new Date();

  const formatDate=(date)=>{
       const day=date.getDate().toString().padStart(2, '0');
       const month=date.toLocaleString('en-US', { month: 'short' })
       const year=date.getFullYear();

       return `${day} ${month} ${year}`
  }

  const formatTime=(date)=>{
    let hours=date.getHours();
    const minutes=date.getMinutes().toString().padStart(2, '0');
    let amPm = hours >= 12 ? 'PM' : 'AM';
     hours = hours % 12 || 12;
    return `${hours}:${minutes} ${amPm}`;
  }
  
  const timeStamp={notes:inputValue,Date:formatDate(currentDate),Time:formatTime(currentDate)}

  const handleTextSubmit=()=>{
    if(inputValue==""){
      alert("The input field should not be empty")
    }
    else{
      setSaveNotes([...saveNotes,timeStamp])
      setInputValue("");
      setEnabledBtn(false);
    }
  }
  return (
    <>
    <NotesHeading groupName={groupName} color={color} GetInitials={GetInitials} showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    <div className={styles.container}>
      <div className={styles.messageContainer}>
         {saveNotes&&saveNotes.map((note,index)=>{
           return <div key={index} className={styles.message}>
             <p>{note.notes}</p>  
             <p className={styles.timeStamp}>{note.Date} &nbsp;&bull;&nbsp; {note.Time}</p>
           </div>
       
      })}
      </div>
      </div>
      <div className={styles.input_container}>
       <div className={styles.textArea}>
         <textarea placeholder='Enter your text here....' value={inputValue} onChange={(e)=>handleInputChange(e)}>
         </textarea>
         <img src={enabledBtn?enableBtn:disableBtn} style={{cursor:enabledBtn?"pointer":"not-allowed"}} onClick={()=>handleTextSubmit()}/>
       </div>
    </div>
    
    </>

  )
}

export default NotesArea