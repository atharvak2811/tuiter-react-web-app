import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {createTuitThunk} from "../services/tuits-thunks";
import {findTuitsThunk} from "../services/tuits-thunks";
import {deleteTuitThunk} from "../services/tuits-thunks";
import {updateTuitThunk} from "../services/tuits-thunks";
const initialState = {
   tuits: [],
   loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};
   
const templateTuit = {
    ...currentUser,
    "topic": "New Topic",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
    [updateTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
      state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
    }
,  
    [createTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false
      state.tuits.push(payload)
  },

    [deleteTuitThunk.fulfilled] :
    (state, { payload }) => {
    state.loading = false
    state.tuits = state.tuits .filter(t => t._id !== payload)
  }
,
   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuits = [] },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuits = payload },
   [findTuitsThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   }
 },

 reducers: { }
});

export const { toggleLike, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;