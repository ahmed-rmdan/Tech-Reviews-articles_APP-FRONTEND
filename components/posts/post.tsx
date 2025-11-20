
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

export const Post:React.FC<{title:string,description:string,image:string,date:Date,content:string,likes:number,comments:number,views:number}>=(props)=>{
    



return(
           <div className=" h-[23%] w-full sm:w-[90%] xl:w-[60%]    bg-white relative flex flex-col items-start justify-start rounded-[5px] text-black p-4 ">
                            <div className="   flex flex-row justify-around items-center   text-[3em] text-gray-600">
                                 <Link className="flex flex-row items-center justify-center gap-[5px] hover:underline" href={'/'}> 
                                       <House size={'1.5em'} ></House>  Home
                                  </Link>
                                   <ChevronRight size={'1.5em'}></ChevronRight>
                                   <Link className="flex flex-row items-center justify-center gap-[5px] hover:underline" href={'/blog'}> 
                                       <Newspaper size={'1.5em'}></Newspaper>  blog
                                  </Link>
                                  <ChevronRight size={'1.5em'}></ChevronRight>
                                  <p className="hover:underline hover:cursor-pointer font-bold "> {props.title}</p>
                            </div>
                            <Bookmark size={'8.5em'} className="self-end mr-[30px] mb-[15px] hover:cursor-pointer"></Bookmark>
                              <div className=" w-[38%] sm:w-[20%] flex flex-row justify-around gap-[3px] self-end text-[3.5em]">
                                          
                                              <div className="flex flex-row items-center font-bold  gap-[2px] sm:gap-[5px]">
                                              <ThumbsUp size={'1.5em'}></ThumbsUp>
                                                {props.likes}
                                                  </div>
                                                  <div className="flex flex-row items-center font-bold   gap-[2px] sm:gap-[5px]">
                                                        <MessageCircle size={'1.5em'}></MessageCircle>
                                                          {props.comments}
                                                  </div>
                                  <p > {props.date.toLocaleDateString('eng-us')}</p>
                              </div>
                              <h1 className="w-full  text-center text-[9.5em] font-extrabold underline text-main">  {props.title}  </h1>
                              <div className="w-[85%] h-[300px] relative self-center mt-[10px]">                                     
                                       <Image fill alt={props.title} src={props.image} className="absolute top-0 "></Image>
                              </div>
                              <p className="text-[5em] leading-normal break-words w-[85%] self-center mt-[20px] whitespace-pre-line">
                                  {props.content}
                              </p>
                              <div className="w-[25%] items-center justify-center flex flex-row text-[5em] mt-[30px] gap-[8px] ">
                                <ThumbsUp size={'1.5em'} fill="black" className="hover:cursor-pointer"></ThumbsUp>
                                                <span className="text-center font-bold">{props.likes}</span>
                            </div>                      
                                   
           </div>
    )


    
}