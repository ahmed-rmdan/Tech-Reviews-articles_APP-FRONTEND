import { Post } from "@/components/posts/post";
import { Maincomment } from "@/components/comments/main";
import type { post } from "@/types/types";



export default async function Postpg({params}:{params:{id:string}}) {
    const id=await params.id
            const res=await fetch(`http://localhost:5000/posts/viewpost?id=${id}`,{      
                    cache:'no-store',
                    headers:{'Content-Type': 'application/json'}        
                           })
                             if(!res.ok){
                              throw new Error('somthing went wrong')
                             }
                           const data:{post:post}=await res.json()
     console.log(data.post)
  return (
    <section className=" w-full flex flex-col items-center bg-[#e5e7eb] text-[3px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px] p-3  " >
                 <Post  id={data.post._id} content={data.post.content} date={ new Date(data.post.createdAt)}
                  title={data.post.title} description={data.post.description}
                                image={data.post.mainimage} views={data.post.views} likes={data.post.likes} comments={data.post.comments.length}></Post>      
                <Maincomment></Maincomment>
    </section>
  );
}
