'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import { SquarePen } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useRef } from "react"

export function Profile() {
  const router=useRouter()
  const {data,status,update}=useSession()
  const file=useRef<null|HTMLInputElement>(null)


 async function  onclick(){
 await signOut({redirect:false})
  const confirm=window.confirm('you are logging out are you sure ?')
 router.push('/')
 toast.success('you have been logged out')
 }




 async function putimage(){
    file.current?.click()
 }



async function handlechange(ev:React.ChangeEvent<HTMLInputElement>){
  if(!ev.target.files){
    return
  }
const selectedfile=ev.target.files[0]
 const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
 if(!allowedTypes.includes(selectedfile.type)){
 toast.error('file type is not allowed')
  return
   }
  const userid= data?.user.id as string
  const formdata= new FormData()
  formdata.set('file',selectedfile)
    console.log(formdata.get('file'))

     try{
    const res= await fetch(`http://localhost:5000/users/putuserimage?id=${userid}`,{
         method:'PUT',
                    body:formdata
                })
                const DATA=await res.json()
                console.log(DATA)
                if(!res.ok){
                  throw new Error(DATA.message)
                }
              await update({image:DATA.image as string})
              toast.success('profile mage has benn updated')
     }catch(err){
       const errmessg= err instanceof Error ?err.message:'somthing went wrong'
        console.log(errmessg)
     }

}


  return (
    <Card className="w-full relative max-w-sm rounded-2xl">

      <CardContent className="flex flex-col items-center gap-3">
        <div className=" flex items-center justify-center relative w-[160px] h-[160px] rounded-[180%] ">
            <Image src={ !data?.user.image?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png':data.user.image as string} 
           fill alt="profilepic" className="rounded-[180%]" ></Image>
        
 
                <input hidden ref={file}  onChange={handlechange} type="file"></input>
  
   
        </div>
          <SquarePen onClick={putimage}   size={'6.5em'} className="absolute top-[20px] right-[65px] cursor-pointer " color="#cb1b16">
        
           </SquarePen>
        <h2 className="text-main font-bold text-[5em]">{data?.user.name}</h2>
           
      </CardContent>
      <CardFooter className="flex-col gap-3.5 border-t-2  p-4 ">
       
       <div className="flex flex-row gap-[7px]">
        <UserRoundPen color="#cb1b16"></UserRoundPen>
           <Link href={'/user/edit'} className="text-main text-[4.5em] font-bold hover:underline"> Edit</Link>
           
       </div>
         <div className="flex flex-row gap-[7px] items-center">
        <Bookmark color="#cb1b16"></Bookmark>
           <Link href={`/user/saved?id=${data?.user.id}`} className="text-main text-[4.5em] font-bold hover:underline"> Saved</Link>
            
       </div>
         <div className="flex flex-row gap-[7px]">
        <ThumbsUp color="#cb1b16"></ThumbsUp>
           <Link href={`/user/liked?id=${data?.user.id}`} className="text-main text-[4.5em] font-bold hover:underline"> Liked</Link>
            
       </div>       
         <div className="flex flex-row items-center gap-[7px]">
        <LogOut color="#cb1b16"></LogOut>
           <button  onClick={onclick}   className="text-main text-[4.5em] font-bold hover:underline hover:cursor-pointer "> LogOut</button>
            
       </div>            
                
      </CardFooter>
    </Card>
  )
}