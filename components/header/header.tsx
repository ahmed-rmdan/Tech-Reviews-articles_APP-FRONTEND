'use client'

import React from "react";
import Link from "next/link";

import { DarkLight } from "./darklight";
import { ReviewsDrop } from "./reviewsdrop";

import { AlignJustify } from 'lucide-react';
import { useState,useEffect } from "react";
import {motion} from 'framer-motion'
import { AnimatePresence } from "framer-motion";
import { Searchinput } from "../global/search";
import { UserRoundPen } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { LogOut } from 'lucide-react';


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardLogin } from "../user/login";

import { House } from 'lucide-react';
import { Search } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { Star } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { User } from 'lucide-react';
import Image from "next/image";
import { Profile } from "../user/profile";

import { useRouter } from "next/navigation";

import { SearchHeader } from "./searchheader";

import { useSession } from "next-auth/react";



export function Header(){
    const router=useRouter()
const [width,setwidth]=useState<number>(0)
const [menu,setmenu]=useState<boolean>(false)
const [search,setsearch]=useState<boolean>(false)
const [sign,setsign]=useState<boolean>(false)
const [profile,setprofile]=useState<boolean>(false)
const {status,data}=useSession()

useEffect(()=>{
setwidth(window.screen.width)
  window.addEventListener('resize',()=>{
     const size=window.screen.width
     setwidth(size)

  })

},[width])

function handleclick(){
    setmenu(prev=>!prev)
}

function handlenavigate(input:string){
  const section=document.getElementById(`section-${input}`)
  section?.scrollIntoView({behavior:'smooth'})
}
function handlesearch(){
  setsearch(prev=>!prev)


}

if(width>=768){
return(
           <nav className="flex flex-row xl:flex-row sticky  top-0  z-[10000]  min-w-full  p-5  
            items-center bg-[#cb1b16] text-white text-[2.5px] sm:text-[4px]   lg:text-[4px]  xl:text-[4px] 2xl:text-[4.5px] min-h-[30px]   ">
              <div className="flex flex-row items-center justify-center    sm:min-w-[20%] 
              text-white font-semibold   w-[35%] text-[3em]   md:text-[5em] lg:text-[4em]   xl:text-[5em]  ">
                <div className="flex w-full sm:text-[0.75em] lg:text-[1em]   h-full justify-center items-center gap-[12%]">
                    <div className="flex flex-row gap-[5px] items-center">
                      <House size={'1.4em'}></House>
                      <Link href={'/'}  className="hover:underline hover:cursor-pointer" > HOME</Link>
                    </div>
                     <div className="flex flex-row gap-[5px] items-center">
                      <Newspaper size={'1.4em'}></Newspaper>
                      <Link  href={'/blog?sort=Newest'} className="hover:underline hover:cursor-pointer text-[1.1em]" > Blog</Link>
                    </div>
                  <ReviewsDrop></ReviewsDrop>
          
                </div>               
         
               </div>       

              <Link href={'/'} onClick={()=>{handlenavigate('1')}} className=" text-center  font-extrabold w-[30%] 
                                sm:text-[6em]  lg:text-[9em] 
                                hover:cursor-pointer   ">
                       FineTech
                
              </Link>
              <div className="flex flex-row relative items-center justify-center rounded-2xl w-[30%] gap-[13%]">
               {  !data && sign&&  <div  onMouseLeave={()=>{setsign(prev=>false)}}  onMouseEnter={()=>{setsign(prev=>true)}} 
               className=" absolute w-[300px] xl:w-[370px] h-[350px] 
                     right-[70px]  xl:right-[150px]  2xl:right-[220px] top-[30px] rounded-2xl bg-[#e5e7eb]">
                                       <CardLogin></CardLogin>
                                   </div>}
                   
               { !data &&  <Link href={'/login'} onMouseEnter={()=>{
                                 setsign(prev=>true)
                                 setsearch(false)
                               }} className=" sm:text-[3em] lg:text-[3em] xl:text-[4.5em] self-center font-semibold hover:underline hover:cursor-pointer">
                                   LogIn/SignUp
                           </Link>}
 
              {data && <>
                         <Link href={'/user/profile'} onMouseEnter={()=>{
                  setprofile(prev=>true)
                 }} className="relative w-[35px] lg:w-[45px] rounded-[180%] h-[35px] lg:h-[45px] ">
                             <Image src={!data?.user.image?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png':data.user.image as string} fill alt="profilepic" className="absolute
                              w-full top-0 h-full rounded-[180%] "></Image>
                   </Link>
               {  profile&&  <div  onMouseLeave={()=>{setprofile(prev=>false)}}  onMouseEnter={()=>{setsign(prev=>true)}} className=" absolute w-[300px] xl:w-[370px] 
                     right-[70px]  xl:right-[130px]  2xl:right-[220px] top-[45px] rounded-2xl bg-[#e5e7eb]">
                          <Profile></Profile>
                   </div>}                                       
               </>}                    
                  <Search onClick={handlesearch} className=" hover:cursor-pointer" size={'7.5em'} ></Search>
                  <DarkLight></DarkLight>  
              </div>
               { search && <SearchHeader></SearchHeader> }
                                   
           </nav>
    )
}
else {
  return(
   <nav className="flex flex-row sticky top-0 bg-[#cb1b16] text-white z-[10000]  min-w-full  p-3  justify-between 
  items-center  text-[2.5px]  min-h-[20px]   ">
             <div className="flex flex-row w-[100%] text-[1em] justify-between items-center gap-[10%]">
                  <AlignJustify color="white" className="min-w-[10%]" onClick={handleclick}></AlignJustify>
             
                      <div className="flex w-[75%] gap-[10%] flex-row items-center justify-center  ">
                          <Link href={'/'}  className=" text-center  font-extrabold w-[50%] 
                                text-[7em]  
                                hover:cursor-pointer ">
                                 FineTech
                
                          </Link>
                              <div className="flex flex-row w-[30%] justify-center gap-[13%] ">

                                <Search className=" hover:cursor-pointer" size={'9em'} onClick={handlesearch}></Search>
                 
                              </div>
                                  {     search &&  <div className=" absolute flex flex-row top-[50px]  items-center justify-center right-[17px] 
                                                gap-[5px] bg-[#e5e7eb] z-100  w-[200px] h-[50px]">
                         <Input type="text" className=" border-[#cb1b16] text-[4em] w-[67%] border-2 text-[#cb1b16] bg-white "  />
                          <Button type="submit" variant="outline" className=" bg-[#cb1b16] hover:bg-[#cb1b16] text-[4em]  font-bold w-[25%]
                           hover:cursor-pointer hover:text-white " >
                             Search
                            </Button>
                </div>}                
                    </div>
        
             </div>
             <AnimatePresence>
              {menu?<motion.div initial={{width:0,opacity:0}} animate={{width:150,opacity:100}} transition={{duration:0.5}}
              exit={{width:0,opacity:0}} className="flex flex-col absolute left-0 top-[48px] h-[850px] w-[35%] 
              items-center justify-start bg-[#cb1b16]  ">

                
                 <div className="flex flex-col w-full mt-[30px] min-h-[100%] items-center justify-start gap-[5%] text-[13px] 
              text-white font-semibold  ">
                          <div className="flex flex-row justify-start h-[5%] w-[70%] items-center">
                                <Moon size={'2em'}></Moon>
                               
                           </div>
                      <div className="flex flex-col w-full      items-center gap-[55px]">

                          <div className="flex flex-row gap-[5px] items-center">
                                <House size={'1.4em'}></House>
                               <Link href={'/'} className="hover:underline hover:cursor-pointer" > HOME</Link>
                           </div>
                              <div className="flex flex-row gap-[5px] items-center">
                                <Newspaper size={'1.4em'}></Newspaper>
                               <Link href={'/blog?sort=Newest'}  onClick={()=>{handlenavigate('3')}} className="hover:underline hover:cursor-pointer text-[1.1em]" > Blog</Link>
                           </div>
                           
                              <div className="flex flex-row gap-[5px] items-center">
                                <Star size={'1.4em'} fill="white"></Star>
                               <Link  href={'/reviews?sort=Newest&category=AllReviews'}  className="hover:underline hover:cursor-pointer text-[1.05em]"> Reviews</Link>
                           </div>                                    
                      </div>
                  { !data  && <div className="flex flex-col w-full border-t-2 p-7   text-[1.1em]  items-center gap-[50px]">
                                  
                                  <Link href={'/login'}  >Login</Link>
                                   <Link href={'/signup'}  >Signup</Link>
                                                               
                      </div>}
                  {  data && <div className=" flex flex-col items-center gap-[30px] border-t-2 text-[1em] p-7 ">
                            <div className=" relative w-[50px] h-[50px] rounded-[180%]">
                                <Image onClick={()=>router.push('/user/profile')}   src={!data?.user.image?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png':data.user.image as string} 
                                      alt="profilepic" fill className="rounded-[180%]" ></Image>
                                                              
                            </div>
                            <div className="flex flex-row gap-[7px] text-white">
                                 <UserRoundPen color="white"></UserRoundPen>
                                <Link href={'/user/edit'} className=" font-bold hover:underline"> Edit</Link>
           
                         </div>
                         <div className="flex flex-row gap-[7px] items-center">
                                <Bookmark ></Bookmark>
                               <Link href={'/user/saved'} className="  font-bold hover:underline"> Saved</Link>
            
                        </div>
                        <div className="flex flex-row text-center gap-[7px]">
                               <ThumbsUp ></ThumbsUp>
                             <Link href={'/user/liked'} className="  font-bold hover:underline"> Liked</Link>
              
                       </div>       
                       <div className="flex flex-row items-center gap-[7px]">
                            <LogOut ></LogOut>
                           <p   className=" font-bold hover:underline hover:cursor-pointer "> LogOut</p>
            
                      </div>            
                
                    </div>  }                    
                                               
                         
                            
                </div> 
                                    
             </motion.div>: ''}


             </AnimatePresence>
         
      
          

                         
  </nav>

  )
}
    
}