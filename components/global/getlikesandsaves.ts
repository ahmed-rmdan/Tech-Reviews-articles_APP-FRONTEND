

export async function getlikesandsaves(id:string){
         
  const res2=await fetch(`http://localhost:5000/users/setlikesandsaves?id=${id}`,{      
                    cache:'no-store',
                    headers:{'Content-Type': 'application/json'}        
                           })
              const Data:{likes:string[],saves:string[]}=await res2.json()

              console.log(Data)
              return {likes:Data.likes,saves:Data.saves}
           
}