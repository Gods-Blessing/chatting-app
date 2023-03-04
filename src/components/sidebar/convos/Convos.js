import React from "react";
import { Imageofpeople, People } from "../sidebarStyle";
import { useSelector, useDispatch } from "react-redux";
import { addingUser } from "../../../store/userchatreducer";


function Convos(props){
    const backcolor = useSelector((state)=>state.userchat);
    const dispatch = useDispatch();
    
    return(
        <People style={{
            backgroundColor: backcolor.user === props.data.name ? backcolor.back : "",
            }} onClick={()=>dispatch(addingUser(props.data))}>

            <Imageofpeople src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="User"/>

            <div>
                <div style={{
                        display:"flex",
                        justifyContent: "space-between",
                        alignItems:"center",
                        width: "200px",
                        marginLeft: 20,
                        marginBottom: 7,
                         "&:hover":{
                            backgroundColor: "gray"
                         }
                        }}>

                    <p style={{fontWeight: 700}}>
                        {props.data.name}
                    </p>

                    <p style={{color: "gray", fontSize: 15}}>
                        Time
                    </p>
                </div>

                <div style={{marginLeft: 20}}>
                    <p style={{color: "gray", fontSize: 15}}>
                        {props.lastchat}
                    </p>
                </div>
            </div>
        </People>
    )

}

export default Convos;