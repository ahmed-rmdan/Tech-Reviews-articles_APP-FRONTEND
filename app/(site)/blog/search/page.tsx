'use client'


import { Searchinput } from "@/components/global/search";
import { Filter } from "@/components/global/filter";
import { ItemPost } from "@/components/posts/itempost";
import { useEffect } from "react";

import { useState } from "react";
import { Spinner } from "@/components/ui/spinner"
import type { post } from "@/types/types";

export default function Blog({searchParams }:{searchParams:{sort:string,search:string}}) {

  const params=searchParams

const[loading,setloading]=useState<boolean>(false)  
const [page,setpage]=useState<number>(1)
const [scroll,setscroll]=useState(0)
const [posts,setposts]=useState<post[]>([])
 const[empty,setempty]=useState<boolean>(false)  
useEffect(()=>{

  async function getscrollpages(){
       setloading(true)
      const res=await fetch(`http://localhost:5000/posts/searchadminposts?search=${searchParams.search}&page=${page}&sort=${searchParams.sort}`,{
        cache:'no-store'
      })
      if(!res.ok){
        throw new Error('somthing is wrong')
      }
      const newposts=posts
       const data:{posts:post[],noposts:number}=await res.json()
         if(data.noposts===0){
          setempty(true)
          setloading(false)
         }else{
          data.posts.map(elm=>{
            newposts.push(elm)
          })
            console.log(newposts)
          setposts(newposts)
            setloading(false)   
         }         
  }

getscrollpages()


},[page])


useEffect(()=>{

 window.addEventListener('scroll',()=>{
           const scrolly=window.scrollY
           setscroll(scrolly)
          
    }  
 )
 let scrollpage

 if(window.innerWidth>425){
  scrollpage=Math.ceil(scroll/750)
 }else{
 scrollpage=Math.ceil(scroll/600)
 }

setpage(prev=>prev<scrollpage?prev+1:prev)
 return ()=>{}

},[scroll])



const result=(!empty)?posts.map(elm=>{
                          return       <ItemPost watches={elm.views} date={new Date(elm.createdAt)} likes={elm.likes.length} comments={elm.comments.length}
                           id={elm._id} title={elm.title} description={elm.description}
                                image={elm.mainimage}></ItemPost>
                         }):<div className="flex flex-col items-center py-20 text-center text-gray-500">
  <span className="text-5xl mb-4">🔍</span>
  <h2 className="text-xl font-semibold mb-2 text-main ">No Search Result Found </h2>
  <p className="text-sm text-main"> Change your search terms or use more distinctive keywords</p>
</div>

  return (
    <section className=" w-full  flex flex-col items-center bg-[#e5e7eb] text-[2.5px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]   " >
{           loading&&  <div className=" sticky  top-[45%] flex justify-center items-center w-[100px] h-[90px] sm:w-[150px] rounded-2xl sm:h-[120px] bg-white z-[20000]">
                    <Spinner className="size-18 sticky " color={'red'} />
                  
                    </div>   }
                     <div className=" h-[15px]  md:h-[35px] xl:h-[55px] p-4 sm:p-6  lg:p-7 self-end mt-[20px] mr-[12%]  flex items-center justify-center text-[4.5em] font-bold rounded-[5px] text-white bg-main">
                                Search : {params.search}
                    </div>
      <div className="flex flex-row w-full sm:w-[85%] lg:w-[70%] 2xl:w-[55%] justify-center items-center h-[55px] sm:h-[80px] gap-[11px] sm:gap-[20px]">

            <Searchinput type="searchposts"></Searchinput>
           <Filter filter="searchposts" type="blog" search={params.search}></Filter>
      </div>
               <div className="flex flex-col   w-full 
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px] p-4  lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                      <div className="flex flex-col justify-between gap-[20px]  w-full  items-center ">
                         {result}
                     
                      </div>

                  
                                   
           </div>
           
 
    </section>
  );
}
