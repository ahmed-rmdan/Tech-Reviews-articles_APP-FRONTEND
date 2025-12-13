import { Metadata } from "next";
import { ItemPost } from "@/components/posts/itempost";

import type { post,review } from "@/types/types";
import { ReviewItem } from "@/components/reviews/itemreview";

export const metadata: Metadata = {
  title: "FineTech-Saved",
  description: "Recent Reviews and Articles about the technologies ",
};

export default async function Saved({searchParams}:{searchParams:{id:string}}) {
 const params=await searchParams

 

        const res=await fetch(`http://localhost:5000/users/getsaves?id=${params.id}`,{
              headers:{'Content-Type': 'application/json'},
              next:{tags:['saved']},
              cache:'no-store'
              
        })
 
     
      const data:{saves:{kind:'post'|'review',item:any}[]}= await res.json()
      
    

const empty=<div className="flex flex-col items-center py-20 text-center text-gray-500">
  <span className="text-5xl mb-4">🔖</span>
  <h2 className="text-xl font-semibold mb-2 text-main">
    No Saved Items Yet
  </h2>
  <p className="text-sm text-main">
    You haven’t saved any posts or reviews yet. Start exploring and tap 🔖 to save posts or reviews you like.
  </p>
</div>


  return (
    <section>

               <div className="flex flex-col   w-full 
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px] p-10  lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                      <div className="flex flex-col justify-between gap-[20px]  w-full  items-center ">
                  {  data.saves.length===0?empty:  data.saves.map(elm=>{
                               if(elm.kind==='post'){
                                 const post= elm.item as post
                          return  <ItemPost watches={post.views} date={new Date(post.createdAt)} likes={post.likes.length} comments={post.comments.length}
                           id={post._id} title={post.title} description={post.description}
                                image={post.mainimage}></ItemPost>
                               }
                               if(elm.kind==='review'){
                                    const review=elm.item as review
                                      return   <ReviewItem  key={review._id} title={review.title} description={review.description}
                                            image={review.mainimage} likes={review.likes.length}
                                             comments={review.comments.length} views={review.views} date={new Date(review.createdAt)} score={review.score} id={review._id}></ReviewItem> 
                               }

                         })}
                     
                      </div>

                  
                                   
           </div>
           
 
    </section>
  );
}