
import React from "react";
import Image from "next/image";
import { Eye } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import Link from "next/link";


export const ReviewItem:React.FC<{title:string,description:string,image:string,score:number,views:number,comments:number,likes:number,date:Date,id:string}>=(props)=>{
    



return(
        <div className="  w-[98%] sm:w-[90%] xl:w-[60%]  h-[180px] sm:h-[220px]  bg-white relative flex flex-row items-center justify-between rounded-[5px] text-[#cb1b16] ">


                      <div className=" w-[40%] sm:w-[30%] h-full  relative rounded-[5px]  ">
                          <Image alt={props.title} fill src={props.image} className=" absolute top-0 min-w-full min-h-full rounded-[5px] ">
                               
                          </Image>
                            <button className="  w-[40px] h-[40px]  sm:h-[55px] sm:w-[55px]  xl:h-[60px] xl:w-[60px] rounded-[180%] absolute bottom-[5%] xl:bottom-[10%] 
                      right-[6%] z-20 border-2 border-[#cb1b16] text-[7em] 
                      font-bold bg-white">
                                    {props.score.toString()}
                      </button>
                              <div className="bg-gray-700 absolute top-0 min-w-full min-h-full z-10 opacity-50  rounded-[10px]">

                        </div>
                      
                    </div>
                        
                     <div className=" w-[55%] sm:w-[68%] h-[97%]   flex flex-col item-center justify-center ">
                           <div className="w-full h-[70%] flex flex-col">
                                <Link href={`/reviews/${props.id}`} className=" w-full z-20 text-[8em] items-center underline font-bold hover:cursor-pointer" >

                                    {props.title}
                                </Link>
                                  <p className="w-[95%] z-20 text-[6em] wrap-break-word overflow-auto mb-[5%] sm:mb-[2%] lg:mb-[5%] ">
                                  {props.description}
                                 </p>
                           </div>
                            <p className="w-[95%] h-[10px]  flex  justify-end text-[4em]  "> {!props.date?'':props.date.toLocaleDateString('en-US')}</p>
                          <div className="h-[30%] flex flex-row justify-start text-[5em] gap-[5%] items-center">
                                 <div className="flex flex-row items-center font-bold  gap-[8px]">
                                        <Eye size={'1.5em'}></Eye>
                                        {props.views}
                                 </div>
                                   <div className="flex flex-row items-center font-bold  gap-[8px]">
                                        <ThumbsUp size={'1.5em'}></ThumbsUp>
                                      {props.likes}
                                 </div>
                                   <div className="flex flex-row items-center font-bold  gap-[8px]">
                                        <MessageCircle size={'1.5em'}></MessageCircle>
                                        {props.comments}
                                 </div>
                          </div>
                           
                          
                    
                     </div>
                    
           
      
                   
                                   
           </div>
    )


    
}