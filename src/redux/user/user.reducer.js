import {UserActionTypes} from '../user/user.type';

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return { ...state, currentUser: action.payload };

        default:
            return state;
    }
}

export default userReducer;

// import { createSlice } from '@reduxjs/toolkit'

// export const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         currentUser: null
//     },
//     reducers: {
//       userReducer: (state, action) => {
//         switch (action.type) {
//             case 'SET_CURRENT_USER':
//                 return state.currentUser = action.payload;
                
//             default:
//                 return state;
//         }
//       },
//     },
// })

// export const { userReducer } = userSlice.actions;

// export default userSlice.reducer;