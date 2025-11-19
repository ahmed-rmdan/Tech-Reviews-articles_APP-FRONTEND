import type { post } from "@/types/types"

export const postsadminreduicer={
    setpost(state:{posts:post[],activepage:number},action:{type:string,payload:{posts:post[],activepage:number}}){
               let newposts=state.posts
              action.payload.posts.map(elm=>{
                    newposts.push(elm)
              })
          
          return {posts:newposts,activepage:action.payload.activepage}       
    },




}