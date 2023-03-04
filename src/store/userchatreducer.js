import { createSlice } from "@reduxjs/toolkit";
import { doc, updateDoc, arrayUnion, arrayRemove,onSnapshot , getDoc} from "firebase/firestore";
import { db } from "../firebasestore";



// slice for the user
const userchatslice = createSlice({
    name:"userchat",
    initialState:localStorage.getItem("status") === null ? {
        user:"",
        chat:[],
        back:""
    }: JSON.parse(localStorage.getItem("status")),
    reducers:{

        addingUser: (state, payload) =>{
            console.log(payload.payload.name);

            let my = {
                ...state,
                user: payload.payload.name,
                chat:payload.payload.chat,
                back:"#8afa6b"
            };
            let ans = JSON.stringify(my)

            localStorage.setItem("status",ans);
            return {
                user: payload.payload.name,
                chat:payload.payload.chat,
                back:"#8afa6b"
            };
        },

        addingChat: (state, payload)=>{
            console.log(payload.payload);

            let arr = [];
            let foundele; 
            let game ;
            let temp;

            async function a(){
                const docRef = doc(db, "chat", "friends");
                const docSnap = await getDoc(docRef);
                console.log(docSnap.data());

                foundele = docSnap.data().friends.find(item=> item.name == payload.payload.user)
                console.log(foundele);

                temp = JSON.parse(JSON.stringify(foundele));

                foundele.chat.push({from:"me", message:payload.payload.mess})

        
                await updateDoc(docRef, {
                    friends: arrayRemove(temp)
                });
                await updateDoc(docRef, {
                    friends: arrayUnion(foundele)
                })
        };

            a();

            return {...state,
                chat: [...state.chat ,{from:"me",message:payload.payload.mess}],
            };
        },

        
    }
});


export const {addingUser, addingChat, addingFriend} = userchatslice.actions;
export default userchatslice;