import {configureStore} from '@reduxjs/toolkit';
import userchatslice from './userchatreducer';
const store = configureStore({
    // central store for the app using redux
    reducer:{
        userchat:userchatslice.reducer
    }
});

export default store;