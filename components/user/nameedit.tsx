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
export function NameEdit(){

const {data,update}=useSession()
   
const [loading,setloading]=useState<boolean>(false)
const [error,seterror]=useState<string>('')
const [iserror,setiserror]=useState<boolean>(false)

async function onsubmit(e:React.FormEvent<HTMLFormElement>){

  e.preventDefault()
  const formdata=new FormData(e.currentTarget)

 const newname=formdata.get('name')
console.log(data?.user.id)
 setloading(true)
  try{
     
const res= await fetch(`http://localhost:5000/users/updatename`,{
         method:'PUT',
                    body:JSON.stringify({newname,id:data?.user.id})
                    ,
                      headers:{'Content-Type': 'application/json'}
 })
  
 const Data=await res.json()

     if(!res?.ok){
        throw new Error(Data.message as string)
            }
await update({name:newname})
setloading(false)
setiserror(false)
seterror('')
  toast.success('name has been updated')

  }catch(err) {
   const errmes= err instanceof Error? err.message:'somthing went wrong'
   setiserror(true)
    seterror(errmes)
    setloading(false)
  }


}

    return(
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle className="text-[4em] text-main">Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid i gap-6">
               <form className=" flex flex-col w-full gap-[20px]" onSubmit={onsubmit}>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-name">Name</Label>
                   <Input id="tabs-demo-name" min={3} max={15} name="name" defaultValue={data?.user.name as string} />
                 </div>
                 {iserror&&<p className="text-main self-center text-center w-full flex justify-center text-[3em] ">{error}</p>}
                   <Button type="submit" className="bg-main font-bold w-[70%] self-center s text-center hover:bg-gray-500 hover:cursor-pointer">
                    {loading?'..Saving':'Save changes'}</Button>                
               </form>

            </CardContent>
            <CardFooter>
              
            </CardFooter>
          </Card>
        </TabsContent>
    )
}