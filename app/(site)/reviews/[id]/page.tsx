import { Post } from "@/components/posts/post";
import { Maincomment } from "@/components/comments/main";
import { Review } from "@/components/reviews/review";
import type { review } from "@/types/types";
export default  async function Postpg({params}:{params:{id:string}}) {
     const id=await params.id
      const res=await fetch(`http://localhost:5000/reviews/viewreview?id=${id}`,{
        cache:'no-store'
      }) 
      if(!res.ok){
        throw new Error('somthing went wrong')
      }

      const data:{review:review}=await res.json()

  return (
    <section className=" w-full flex flex-col items-center bg-[#e5e7eb] text-[3px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px] p-3  " >
              
                 <Review content={data.review.content} date={new Date(data.review.createdAt)}
                  title={data.review.title} 
                                image={data.review.mainimage}  score={data.review.score}
                                 summary={data.review.summary} likes={data.review.likes}  comments={data.review.comments.length} id={data.review._id} ></Review>      
                <Maincomment></Maincomment>
    </section>
  );
}
