'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
export default function UserLayout({ children }: { children: React.ReactNode }){
const {data}=useSession()
const router=useRouter()
useEffect(()=>{
if(!data){
router.push('/')
}
},[data])


return(
<>{children}</>
)
}