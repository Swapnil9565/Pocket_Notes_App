import { useEffect, useState } from "react";
import React from "react";
import styles from "./PopupModal.module.css";
const PopupModal = ({ setshowModal }) => {
  const [formData, setFormData] = useState({ groupName: "", color: "" });
  const [savedDataToLS, setSavedDataToLs] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("groupData")) || [];
    return savedData;
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // For Closing Modal
  const closeModal = () => {
    setshowModal(false);
  };
  useEffect(() => {
    const groupData = (localStorage.getItem("groupData"));
    if (groupData) {
      setSavedDataToLs(JSON.parse(groupData));
    }
},[]);

   const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData=[...savedDataToLS,formData]
    localStorage.setItem("groupData", JSON.stringify(updatedData));
    setFormData({ groupName: "", color: "" });
    setshowModal(false);
  };
 
  
  //For Checking both fields are filled
  const isFormValid = formData.groupName && formData.color;
  return (
    <>
      <div className={styles.container} onClick={() => closeModal()}>
        <div className={styles.form} onClick={(e) => e.stopPropagation()}>
          <p className={styles.label}>Create New Group</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='name' style={{display:"flex"}}>
              <p className={styles.label}>Group Name</p>
              <input
                type='text'
                name='groupName'
                placeholder='Enter group name'
                value={formData.groupName}
                className={styles.input}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <div className={styles.color_picker}>
              <p className={styles.label}>Choose Color</p>
              <div className={styles.color_options}>
              <label>
                <input
                  type='radio'
                  name='color'
                  value='#B38BFA'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  checked={formData.color === "#B38BFA"}
                />
                <span
                  className={styles.color_circle}
                  style={{ backgroundColor: "#B38BFA" }}></span>
              </label>
              <label>
                <input
                  type='radio'
                  name='color'
                  value='#FF79F2'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  checked={formData.color === "#FF79F2"}
                />
                <span
                  className={styles.color_circle}
                  style={{ backgroundColor: "#FF79F2" }}></span>
              </label>
              <label>
                <input
                  type='radio'
                  name='color'
                  value='#43E6FC'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  checked={formData.color === "#43E6FC"}
                />
                <span
                  className={styles.color_circle}
                  style={{ backgroundColor: "#43E6FC" }}></span>
              </label>
              <label>
                <input
                  type='radio'
                  name='color'
                  value='#F19576'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  checked={formData.color === "#F19576"}
                />
                <span
                  className={styles.color_circle}
                  style={{ backgroundColor: "#F19576" }}></span>
              </label>
              <label>
                <input
                  type='radio'
                  name='color'
                  value='#0047FF'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  checked={formData.color === "#0047FF"}
                />
                <span
                  className={styles.color_circle}
                  style={{ backgroundColor: "#0047FF" }}></span>
              </label>
              <label>
                <input
                  type='radio'
                  name='color'
                  value='#6691FF'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  checked={formData.color === "#6691FF"}
                />
                <span
                  className={styles.color_circle}
                  style={{ backgroundColor: "#6691FF" }}></span>
              </label>
              </div>
            </div>
            <div className={styles.button}>
              <input type='submit' value='Create' disabled={!isFormValid} style={{backgroundColor:isFormValid?"#001F8B":"#92a4e4",cursor:isFormValid?"pointer":"not-allowed",opacity:isFormValid ? 1 : 0.6}}/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopupModal;
