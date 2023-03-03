import { createSlice } from "@reduxjs/toolkit";

// {localStorage.key === "status" ? console.log("yes"):console.log("No")}; 
// console.log(JSON.parse(localStorage.getItem("status")))


const userchatslice = createSlice({
    name:"userchat",
    initialState:localStorage.getItem("status") === null ? {
        // friends:[],
        user:"",
        chat:[],
        back:""
    }: JSON.parse(localStorage.getItem("status")),
    // initialState:{
    //     user:"",
    //     chat:[],
    //     back:""
    // },
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
                // ...state,
                user: payload.payload.name,
                chat:payload.payload.chat,
                back:"#8afa6b"
            };
        },

        addingChat: (state, payload)=>{
            console.log(payload.payload);
            // console.log(state);
            let adchat =JSON.parse(localStorage.getItem("status"));
            adchat.chat.push({from:"me",message:payload.payload})
            console.log(adchat);
            localStorage.setItem("status", JSON.stringify(adchat));
            return {...state,
                chat: [...state.chat ,{from:"me",message:payload.payload}],
            };
        },

        // addingFriend:(state, payload)=>{
        //     console.log(payload.payload)
        //     return {
        //         ...state,
        //         friends:[...state.friends, payload.payload]
        //     }
        // }
    }
});


export const {addingUser, addingChat, addingFriend} = userchatslice.actions;
export default userchatslice;