
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
import { Like } from "../global/like";
import { Save } from "../global/save";
export const Post:React.FC<{title:string,description:string,image:string,date:Date,content:string,likes:string[],comments:number,views:number,id:string}>=(props)=>{
    

   

return(
           <div className=" h-[23%] w-full sm:w-[90%] xl:w-[60%]    bg-white relative flex flex-col items-start justify-start rounded-[5px] text-black p-4 ">
                            <div className="   flex flex-row justify-around items-center   text-[3.5em] text-gray-600">
                                 <Link className="flex flex-row items-center justify-center gap-[5px] hover:underline" href={'/'}> 
                                       <House size={'1.5em'} ></House>  Home
                                  </Link>
                                   <ChevronRight size={'1.5em'}></ChevronRight>
                                   <Link className="flex flex-row items-center justify-center gap-[5px] hover:underline" href={'/blog'}> 
                                       <Newspaper size={'1.5em'}></Newspaper>  blog
                                  </Link>
                                  <ChevronRight size={'1.5em'}></ChevronRight>
                                  <p className="hover:underline hover:cursor-pointer  "> {props.title}</p>
                            </div>
                              <Save id={props.id}  type='post'></Save>
                              <div className="  flex flex-row justify-around gap-[12px] self-end text-[3.5em]">
                                          
                                              <div className="flex flex-row items-center font-bold  gap-[4px] sm:gap-[5px]">
                                              <ThumbsUp size={'1.5em'}></ThumbsUp>
                                                 <span>{props.likes.length}</span>
                                                  </div>
                                                  <div className="flex flex-row items-center font-bold justify-center  gap-[4px] sm:gap-[5px]">
                                                        <MessageCircle size={'1.5em'}></MessageCircle>
                                                        <span className="text-center">{props.comments}</span>
                                                          
                                                  </div>
                                  <p > {props.date.toLocaleDateString('eng-us')}</p>
                              </div>
                              <h1 className="w-full  text-center text-[8em] font-extrabold underline ">  {props.title}  </h1>
                              <div className="w-[85%] h-[300px] relative self-center mt-[10px]">                                     
                                       <Image fill alt={props.title} src={props.image} className="absolute top-0 "></Image>
                              </div>
                              <p className="text-[5em] leading-normal break-words w-[85%] self-center mt-[20px] whitespace-pre-line">
                                  {props.content}
                              </p>
                              <div className="w-[25%] items-center justify-center flex flex-row text-[5em] mt-[30px] gap-[8px] ">
                                   <Like type='post' likes={props.likes} id={props.id} ></Like>
                            </div>                      
                                   
           </div>
    )


    
}