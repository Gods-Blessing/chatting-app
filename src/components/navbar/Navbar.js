import React, { useState } from "react";
import { fake, people } from "../../fake";
import { Nav, Search,Linkss, Img, Addingtolistbtn} from "./stylesfornav";
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { db } from "../../firebasestore";
import { useDispatch } from "react-redux";
import { addingUser } from "../../store/userchatreducer";

function Navbar(){
    const dispatch = useDispatch();

    // managing the state of input for search
    const [find, setFind] = useState('');
    // searched found person state
    const [found, setFound] = useState({});
    // set the visibility of the searched output
    const [isVisible, setisVisible]= useState(false);
    
    // managing the state of the input for search bar
    function handleFind(e){
        // console.log(e.target.value)
        setFind(e.target.value);
    }

    // finding the element from the data
    function findingg(){
        people.map((item)=>{
            if(item.name == find){
                setFound(item);
                setisVisible(true);
            }
        })
    }

    // to handle the visiblity of the element
    function handleIsvisible(){
        setisVisible(false);
        setFind('');
    }

    // to add the searched person to the friends list
    function addingTofriend(){
        async function b(){
            const docRef = doc(db, "chat", "friends");
            const docSnap = await getDoc(docRef);
            // console.log(docSnap.data());
            let dataindb = docSnap.data();
            dataindb.friends.map((item)=>{
                if(item.name == found.name){
                    dispatch(addingUser(found));
                setisVisible(false);
                setFind('');
                return
                }
                
            });

            await updateDoc(docRef, {
                friends: arrayUnion(found)
            });
        }
        b();

        setisVisible(false);
        setFind('');
    }



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
                <div style={{
                        width:"60%",
                        marginRight:"20px",
                        display:"flex",
                        position:"relative"}
                    }>

                    <Search placeholder="Search user"  value={find} onChange={handleFind} onClick={findingg}  />
                    <div onClick={handleIsvisible} style={{
                            width:"100%",
                            height:"100%",
                            position:"absolute",
                            top:"100%",
                            display:isVisible ? "flex": "none",
                            backgroundColor:"white",
                            border:"1px solid red",
                            zIndex:2,
                            justifyContent:"space-around",
                            alignItems:"center",
                            fontWeight:700,
                            borderRadius:"10px"
                        }}>
                            {found.name}
                            <Addingtolistbtn onClick={addingTofriend}>Add to friends</Addingtolistbtn>
                            
                    </div>
                </div>
                <Img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"/>
            </div>

        </Nav>
    )
}


export default Navbar;