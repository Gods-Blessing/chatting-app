import React, { useEffect, useState } from "react";
import Convos from "./convos/Convos";
import { Maincontainer } from "./sidebarStyle";
import { fake } from "../../fake";
import { useSelector, useDispatch } from "react-redux";
import { doc, updateDoc, arrayUnion, arrayRemove, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebasestore";

function Sidebar(){
    // managing the list of friends
    const [list, setList] = useState([]);
    const user = useSelector((state)=>state.userchat);
    
    useEffect(()=>{
        let arr = [];
        const unsub = onSnapshot(doc(db, "chat", "friends"), (doc) => {
            // console.log("Current data: ", doc.data());
            arr = doc.data().friends;
            setList(arr);
        });

        return ()=>unsub();

    }, []);


    return(
        <Maincontainer>
            <h2 style={{marginBottom: 30, textAlign: "center"}}>Conversations</h2>
            <div>
                {
                    list.map((data)=>{
                        let usee = user.chat;
                        let goal = usee[usee.length-1];
                        const lastchat = data.chat;
                        const ans = lastchat[lastchat.length - 1];

                        // showing all the chats for the friends
                       return <Convos key={data.name} data={data} lastchat={user.user === data.name ? (goal !== undefined ? goal.message: null):(ans !== undefined ? ans.message: null)} />
                    })
                }
            </div>

                {/* container for chat */}
        </Maincontainer>

    )
}

export default Sidebar;