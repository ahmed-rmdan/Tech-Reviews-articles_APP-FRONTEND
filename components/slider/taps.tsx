

'use client'

import React from "react";

import type { post } from "@/types/types";
import { ItemSlider } from "./item"
import { useState,useEffect } from "react"
import {motion} from 'framer-motion'
export function Taps({posts}:{posts:post[]}){
    
const [number,setnumber]=useState<number>(0)

useEffect(()=>{
    const length=posts.length
  
  const timer=setInterval(()=>{


    if(number<length-1){
      setnumber(prev=>prev+1)
    }else{
        setnumber(0)
    }
   
  },3000)

  return  ()=>clearInterval(timer)
  

},[number])

return(
       
         <div className="flex flex-row items-center absolute bottom-[2.5%] sm:bottom-[4%] xl:bottom-[4.5%] right-[10%] w-[80%] h-[5%] gap-[3%] justify-center wrap-break-word ">
{                    posts.map((elm,i)=>{
                             
                     return(
                          <button className={` h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] rounded-[180%] ${ (number===i)?'bg-[#cb1b16]':'bg-white' } `}></button>
                     )
                     
                                       })
                         }   
                
                                 
        </div>

  
    )


    
}