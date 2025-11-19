

'use server'

import { Searchinput } from "@/components/global/search"
import { Filter } from "@/components/global/filter"
import { PostItemAdmin } from "@/components/admin/posts/postitem"
import { Pages } from "@/components/global/pages"
import type { post } from "@/types/types"
import { useAppDispatch,useAppSelector } from "@/state/hook"


export default  async function  PostControl({searchParams }:{searchParams:{activepage:string,sort:string,search:string}}){

    
  const res=await fetch(`http://localhost:5000/posts/searchadminposts?search=${searchParams.search}&page=${ searchParams.activepage}&sort=${searchParams.sort}`,{      
      cache:'no-store'        
                     })
                     if(!res.ok){
                        throw new Error('somthing is wrong')
                     }
                     const data:{posts:post[],noposts:number}=await res.json()
   console.log(data.noposts)

  return(
    <div className=" min-w-full sm:min-w-[75%]  flex-col   flex items-center justify-center p-4 gap-[15px] sm:gap-[25px] " >

       <div className="flex flex-row w-full sm:w-full lg:w-[90%] xl:w-[70%] justify-center items-center h-[55px] sm:h-[80px] gap-[11px] sm:gap-[20px]">
             <Searchinput type="searchpostsadmin" ></Searchinput>
            <Filter type="blog" filter="searchpostsadmin" search={searchParams.search}></Filter>
                   </div>         
                      <div className="flex flex-col w-[99%] sm:w-[90%] xl:w-[75%] gap-[20px] items-center justify-around   ">
                         { data.posts.map((elm,i)=>{
                           return  <PostItemAdmin id={elm._id} key={i} title={elm.title} mainimage={elm.mainimage} date={new Date(elm.createdAt) } views={elm.views}></PostItemAdmin>
                         }) }
                        </div>         
              <Pages activepage={Number(searchParams.activepage)} noposts={data.noposts} types="searchpostsadmin" search={searchParams.search}  sort={searchParams.sort}></Pages>
        
    </div>
  )

}