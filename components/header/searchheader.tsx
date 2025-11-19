'use client'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Search } from "lucide-react"
import { useRef } from "react"

export  function SearchHeader(){
const input=useRef<HTMLInputElement>(null)

function handleclick(){
const search=input.current?.value as string
if(search===''||null||undefined){
    return
}
location.href=`/blog/search?search=${search}&sort=Newest`

}
return(
    <div className=" absolute flex flex-row top-[80px] lg:top-[100px] items-center justify-center sm:right-[70px] right-[150px] 2xl:right-[250px]
       gap-[10px] bg-[#e5e7eb]  w-[350px] h-[50px]">
                         <Input  ref={input} type="text" className=" border-[#cb1b16] text-[4em] w-[67%] border-2 text-[#cb1b16] bg-white "  />
                          <Button onClick={handleclick}  type="submit" variant="outline" className=" bg-[#cb1b16] hover:bg-[#cb1b16] text-[3em]  w-[25%]
                           hover:cursor-pointer hover:text-white " >
                                 <Search className="w-[25%] " ></Search> Search
                            </Button >
                </div>
)

}