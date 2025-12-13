'use client'

import { ThumbsUp } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useAppSelector } from "@/state/hook"
import { useState } from "react"
import { useAppDispatch } from "@/state/hook"
import { useractions } from "@/state/state"
import { liking } from "@/actions/actions"
export function Like({likes,id,type}:{likes:string[],id:string,type:'post'|'review'}){
const dispatch=useAppDispatch()
const {data,update}=useSession()
const [likesnum,setlikesnum]=useState<number>(likes.length)
const liked=useAppSelector(state=> state.user.likes)
const router=useRouter()
console.log(liked)
console.log(id)
function handlenotauth(){
    toast.warning('you are not logged in')
    router.push('/login')
}


async function  addlike(){
   
    if(liked.includes(id)){
        dispatch(useractions.addlike({id:id,type:'like'}))
        setlikesnum(prev=>prev-1)
    }else{
     dispatch(useractions.addlike({id:id,type:'like'}))
     setlikesnum(prev=>prev+1)
    }

const res=await liking(data?.user.id as string,id,type)

    
     if(!res.ok){
        toast.warning('failed to connect')
        return
     }
     console.log('sucess')                           


}

    return(
            < >
                 { !data ?<ThumbsUp  size={'1.5em'} fill='white' onClick={handlenotauth} className="hover:cursor-pointer"></ThumbsUp>
                  :<ThumbsUp onClick={addlike}  size={'1.5em'} fill={liked.includes(id)?"black" :'white' } className="hover:cursor-pointer"></ThumbsUp>}
                 <span className="text-center font-bold">{likesnum}</span>
              </>  
    )
}