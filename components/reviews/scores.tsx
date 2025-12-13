'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
let arr=[1,2,3,4,5,6,7,8,9,10]


export function Scores({id}:{id:string}){

const {data:session}=useSession()
const router=useRouter()

 async function handleclick(elm:number){
  if(!session){
    toast.info('you are not logged in to add score')
     router.push('/login')
     return
  }
  
  const res=await  fetch(`http://localhost:5000/users/addscore`,{
                  method:'PUT'
                  ,
              headers:{'Content-Type': 'application/json'},
             body:JSON.stringify({id:session.user.id,
                reviewid:id,
                score:elm
             })
        })

        if(res.status===404){
             toast.info('you already added a score')
             return
        }
        if(!res.ok){
             toast.error('failed to connect ')
             return
        }
        toast.success('score has been added')
       router.refresh()


 }   
    return(
                   <div className=" grid grid-cols-4 grid-rows-3   sm:grid-cols-10 sm:grid-rows-1 gap-[8px] sm:gap-[7px] lg:gap-[15px]">
                                                 
                                          
                                   {arr.map(elm=>{
                                   return <button key={elm} onClick={()=>handleclick(elm)} className="w-[50px] h-[50px] rounded-[180%]  text-[5em] border-3 text-main hover:cursor-pointer
                                     hover:border-gray-700 hover:text-gray-700 border-[#cb1b16] font-bold ">
                                                         {elm}
                                </button>} )}                                                                                                   
                    </div>
    )
}