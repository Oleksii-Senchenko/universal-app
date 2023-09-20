import { createSlice } from '@reduxjs/toolkit'
import { getCurrentUser, logInUser, logOut, registerUser } from './operationsAuth'

const signInSlice = createSlice({

    name: 'auth',
    initialState: {
        user: {
            name: '',
            email: ''
        },
        isLogin: false,
        token: null

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.isLogin = true
            state.token = action.payload.token

        })
        builder.addCase(logInUser.fulfilled, (state, { payload }) => {
            state.user = payload.user
            state.isLogin = true
            state.token = payload.token
        })
        builder.addCase(logOut.fulfilled, (state, action) => {
            state.user = {
                name: null,
                email: null,
            }
            state.token = null
            state.isLogin = false
        })
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLogin = true
        })
    }

})


export default signInSlice