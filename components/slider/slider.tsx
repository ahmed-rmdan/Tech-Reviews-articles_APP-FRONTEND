



import React from "react";
import { ItemSlider } from "./item";
import { Taps } from "./taps";
import type { post } from "@/types/types";
import { Itemgroup } from "./itemgroup";

export async function Slider(){


      const res=await fetch(`http://localhost:5000/posts/getsliderposts`,{      
              cache:'no-store',
              headers:{'Content-Type': 'application/json'}        
                     })
                       if(!res.ok){
                        throw new Error('somthing went wrong')
                       }
                     const data:{posts:post[]}=await res.json()



return(
        <section className="flex flex-col h-[500px] sm:h-[650px]  w-full justify-center
            items-center text-white text-[2.5px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
         <div className=" w-[95%] sm:w-[85%]  xl:w-[80%] 2xl:w-[60%]  h-[85%] relative justify-center items-center bg-black rounded-2xl">
                 <div className="min-w-full min-h-full  flex flex-row overflow-hidden">
                       <Itemgroup posts={data.posts}></Itemgroup>
                 </div>
                <Taps posts={data.posts}></Taps>

         </div>
                  
                   
                                   
        </section>
    )


    
}