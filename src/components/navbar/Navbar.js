import React from "react";
import { Nav, Search,Linkss, Img} from "./stylesfornav";

function Navbar(){
    

    return(
        <Nav>
            <div><h2 style={{fontFamily: "cursive"}}>Chattt</h2></div>

            <Linkss>
                <h3>
                    Home
                </h3>
                <h3>
                    Friends
                </h3>
            </Linkss> 

            <div style={{display: "flex", justifyContent:"flex-end",width:"40%"}}>
                <Search placeholder="Search user" />
                <Img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"/>
            </div>

        </Nav>
    )
}


export default Navbar;