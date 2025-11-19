
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ItemSlider:React.FC<{title:string,description:string,image:string,id:string}>=(props)=>{
    

console.log(props.title)
console.log(props.image)
return(
           <li  key={props.id}  className="min-h-full min-w-full relative flex flex-col-reverse items-center text-[#cb1b16] rounded-2xl">
                    <Image alt={props.title} fill src={props.image} className=" absolute top-0 min-w-full min-h-full rounded-2xl ">
                               
                    </Image>
                        <div className="bg-gray-700 absolute top-0 min-w-full min-h-full z-10 opacity-30 rounded-2xl ">

                        </div>
                         <p className="w-[95%] z-20 text-[7em] wrap-break-word mb-[7%] lg:mb-[5%] text-white font-semibold ">
                          {props.description}
                        </p>
                     
                     <Link href={`/post/${props.id}`} className=" w-[97%] z-20 text-[10em] items-center underline font-bold hover:cursor-pointer" >

                         {props.title}
                     </Link>
                    
                                   
           </li>
    )


    
}