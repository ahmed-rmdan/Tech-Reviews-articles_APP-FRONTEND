
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { House } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { Star } from 'lucide-react';
import { Like } from "../global/like";
import { Save } from "../global/save";
let arr=[1,2,3,4,5,6,7,8,9,10]

export const Review:React.FC<{title:string,description:string,image:string,date:Date , content:string,summary:string,
  score:number,userscore:number,views:number,likes:string[] , comments:number,id:string}>=(props)=>{
    



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
                                  <p className="hover:underline hover:cursor-pointer"> {props.title}</p>
                            </div>
                            <Save id={props.id} type='review' ></Save>
                              <div className=" w-[38%] sm:w-[20%] flex flex-row justify-around gap-[3px] self-end text-[3.5em]">
                                          
                                              <div className="flex flex-row items-center font-bold  gap-[2px] sm:gap-[5px]">
                                              <ThumbsUp size={'1.5em'}></ThumbsUp>
                                               {props.likes.length}
                                                  </div>
                                                  <div className="flex flex-row items-center font-bold   gap-[2px] sm:gap-[5px]">
                                                        <MessageCircle size={'1.5em'}></MessageCircle>
                                                          {props.comments}
                                                  </div>
                                  <p > {props.date.toLocaleDateString('eng-us')}</p>
                              </div>
                              <h1 className="w-full  text-center text-[9.5em] font-extrabold underline">  {props.title}  </h1>
                              <div className="w-[85%] h-[300px] relative self-center mt-[10px]">                                     
                                       <Image fill alt={props.title} src={props.image} className="absolute top-0 "></Image>
                              </div>
                              <p className="text-[5em] leading-normal break-words w-[85%] self-center mt-[20px]">
                                  {props.content}
                              </p>

                               <div className="flex flex-col w-full items-center justify-center p-2 bg-main mt-[20px] gap-[7px] text-white rounded-2xl">
                                    <h1 className=" w-full text-center text-[6em] underline  font-bold">Summary</h1>
                                    <p className="  text-[4em] w-[75%] break-words text-center"> {props.summary}</p>
                                    <button className="  w-[70px] h-[70px]  sm:h-[55px] sm:w-[55px]  xl:h-[90px] xl:w-[90px] rounded-[180%] 
                                       border-2 border-[#cb1b16] text-[9em] 
                                           font-bold bg-white text-main">
                                     {props.score}
                                     </button>                                    
                               </div>
                               <div className=" w-full flex flex-col items-center mt-[20px] gap-[20px] ">
                                       <h2 className="text-[5em] underline font-bold"> User Review</h2>
                                       <div className="flex flex-row items-center gap-[15px] ">
                                             <button className="  w-[50px] h-[50px]  sm:h-[55px] sm:w-[55px]  xl:h-[70px] xl:w-[70px] rounded-[180%] 
                                              border-4  text-[7em] 
                                           font-bold bg-white text-main border-[#cb1b16] ">
                                              {props.userscore}
                                           </button>
                                           <p className="text-[4em] font-semibold">Based ON  <span className="font-extrabold text-main text-[1.2em] underline" >{props.userscore}</span>  Reviews</p>    
                                       </div>
                                       
                                       <div className="flex flex-col items-center gap-[15px] mt-[10px] ">
                                        <h2 className="text-[4em] text-main font-bold"> choose Your Score </h2>
                                            <div className=" grid grid-cols-4 grid-rows-3   sm:grid-cols-10 sm:grid-rows-1 gap-[8px] sm:gap-[7px] lg:gap-[15px]">
                                         
                                  
                                            {arr.map(elm=>{
                                                   return <button className="w-[50px] h-[50px] rounded-[180%]  text-[5em] border-3 text-main hover:cursor-pointer
                                                     hover:border-gray-700 hover:text-gray-700 border-[#cb1b16] font-bold ">
                                                        {elm}
                                                        </button>} )}                                                                                                   
                                            </div>
                                             
                                       </div>
                                
                               </div>

                              <div className="w-[25%] items-center justify-center flex flex-row text-center text-[5em] mt-[30px] gap-[8px] ">
                                 <Like type='review' id={props.id} likes={props.likes}></Like>
                              </div>
                                                                                                                      
                                                      
           </div>
    )


    
}