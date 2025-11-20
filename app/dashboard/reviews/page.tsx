


import { Searchinput } from "@/components/global/search"
import { Filter } from "@/components/global/filter"
import { PostItemAdmin } from "@/components/admin/posts/postitem"
import { Pages } from "@/components/global/pages"
import { Categories } from "@/components/global/categories"
import { ReviewItemAdmin } from "@/components/admin/reviews/reviewitem"

export default function ReviewsControl(){
  return(
    <div className=" min-w-full sm:min-w-[75%]  flex-col   flex items-center justify-center p-4 gap-[10px] sm:gap-[15px] " >
         <div className="w-full text-[0.9em] xl:tex-[1em] flex items-center justify-center">
            <Categories></Categories>
         </div>
          
       <div className="flex flex-row w-full sm:w-full lg:w-[90%] xl:w-[70%] justify-center items-center h-[55px] sm:h-[80px] gap-[11px] sm:gap-[20px]">
             
             <Searchinput type="reviewsadmin"></Searchinput>
            <Filter type="reviews" filter="reviewsadmin"></Filter>
       </div>         
        <div className="flex flex-col w-[99%] sm:w-[90%] xl:w-[75%] gap-[20px] items-center justify-around   ">
           <ReviewItemAdmin title="sdadsad" score={5} date={new Date()} mainimage=""  id="sdasd"></ReviewItemAdmin>
            <ReviewItemAdmin title="sdadsad" score={5} date={new Date()} mainimage=""  id="sdasd"></ReviewItemAdmin>
             <ReviewItemAdmin title="sdadsad" score={5} date={new Date()} mainimage=""  id="sdasd"></ReviewItemAdmin>
       </div>         
             
        
    </div>
  )

}