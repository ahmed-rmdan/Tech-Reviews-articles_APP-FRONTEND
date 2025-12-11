import { createSlice ,configureStore} from "@reduxjs/toolkit";
import { postsadminreduicer } from "./reducers/posts";
import type { post } from "@/types/types";
import { userreducer } from "./reducers/user";


// const postsadminslice=createSlice({name:'posts',initialState:{posts:[] as post[],activepage:1},reducers:postsadminreduicer})

// export const postsadminactions=postsadminslice.actions

const userslice=createSlice({name:'user',initialState:{likes:[] as string[],saves:[] as string[]},reducers:userreducer})
export const useractions=userslice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store=configureStore({reducer:{user:userslice.reducer}})