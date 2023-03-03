import {configureStore} from '@reduxjs/toolkit';
import userchatslice from './userchatreducer';
const store = configureStore({
    reducer:{
        userchat:userchatslice.reducer
    }
});

export default store;