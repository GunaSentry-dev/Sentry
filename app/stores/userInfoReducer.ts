import { createSlice } from '@reduxjs/toolkit'

const userInfoSlice = createSlice({
    name: 'UserInfo',
    initialState: {
        userInfo: {} as Object
    },
    reducers: { }
})

export const {  } = userInfoSlice.actions
export default userInfoSlice.reducer