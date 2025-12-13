
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThumbsUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { House } from 'lucide-react';
import { Star } from 'lucide-react';
import { Like } from "../global/like";
import { Save } from "../global/save";
import { Scores } from "./scores";


export async function Review({title,image,date, content,summary,
  score,likes , comments,id}:{
   title:string,image:string,date:Date,content:string,summary:string,
   score:number,likes:string[],comments:number,id:string
  }){

         const res=await fetch(`http://localhost:5000/users/getscores?id=${id}`,{             
                    cache:'default',
                    headers:{'Content-Type': 'application/json'} ,
                    next:{tags:['userscore']}
                 })    
    
           if(!res.ok){
            throw new Error('somthing wrong happend')
           }
           const data:{usersno:number,avgscore:number}=await res.json()


return(
           <div className=" h-[23%] w-full sm:w-[90%] xl:w-[60%]    bg-white relative flex flex-col items-start justify-start rounded-[5px] text-black p-4 ">
                            <div className="   flex flex-row justify-around items-center   text-[3.5em] text-gray-600">
                                 <Link className="flex flex-row items-center justify-center gap-[5px] hover:underline" href={'/'}> 
                                       <House size={'1.5em'} ></House>  Home
                                  </Link>
                                   <ChevronRight size={'1.5em'}></ChevronRight>
                                   <a className="flex flex-row items-center justify-center gap-[5px] hover:underline" 
                                    href={'/reviews?sort=Newest&category=AllReviews'} > 
                                       <Star size={'1.5em'}></Star>Reviews</a>
                                  <ChevronRight size={'1.5em'}></ChevronRight>
                                  <p className="hover:underline hover:cursor-pointer"> {title}</p>
                            </div>
                            <Save id={id} type='review' ></Save>
                              <div className=" w-[38%] sm:w-[20%] flex flex-row justify-around gap-[3px] self-end text-[3.5em]">
                                          
                                              <div className="flex flex-row items-center font-bold  gap-[2px] sm:gap-[5px]">
                                              <ThumbsUp size={'1.5em'}></ThumbsUp>
                                               {likes.length}
                                                  </div>
                                                  <div className="flex flex-row items-center font-bold   gap-[2px] sm:gap-[5px]">
                                                        <MessageCircle size={'1.5em'}></MessageCircle>
                                                          {comments}
                                                  </div>
                                  <p > {date.toLocaleDateString('eng-us')}</p>
                              </div>
                              <h1 className="w-full  text-center text-[9.5em] font-extrabold underline">  {title}  </h1>
                              <div className="w-[85%] h-[300px] relative self-center mt-[10px]">                                     
                                       <Image fill alt={title} src={image} className="absolute top-0 "></Image>
                              </div>
                              <p className="text-[5em] leading-normal break-words w-[85%] self-center mt-[20px]">
                                  {content}
                              </p>

                               <div className="flex flex-col w-full items-center justify-center p-2 bg-main mt-[20px] gap-[7px] text-white rounded-2xl">
                                    <h1 className=" w-full text-center text-[6em] underline  font-bold">Summary</h1>
                                    <p className="  text-[4em] w-[75%] break-words text-center"> {summary}</p>
                                    <button className="  w-[70px] h-[70px]  sm:h-[55px] sm:w-[55px]  xl:h-[90px] xl:w-[90px] rounded-[180%] 
                                       border-2 border-[#cb1b16] text-[9em] 
                                           font-bold bg-white text-main">
                                     {score}
                                     </button>                                    
                               </div>
                               <div className=" w-full flex flex-col items-center mt-[20px] gap-[20px] ">
                                       <h2 className="text-[5em] underline font-bold"> User Review</h2>
                                       <div className="flex flex-row items-center gap-[15px] ">
                                             <button className="  w-[50px] h-[50px]  sm:h-[55px] sm:w-[55px]  xl:h-[70px] xl:w-[70px] rounded-[180%] 
                                              border-4  text-[7em] 
                                           font-bold bg-white text-main border-[#cb1b16] ">
                                              {data.avgscore}
                                           </button>
                                           <p className="text-[4em] font-semibold">Based ON  <span className="font-extrabold text-main text-[1.2em] underline" >{data.usersno}</span>  Reviews</p>    
                                       </div>
                                       
                                       <div className="flex flex-col items-center gap-[15px] mt-[10px] ">
                                        <h2 className="text-[4em] text-main font-bold"> choose Your Score </h2>
                                           <Scores id={id}></Scores>
                                             
                                       </div>
                                
                               </div>

                              <div className="w-[25%] items-center justify-center flex flex-row text-center text-[5em] mt-[30px] gap-[8px] ">
                                 <Like type='review' id={id} likes={likes}></Like>
                              </div>                                                                                                                                                                          
           </div>
    )


    
}