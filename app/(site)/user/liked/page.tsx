import { Metadata } from "next";
import { Searchinput } from "@/components/global/search";
import { Filter } from "@/components/global/filter";
import { ItemPost } from "@/components/posts/itempost";
import type { post,review } from "@/types/types";
import { ReviewItem } from "@/components/reviews/itemreview";




export const metadata: Metadata = {
  title: "FineTech-Liked",
  description: "Recent NEWS and Articles about the technologies ",
};






export default async function Liked({searchParams}:{searchParams:{id:string}}) {

 const params=await searchParams

 

        const res=await fetch(`http://localhost:5000/users/getlikes?id=${params.id}`,{
              headers:{'Content-Type': 'application/json'},
              next:{tags:['liked']}
        })
 
     
      const data:{likes:{kind:'post'|'review',item:any}[]}= await res.json()
      
    

const empty=<div className="flex flex-col items-center py-20 text-center text-gray-500">
  <span className="text-5xl mb-4">❤️</span>
  <h2 className="text-xl font-semibold mb-2 text-main">
    No Likes Yet
  </h2>
  <p className="text-sm text-main">
    You haven’t liked any posts or reviews yet. Start exploring and tap ❤️ on posts or review you enjoy.
  </p>
</div>


  return (
    <section>

               <div className="flex flex-col   w-full 
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px] p-10  lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                      <div className="flex flex-col justify-between gap-[20px]  w-full  items-center ">
                  {  data.likes.length===0? empty :  data.likes.map(elm=>{
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