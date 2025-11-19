'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"


import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Controller } from "react-hook-form";
import { useRouter } from "next/navigation"





export default function Addpost(){
const router=useRouter()
  const schema=z.object({
    title:z.string().max(25,{message:'max length is 25 '}).min(1,{message:'title required'}),
    description:z.string(),
    mainimage:z.any(),
    content:z.string(),
    mainslider:z.boolean()
  })

  type formfield=z.infer<typeof schema>

  const {register,handleSubmit,formState:{errors,isSubmitting},control,setError}=useForm<formfield>({
    resolver:zodResolver(schema),
    defaultValues:{
      title:'',
      description:'',
      mainslider:false,
      content:'',
      mainimage:''
    }
  })
  
  const onsubmit:SubmitHandler<formfield>=async(data)=>{
  const checkfile:File=data.mainimage[0]
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
 if(!allowedTypes.includes(checkfile.type)){
  setError('mainimage',{message:'please only upload a image file'})
  return;
 }

 try{
      const res1= await fetch('http://localhost:5000/posts/createpost',{
         method:'POST',
       headers:{    'Content-Type': 'application/json'},
                    body:JSON.stringify(
                         {title:data.title,description:data.description,content:data.content,mainslider:data.mainslider}
                    )
 })
 const postdata= await res1.json()
 if(!res1.ok){
throw new Error(postdata.message as string)
 }
console.log(postdata.id)

  const imagefile:File=data.mainimage[0]
  const formdata=new FormData()
  formdata.append('file',imagefile)

  console.log(formdata.get('file'))

      const res2= await fetch(`http://localhost:5000/posts/putpostimage?id=${postdata.id}`,{
         method:'PUT',
                    body:formdata
 })
 const postdata2= await res2.json()
 if(!res2.ok){
throw Error(postdata2.message as string)
 }
   
   
 }catch(error){

   const msg = error instanceof Error ? error.message : String(error);
 setError('root',{type: "manual", message:msg})
 }
 

 router.push('/dashboard/posts?activepage=1&sort=all')
toast.success('POST has been Created successfully')

  }


  return(
    <div className=" min-w-[75%]   flex items-center justify-center p-5 " >
         <div className="bg-white flex flex-col w-[98%] sm:w-[80%] items-center gap-[15px] p-5 rounded-2xl">
               <h1 className="text-main text-[9em] underline font-bold ">Add Post</h1>
                <form className="flex flex-col w-[85%] sm:w-[70%] xl:w-[50%]  gap-[15px] " onSubmit={handleSubmit(onsubmit)}>
                           <div className="grid gap-2 text-[2em]">
                               <Label  className="text-[2.5em]" htmlFor="Main Title">Main Title</Label>
                                  <Input
                                 id="Main Title"
                                  type="text"
                                placeholder=""
                                 required
                                  {...register('title')}
                                     />
                                     { errors.title&&<p className="text-main font-semibold text-[1.8em] ">{ errors.title?.message}</p>}
                            </div>                  
                           <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="Mainimage">Main Image</Label>
                                  <Input
                                 id="Mainimage"
                                  type="file"
                                placeholder=""
                                 required
                                 {...register('mainimage')}
                                     />
                                     { errors.mainimage?.message&&<p className="text-main font-semibold text-[1.8em] ">{errors.mainimage?.message as string}</p>}
                                   
                            </div>
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="Description">Description</Label>
                                  <Input
                                 id="Description"
                                  type="text"
                                placeholder=""
                                 required
                                 {...register('description')}
                                     />
                                     
                            </div>
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="content">Content</Label>
                                  <Textarea
                                 id="content"                                 
                                placeholder=""
                                 required
                                 {...register('content')}
                                     />
                               
                            </div>
                            
                                   <Controller  name="mainslider" control={control} 
                                   render={({field})=>(
                                      <div className="flex items-center gap-3 mt-2">
                                       <Checkbox  id="mainslider" 
                                       checked={field.value}
                                       onCheckedChange={(checked)=>{
                                        field.onChange(!!checked)
                                       }}
                                       />
                                     <Label className="font-semibold text-[3.5em]" htmlFor="mainslider">Add the post to the main Home page Slider</Label>
                                       </div>
                                   )}
                                   >
                                   
                                      
                                   </Controller>
                                    
                                    
                             
                                 {errors.root?.message&&<p className="text-main font-semibold text-[4em]  text-center" >* {errors.root?.message}</p>}
                               <Button disabled={isSubmitting} type='submit' className="w-[30%] self-center !text-[4em] mt-[10px] hover:cursor-pointer bg-main hover:bg-gray-500"
                               > {isSubmitting?'..submitting':'Submit'} </Button>                                                     
                 </form>
        
         </div>        
               
    </div>
  )

}