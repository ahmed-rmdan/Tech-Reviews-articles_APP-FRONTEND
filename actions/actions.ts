'use server'
import { revalidateTag } from "next/cache"
export async function saveing(id:string,itemid:string,kind:string){
      const res=await fetch(`http://localhost:5000/users/addsave`,{ 
                     method:'POST'    
                     , 
                    cache:'default',
                    headers:{'Content-Type': 'application/json'} ,
                    body:JSON.stringify({id,
                        itemid,
                        kind,
                        
                    })       
                           }
                        )
                      revalidateTag('saved') 
                      
                      return res

}

export async function liking(id:string,itemid:string,kind:string){
      const res=await fetch(`http://localhost:5000/users/addlike`,{ 
                     method:'POST'    
                     , 
                    cache:'default',
                    headers:{'Content-Type': 'application/json'} ,
                    body:JSON.stringify({id,
                        itemid,
                        kind,
                        
                    })       
                           }
                        )
                      revalidateTag('liked') 
                      
                      return res

}

