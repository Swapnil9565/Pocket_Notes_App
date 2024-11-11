import React from "react";
import styles from "./SideBar.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Notes from "../RightSection/Notes";

const SideBar = ({ showModal, setshowModal }) => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [groups, setGroups] = useState([]);
  const [isGroupSelected, setIsGroupSelected] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [bgcolor, setbgColor] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const groupData = JSON.parse(localStorage.getItem("groupData") || "[]");
    setGroups(groupData);

    const savedNotes = JSON.parse(localStorage.getItem("notesData") || "{}");
    groupData.forEach(group => {
      if (!savedNotes[group.groupName]) savedNotes[group.groupName] = [];
    });
    localStorage.setItem("notesData", JSON.stringify(savedNotes));
  }, [showModal]);

  //Component for generating initials for groupNames
  const GetInitials = ({ groupName = "" }) => {
    const generateInitials = (groupName) => {
      if (!groupName) return "";
      const words = groupName.trim().split(" ");
      if (words.length === 1) {
        return words[0].charAt(0);
      }
      return words[0].charAt(0) + words[1].charAt(0);
    };

    return <div>{generateInitials(groupName)}</div>;
  };
  
  //Click event for group list items
  const handleClick = (index, group) => {
    setActiveGroup(index);
    setIsGroupSelected(true);
    setGroupName(group.groupName);
    setbgColor(group.color);
    setShowSidebar(false);
  };


  return (
    <>
      <div
        className={`${styles.container} ${showSidebar ? "" : styles.hidden}`}>
        <h1 className={styles.heading}>Pocket Notes</h1>
        <div className={styles.group_container}>
          {groups &&
            groups.map((group, index) => {
              return (
                <li
                  className={`${styles.list_items} ${
                    activeGroup === index ? styles.active : ""
                  }`}
                  key={index}
                  onClick={() => handleClick(index, group)}>
                  <h2 style={{ backgroundColor: group.color }}>
                    <GetInitials groupName={group.groupName} />
                  </h2>
                  <p>{group.groupName}</p>
                </li>
              );
            })}

          <div className={styles.icon} onClick={() => setshowModal(true)}>
            <FontAwesomeIcon icon={faPlus} className={styles.plus} />
          </div>
        </div>
      </div>
      <div className={`${showSidebar ? "" : styles.fullWidth}`}>
        <Notes
          groupName={groupName}
          color={bgcolor}
          GetInitials={GetInitials}
          isGroupSelected={isGroupSelected}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
    </>
  );
};

export default SideBar;
