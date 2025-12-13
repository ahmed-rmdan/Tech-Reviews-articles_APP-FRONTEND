
import React from "react";
import Image from "next/image";
import { Eye } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

export const ItemPost:React.FC<{title:string,description:string,image:string,date:Date,watches:number,likes:number,comments:number,id:string}>=(props)=>{
    

return(
           <div className=" h-[170px] sm:h-[200px] w-[99%] sm:w-[90%] xl:w-[60%]  bg-white relative flex flex-row items-center justify-between rounded-[5px] text-[#cb1b16] ">


                <div className="w-[30%] h-[95%]  relative rounded-[5px]  ">
                          <Image alt={props.title} fill src={props.image} className=" absolute top-0 min-w-full min-h-full rounded-[5px] ">
                               
                          </Image>                   
              </div>
                        
                     <div className="w-[68%] h-[97%]   flex flex-col item-center justify-center ">
                           <div className="w-full h-[70%] flex flex-col">
                                <a  href={`/post/${props.id}`} className=" w-full z-20 text-[9em] items-center underline font-bold hover:cursor-pointer" >

                                    {props.title}
                                </a>
                                  <p className="w-[95%] z-20 text-[6em] wrap-break-word overflow-auto mb-[5%] sm:mb-[2%] lg:mb-[5%] ">
                                  {props.description}
                                 </p>
                           </div>
                           <p className="w-[95%] h-[10px]  flex  justify-end text-[4em]  ">{!props.date?'': props.date.toLocaleDateString('en-US')}</p>
                          <div className="h-[30%] flex flex-row justify-start text-[5em] gap-[5%] items-center">
                                 <div className="flex flex-row items-center font-bold  gap-[8px]">
                                        <Eye size={'1.5em'}></Eye>
                                        {props.watches}
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