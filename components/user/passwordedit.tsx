'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
 
  TabsContent,

} from "@/components/ui/tabs"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { toast } from "sonner"



export function PassEdit(){
const {data,update}=useSession()
   
const [loading,setloading]=useState<boolean>(false)
const [error,seterror]=useState<string>('')
const [iserror,setiserror]=useState<boolean>(false)

async function onsubmit(e:React.FormEvent<HTMLFormElement>){

  e.preventDefault()
  const formdata=new FormData(e.currentTarget)

 const newpass=formdata.get('newpassword')
 const repass=formdata.get('repassword')
 if(newpass!==repass){
    seterror('passwords are not matched')
    return
 }
console.log(data?.user.id)
 setloading(true)
  try{
     
const res= await fetch(`http://localhost:5000/users/updatepass`,{
                     method:'PUT',
                    body:JSON.stringify({newpass,pass:formdata.get('password'),id:data?.user.id})
                    ,
                      headers:{'Content-Type': 'application/json'}
                      })
  
 const Data=await res.json()

     if(!res?.ok){
        throw new Error(Data.message as string)
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
                <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle className="text-[4em] text-main">Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <form className="flex flex-col gap-[15px]" onSubmit={onsubmit}>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" required min={6} max={20} name="password" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" name="newpassword" required  min={6} max={20} type="password" />
              </div>
                 <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Rewrite New password</Label>
                <Input id="tabs-demo-new" name="repassword" required min={6} max={20} type="password" />
              </div>
              {iserror&&<p className="text-main self-center text-center w-full flex justify-center text-[3em] ">{error}</p>}
              <Button type="submit" className="bg-main font-bold hover:bg-gray-500 hover:cursor-pointer">{loading?'..Saving':'Save password'}</Button>

            </form>

            </CardContent>
            <CardFooter>
              
            </CardFooter>
          </Card>
        </TabsContent>
    )
}