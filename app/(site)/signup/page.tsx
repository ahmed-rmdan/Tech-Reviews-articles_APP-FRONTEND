'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {z}  from 'zod'
import { useForm,SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function Signup(){
const router=useRouter()
const schema=z.object({
  name:z.string().min(5,{message:'min length should be 5'}).max(20,{message:'max length should be 20'}),
  username:z.string().min(5,{message:'min length should be 5'}).max(20,{message:'max length should be 20'}),
  password:z.string().min(6,{message:'min length should be 5'}).max(20,{message:'max length should be 20'}),
  repassword:z.string().min(6,{message:'min length should be 5'}).max(20,{message:'max length should be 20'}),
  email:z.email()
})

type formfield=z.infer<typeof schema>

const {setError,formState:{isSubmitting,errors},handleSubmit,register}=useForm<formfield>({
  resolver:zodResolver(schema),
  defaultValues:{
    name:'',
    username:'',
    password:'',
    repassword:'',
    email:''
  }
})

const onsubmit:SubmitHandler<formfield>=async(form)=>{
        if(form.password!==form.repassword){
          setError('repassword',{type:'manual',message:'password is not similar'})
          return
        }

  try{


               const res= await fetch('http://localhost:5000/users/createuser',{
         method:'POST',
       headers:{    'Content-Type': 'application/json'},
                    body:JSON.stringify(
                         {name:form.name,username:form.username,password:form.password,email:form.email}
                    )
             })
             const data=await res.json()
             if(!res.ok){
              throw new Error(data.message as string)
             }
             router.push('/')
             toast.success('you have been logged in')
 
  }catch(err){
    const errmesg=err instanceof Error? err.message:'unexpected error'
    setError('root',{type:'manual',message:errmesg})
  }

}

  return(
    <div className=" flex items-center justify-center   w-full bg-sec text-[3px] sm:text-[4px]   lg:text-[4px]  xl:text-[4px] 2xl:text-[4.5px] " >
         
         <div className="flex flex-col items-center justify-start bg-white p-6 m-10 w-[97%] sm:w-[85%] xl:w-[55%] 2xl:w-[50%] rounded-2xl gap-[25px] ">
            <h1 className="w-full underline font-extrabold text-main text-[8em] text-center"> SignUP</h1>
             <form className="flex flex-col items-center w-[95%] sm:w-[70%] lg:w-[60%] gap-[15px] text-[3em]" onSubmit={handleSubmit(onsubmit)}>
                    <Label className="self-start">Name</Label>
                     <Input {...register('name')} type="text" placeholder="your Name" required />
                  { errors.name&&<p className="text-main font-semibold self-start "> *{errors.name?.message}</p>}
                      <Label className="self-start">UserName</Label>
                   <Input type="text" placeholder="username" {...register('username')} required />
                   {errors.username&&<p className="text-main font-semibold  self-start"> *{errors.username?.message}</p>}
                    <Label className="self-start">Password</Label>
                   <Input type="password" placeholder="password" {...register('password')} required />
                    { errors.password&&<p className="text-main font-semibold self-start"> *{errors.password?.message}</p> }
                   <Label className="self-start">Rewrite Password</Label>                  
                    <Input type="password" placeholder=" rewrite password" {...register('repassword')} required />
                    {errors.repassword&&<p className="text-main font-semibold self-start"> *{errors.repassword?.message}</p>}
                     <Label className="self-start">Email</Label> 
                     <Input type="email" placeholder=" @email.com" {...register('email')} required />
                    {errors.email&&<p className="text-main font-semibold self-start"> *{errors.email?.message}</p>}
                         <div className="flex items-start gap-3">
                           <Checkbox id="toggle"  />
                            <Label htmlFor="toggle">Enable notifications</Label>
                       </div>
                     {errors.root&& <p className="text-main font-semibold">* {errors.root?.message} </p>}
                    <Button type="submit" className="bg-main text-sec font-bold sm:text-[1.3em] w-[30%] sm:w-[20%]
                     hover:bg-gray-500 hover:cursor-pointer">{isSubmitting?'..Submitting':'Sumbit'}</Button>
                   
             </form>

         </div>
         
        
    </div>
  )

}