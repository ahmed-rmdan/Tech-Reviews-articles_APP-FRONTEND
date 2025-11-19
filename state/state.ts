import { createSlice ,configureStore} from "@reduxjs/toolkit";
import { postsadminreduicer } from "./reducers/posts";
import type { post } from "@/types/types";


const postsadminslice=createSlice({name:'posts',initialState:{posts:[] as post[],activepage:1},reducers:postsadminreduicer})

export const postsadminactions=postsadminslice.actions


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store=configureStore({reducer:{pages:postsadminslice.reducer}})