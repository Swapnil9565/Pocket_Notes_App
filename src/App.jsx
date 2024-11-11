import PopupModal from "./Components/PopupModal"
import Home from "./Components/LeftSection/SideBar"
import styles from "./App.module.css"
import { useState } from "react"

function App() {
   const [showModal, setshowModal] = useState(false);
  return (
    <div className={styles.container}>
      <Home showModal={showModal} setshowModal={setshowModal}/>
      {showModal&&(<PopupModal setshowModal={setshowModal}/>)}
    </div>
  )
}

export default App
