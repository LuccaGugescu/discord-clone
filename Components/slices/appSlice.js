import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    channelId: null,
    channelName: null
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setChannelId: (state, action) => {
            state.app += action.payload;
        },

    }
});

export const { setChannelId } = appSlice.actions;

//actions
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) =>state.app.channelName;

export default appSlice.reducer;