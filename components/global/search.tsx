'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation" 
export  function Searchinput({type}:{type:string}){
    const router=useRouter()

function handlesubmit(data:FormData){
const search=data.get('search')
if(type==='searchpostsadmin'){
router.push(`/dashboard/posts/search?search=${search}&activepage=1&sort=all`)
}
if(type==='searchposts'){
location.href=`/blog/search?search=${search}&sort=Newest`
}


}
return(
    <form className="flex flex-row w-[65%] sm:w-[50%] gap-[10px] sm:gap-[20px] items-center text-white h-[90%]   " action={handlesubmit}>
      
     <Input name="search" type="text" className=" border-[#cb1b16] text-[5em] border-2  !h-[30px] sm:!h-[40px] text-[#cb1b16] bg-white "  />
      <Button type="submit" variant="outline" className=" bg-[#cb1b16] hover:bg-[#cb1b16] text-[4.5em] !h-[30px]
       sm:!h-[40px] gont-bold w-[28%] sm:w-[22%] hover:cursor-pointer hover:text-white " >
          Search
      </Button>
    </form>
   

)

}