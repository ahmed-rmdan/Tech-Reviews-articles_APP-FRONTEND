import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { FC } from "react"




export const Pages:FC<{activepage:number,noposts:number,types:string,sort:string,search?:string}>=(props)=>{

 const nopages=Math.ceil(props.noposts/6) 
 
 const nogrouppages=Math.ceil(nopages/6)
  const curgrouppages=(Math.ceil(props.activepage/6))
 
  const end=(curgrouppages<nogrouppages)?6:nopages%6
  let arr:number[]=[]
  
    for(let i=(curgrouppages-1)*6+1;i<=end;i++){
      arr.push(i)
    }

  if(props.types==='postsadmin'){
       return (
    <Pagination>
      <PaginationContent>
 {   curgrouppages !==1 && <PaginationItem>
          <PaginationPrevious href={`/dashboard/posts?activepage=${(curgrouppages-1)*6}&sort=${props.sort}`} />
         </PaginationItem>}
       { arr.map(elm=>{
        return <PaginationItem key={elm}>
             <PaginationLink href={`/dashboard/posts?activepage=${elm}&sort=${props.sort}`} isActive={props.activepage===elm}>{elm}</PaginationLink>
             </PaginationItem>
                   }) 
                       }
  {  curgrouppages<nogrouppages&& <PaginationItem>
          <PaginationNext href={`/dashboard/posts?activepage=${(curgrouppages*6)+1}&sort=${props.sort}`} />
        </PaginationItem>}
      </PaginationContent>
    </Pagination>
  )
 }
   if(props.types==='searchpostsadmin'){
       return (
    <Pagination>
      <PaginationContent>
 {  curgrouppages !==1 && <PaginationItem>
          <PaginationPrevious href={`/dashboard/posts/search?search=${props.search}&activepage=${(curgrouppages-1)*6}&sort=${props.sort}`} />
         </PaginationItem>}
       { arr.map(elm=>{
        return <PaginationItem key={elm}>
             <PaginationLink href={`/dashboard/posts/search?search=${props.search}&activepage=${elm}&sort=${props.sort}`} isActive={props.activepage===elm}>{elm}</PaginationLink>
             </PaginationItem>
                   }) 
                       }
  {  curgrouppages<nogrouppages&& <PaginationItem>
          <PaginationNext href={`/dashboard/posts/search?search=${props.search}&activepage=${(curgrouppages*6)+1}&sort=${props.sort}`} />
        </PaginationItem>}
      </PaginationContent>
    </Pagination>
  )
 }     
  
}