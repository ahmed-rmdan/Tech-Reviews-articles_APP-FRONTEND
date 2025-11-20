'use client'
import Image from "next/image"

import { Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';
import { Eye } from 'lucide-react';

import { toast } from "sonner"
import { useRouter } from "next/navigation";

export   function ReviewItemAdmin({title,mainimage,date,id,score}
  :{title:string,mainimage:string,date:Date,id:string,score:number}) {
const router= useRouter()
 
  async function handledelete(){{
    const confirm=window.confirm( `You are deleting post:${title} parmently from the database are you sure ?`)
    
    if(!confirm){
         return
    }
       const res=await fetch('http://localhost:5000/posts/deletepost',{
        method:'DELETE',
        headers:{    'Content-Type': 'application/json'},
        body:JSON.stringify({id})
       })  
       
       if(!res.ok){
        console.log(id)
       }

        router.push(`/dashboard/posts?activepage=1&sort=Newest`)   
       toast.success('post has been deleted ')

  }}

  
  return (
       <div className="flex flex-row items-center  p-2 sm:p-6 justify-between  w-full bg-white h-[80px]   ">
            <div className="flex flex-row items-center gap-[15px] ">
                <div className="relative w-[60px] sm:w-[90px] xl:w-[140px] h-[65px]">
                    <Image alt="postitemAdmin" fill src={mainimage}></Image>
                 </div>
                 <p className="font-bold text-[5em] sm:text-[5em]   lg:text-[5.5em] "> {title}</p>
                 <button className="  w-[30px] h-[30px]  sm:h-[40px] sm:w-[40px]  xl:h-[50px] xl:w-[50px] rounded-[180%] 
                          border-2 border-[#cb1b16] text-[4em] ml-[10px] sm:ml-[25px]
                      font-bold bg-white text-main">
                                    {score}
              </button>     

            </div>
   
            <div className="flex flex-row items-center gap-[10px]  sm:gap-[15px] xl:gap-[30px] ">
                     <Pencil  size={'6em'} color="#cb1b16" className="hover:cursor-pointer" onClick={()=>{router.push(`/dashboard/postedit?id=${id}`)}} ></Pencil>
                     <Trash size={'6em'} color="#cb1b16" className="hover:cursor-pointer" onClick={handledelete}></Trash>

                     
                     <p className="text-[3em] text-main">{ date.toLocaleDateString('en-US')}</p>
            </div>
                     

         
      </div>
  )

}