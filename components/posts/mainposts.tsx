



import React from "react";
import { ItemPost } from "./itempost";
import Link from "next/link";
import type { post } from "@/types/types";

export async function MainPosts(){
    
            const res=await fetch(`http://localhost:5000/posts/getposts?page=1&sort=Newest`,{      
                    cache:'no-store',
                    headers:{'Content-Type': 'application/json'}        
                           })
                             if(!res.ok){
                              throw new Error('somthing went wrong')
                             }
                           const data:{posts:post[]}=await res.json()


return(
           <section className="flex flex-col  w-full justify-around p-4
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px]  gap-[20px]  lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                      <div className="flex flex-col justify-between w-full h-[90%] gap-[20px] items-center ">
                        {  data.posts.map(elm=>{
                                      return<ItemPost title={elm.title} description={elm.description}
                                                id={elm._id} image={elm.mainimage} date={new Date(elm.createdAt)} watches={elm.views} likes={elm.likes.length} comments={elm.comments.length}></ItemPost>
                                            })
                                    }            

                      </div>
                      <Link href={`/blog?sort=${'Newest'}`} className=" h-[45px] sm:h-[55px] w-[30%] sm:w-[15%] xl:w-[10%] flex items-center 
                       justify-center text-[5.5em] rounded-2xl font-extrabold bg-[#cb1b16] hover:bg-gray-600 ">
                                 ALL POSTS
                      </Link>
                                   
           </section>
    )


    
}