'use client'

import { ThumbsUp } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useAppSelector } from "@/state/hook"
import { useState } from "react"
import { useAppDispatch } from "@/state/hook"
import { useractions } from "@/state/state"
import { Bookmark } from "lucide-react"
export function Save({id,type}:{id:string,type:'post'|'review'}){
const dispatch=useAppDispatch()
const {data,update}=useSession()

const saves=useAppSelector(state=> state.user.saves)
const router=useRouter()

console.log(id)
function handlenotauth(){
    toast.warning('you are not logged in')
    router.push('/login')
}


async function  addlike(){
         
       if(!saves.includes(id)){
          toast.info(`${type} has been saved`) 
       }else{
        toast.info(`${type} has been unsaved`) 
       } 


     dispatch(useractions.addlike({id:id,type:'save'}))  

  const res=await fetch(`http://localhost:5000/users/addsave`,{ 
                     method:'POST'    
                     , 
                    cache:'default',
                    headers:{'Content-Type': 'application/json'} ,
                    body:JSON.stringify({id:data?.user.id,
                        itemid:id,
                        kind:type,
                        
                    })       
                           }
                        )
    
     if(!res.ok){
        toast.warning('failed to connect')
        return
     }
                      

}

    return(
            < >
                 { !data ?<Bookmark  size={'8.5em'} fill='white' onClick={handlenotauth} className="self-end mr-[30px] mb-[15px]  hover:cursor-pointer"></Bookmark>
                  :<Bookmark onClick={addlike}  size={'8.5em'} fill={saves.includes(id)?"black" :'white' } className="self-end mr-[30px] mb-[15px] hover:cursor-pointer"></Bookmark>}
                 
              </>  
    )
}