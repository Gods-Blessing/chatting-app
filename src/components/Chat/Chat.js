import React, { useState } from "react";
import { Btn, BtnIconss, Chatinputdiv, Chattting, Iconss, MessageContainer, Messsaged } from "./chatstyle";
import { useDispatch, useSelector } from "react-redux";
import { addingChat } from "../../store/userchatreducer";

function Chat(){
    const dispatch = useDispatch();
    const chatsofpeople = useSelector((state)=>state.userchat);
 
    // managing the state of the message to be sent
    const [inmessage, setInmessage] = useState({user:'',mess:""});

    const handleMessage = (e)=>{
        return setInmessage({user:chatsofpeople.user,mess:e.target.value})
    }


    const handleAddChat = ()=>{
        dispatch(addingChat(inmessage));
        return setInmessage({user:'',mess:""});
    }

    let i = 0;

    return(
        <div style={{flex: 4}}>
            <div style={{
                
                height:"89%",
                padding:"0px 10px",
                overflowX:"hidden",
                overflowY:"hidden",
                
                
            }}>

                {chatsofpeople.user != "" ? chatsofpeople.chat.map((data)=>{
                    
                    return (
                        <MessageContainer key={`chat-${i++}`} end={data.from !== "me" ? "":"end"} >
                            <small>{data.from}</small>
                            <Messsaged >{data.message}</Messsaged>
                        </MessageContainer>
                    )
                }): <h2>No chat selected</h2>}

            </div>


            
            {/* chat input here */}
            <Chatinputdiv style={{display: chatsofpeople.user ? "flex":"none"}}>
                <div style={{flex:2}}>
                    <Iconss src="https://cdn-icons-png.flaticon.com/512/3648/3648803.png" alt="clip" />

                    <Iconss src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />
                </div>

                <div style={{display:"flex", alignItems:"center", flex: 7}}>

                    {/* for input of the message  */}
                    <Chattting style={{flex:4}} value={inmessage.mess} onChange={handleMessage}></Chattting>
                    <Btn onClick={handleAddChat} >
                        <Iconss style={{background:"transparent"}} src="https://cdn-icons-png.flaticon.com/512/876/876777.png" />
                    </Btn>
                </div>
            </Chatinputdiv>

        </div>
    )
}


export default Chat;