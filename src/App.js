import React, { useEffect } from "react";
import Chat from "./components/Chat/Chat";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";


function App() {

  // setting the title of the page
  useEffect(()=>{
    document.title = "Chattt"
  },[]);

  
  return (
    <div className="App">
      <Navbar/>
      <div style={{display: "flex", height: "88.5vh", paddingTop: 5}}>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
