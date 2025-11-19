'use client'
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from 'lucide-react';
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Filter:React.FC<{type:string,filter:string,search?:string}>=(props)=>{
      const router=useRouter()
const [clicked,setclicked]=useState<boolean>(false)
function handleclick(){
setclicked(prev=>!prev)
}
function onselect(elm:string){
  if(props.filter==='postsadmin'){
      router.push(`/dashboard/posts?activepage=1&sort=${elm}`)
  }
    if(props.filter==='searchpostsadmin'){
      router.push(`/dashboard/posts/search?search=${props.search}&activepage=1&sort=${elm}`)
  }
if(props.filter==='posts'){
 
   location.href=`/blog?sort=${elm}`
}
    if(props.filter==='searchposts'){
      location.href=`/blog/search?search=${props.search}&sort=${elm}`
  }
  
  
}
return(
 
 <div onClick={handleclick}  className="flex relative items-center justify-center !h-[25px] sm:!h-[35px] w-[12%] sm:w-[7%] bg-[#cb1b16]  !text-[0.8em]
  rounded-[5px] text-white hover:cursor-pointer">
         <SlidersHorizontal ></SlidersHorizontal>
   {  clicked &&     <div className="absolute flex flex-col items-center justify-center top-[30px] sm:top-[40px] gap-[5px] w-[95px] sm:w-[140px]
     text-[#cb1b16] text-[6em] sm:text-[5em] rounded-[4px] 
           border-1 z-50 bg-white border-[#cb1b16] hover:cursor-auto ">
                   <button className="w-full hover:bg-[#cb1b16] hover:text-white hover:cursor-pointer font-semibold " onClick={()=>onselect('Newest')}>Newest</button>
                   <button className="w-full hover:bg-[#cb1b16] hover:text-white hover:cursor-pointer font-semibold  " onClick={()=>onselect('Oldest')}  >Oldest</button>
                   <button className="w-full hover:bg-[#cb1b16] hover:text-white hover:cursor-pointer font-semibold" onClick={()=>onselect('Most liked')}> Most liked </button>
                   <button className="w-full hover:bg-[#cb1b16] hover:text-white hover:cursor-pointer font-semibold" onClick={()=>onselect('Most viewed')}> Most viewed </button>
                   { props.type==='reviews' &&<>                   
                   <button className="w-full hover:bg-[#cb1b16] hover:text-white hover:cursor-pointer font-semibold" onClick={()=>onselect('Most Rated')}> Most Rated </button>
                                      
                   </>}
                   
          </div>}
 </div>

   

)

}