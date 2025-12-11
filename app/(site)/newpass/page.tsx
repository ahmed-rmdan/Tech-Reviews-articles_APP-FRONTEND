'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
export default function Newpass(){
const searchparms=useSearchParams()
const router=useRouter()
const [loading,setloading]=useState<boolean>(false)
const [error,seterror]=useState<string>('')
const [iserror,setiserror]=useState<boolean>(false)

async function onsubmit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault()
  const formdata=new FormData(e.currentTarget)
   const password=formdata.get('password')
     const repassword=formdata.get('repassword')
    
  if(password!==repassword){
              setiserror(true)
              seterror('password is not matched')
              return
  }

  const email= searchparms.get('email')
   const token =searchparms.get('token')
   if(!email||!token){
         router.push('/')
         toast.error('token is not valid')
           return
   }
 setloading(true)
  try{
  
      const res= await fetch(`http://localhost:5000/users/newpass`,{
         method:'PUT',
                    body:JSON.stringify({email,token,newpass:password})
                    ,
                      headers:{'Content-Type': 'application/json'}
                 })
      
          const data= await res.json()
     if(!res?.ok){
        throw new Error(data?.message as string)
 
    
            }

setloading(false)
setiserror(false)
seterror('')
toast.success('password has been updated')

  }catch(err) {
   const errmes= err instanceof Error? err.message:'somthing went wrong'
   setiserror(true)
    seterror(errmes)
    setloading(false)
  }

}

  return(
    <div className=" flex items-center justify-center h-[650px]  w-full bg-sec text-[3px] sm:text-[4px]   lg:text-[4px]  xl:text-[4px] 2xl:text-[4.5px] " >
         
         <div className="flex flex-col items-center justify-start bg-white p-6 w-[97%] sm:w-[85%] xl:w-[55%] 2xl:w-[50%] rounded-2xl gap-[25px] ">
            <h1 className="w-full underline font-extrabold text-main text-[8em] text-center"> New Password</h1>
             <form className="flex flex-col items-center w-[95%] sm:w-[70%] lg:w-[60%] gap-[15px] text-[3em]" onSubmit={onsubmit}>
                   <Label className="self-start">New Password</Label>
                   <Input type="password" name="password" placeholder="new password" minLength={6} maxLength={20} required />
                    {/* <p className="text-main font-semibold ">dsadsadsa</p> */}
                    <Label className="self-start">Rewrite Password</Label>
                    <Input type="password" name="repassword" placeholder=" rewrite password" minLength={6} maxLength={20} required />

                      {iserror&&<p className="text-main self-center text-center w-full flex justify-center text-[1.35em] font-bold">* {error}</p>}
                   
                    <Button type="submit" className="bg-main text-sec font-bold sm:text-[1.4em] w-[35%] sm:w-[25%] hover:bg-gray-500 hover:cursor-pointer"
                    > {loading?'..Submitting':'Confirm'}</Button>
                  
             </form>

         </div>
         
        
    </div>
  )

}