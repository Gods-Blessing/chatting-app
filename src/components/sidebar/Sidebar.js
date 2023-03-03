import React, { useEffect, useState } from "react";
import Convos from "./convos/Convos";
import { Maincontainer } from "./sidebarStyle";
import { fake } from "../../fake";
import { useSelector, useDispatch } from "react-redux";

function Sidebar(){
    const [list, setList] = useState([]);
    const user = useSelector((state)=>state.userchat);
    // console.log(user);
    console.log(list);

    useEffect(()=>{
        let arr = fake.map((data)=> data)
        // console.log(arr);
        setList(arr);
    }, []);
// console.log(fake);
// const chat = fake[fake.length - 1];
// console.log(chat)

    return(
        <Maincontainer>
            <h2 style={{marginBottom: 30, textAlign: "center"}}>Conversations</h2>
            <div>
                {
                    list.map((data)=>{
                        // console.log(data.chat.length);
                        let usee = user.chat;
                        let goal = usee[usee.length-1];
                        const lastchat = data.chat;
                        const ans = lastchat[lastchat.length - 1];
                       return <Convos key={data.Id} data={data} lastchat={user.user === data.name ? (goal !== undefined ? goal.message: null):(ans !== undefined ? ans.message: null)} />
                    })
                }

                {/* <Convos/>
                <Convos/> */}
            </div>

        </Maincontainer>

    )
}

export default Sidebar;