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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {signIn} from 'next-auth/react'

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import googlelogo from '@/public/Google Logo Icon Gsuite HD.jpeg'
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useAppDispatch } from "@/state/hook"
import { useractions } from "@/state/state"
import { toast } from "sonner"
export function CardLogin() {
const router=useRouter()
const dispatch=useAppDispatch()
const [loading,setloading]=useState<boolean>(false)
const [error,seterror]=useState<string>('')
const [iserror,setiserror]=useState<boolean>(false)
const {data:session}=useSession()

async function onsubmit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault()
  const data=new FormData(e.currentTarget)
  console.log(data.get('username'))

  if(data.get('username')===''||data.get('password')===''){
              return
  }

 setloading(true)
  try{
    const res= await  signIn('credentials',{
    redirect:false,
        username:data.get('username') as string,
    password:data.get('password') as string,
  }

)
     if(!res?.ok){
        throw new Error(res?.error as string)    
            }

            
setloading(false)
setiserror(false)
seterror('')
 router.push('/')
  }catch(err) {
   const errmes= err instanceof Error? err.message:'somthing went wrong'
   setiserror(true)
    seterror(errmes)
    setloading(false)
  }


}

  return (
    <Card className="w-full max-w-sm rounded-2xl">
      <CardHeader>
        <CardTitle className=" text-[5.5em]  sm:text-[4em] ">Login to your account</CardTitle>
        <CardDescription >
          Enter your UserName and password below to login to your account
        </CardDescription>
        <CardAction>
          <Link  href={'/signup'} className=" text-main text-[6em]  sm:text-[4em] font-semibold hover:underline ">SignUp</Link>
        </CardAction>
      </CardHeader>
      <CardContent>

        <form onSubmit={onsubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="user">UserName</Label>
              <Input
                id="user"
                type="text"
                name="username"
                placeholder=""
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="/repass"
                  className="ml-auto text-main inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
                 {iserror&&<p className="text-main self-center text-center w-full flex justify-center text-[3em] ">{error}</p>}
          </div>
     
          <div className="w-full mt-6">
       {    loading ?       
                 <Button type="submit"  className="w-full bg-main text-white hover:bg-gray-500 ">
                         ..logging
                  </Button>:
                 <Button type="submit"  className="w-full bg-main text-white hover:bg-gray-500 ">
                         login
                  </Button>                  
                  }
          </div>

        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">

        <Button variant="outline" className="w-full">
               <div className="w-[20px] h-[20px] relative">
                  <Image src={googlelogo} fill alt="google logo" className="w-full h-full absolute"></Image>
                </div>  
                Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}