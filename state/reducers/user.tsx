

export const userreducer={

    addlike(state:{likes:string[],saves:string[]},action:{type:string,payload:{id:string,type:'like'|'save'}}){
          if(action.payload.type==='like'){
                const newlikes=state.likes
                    if(!newlikes.includes(action.payload.id)){
                      state.likes.push(action.payload.id)
                    }else{
                        const finpost=newlikes.findIndex(elm=>{return action.payload.id===elm})
                        state.likes.splice(finpost,1)
                    }
                   

            return 
          }
            if(action.payload.type==='save'){
                const newsaves=state.saves
                if(!newsaves.includes(action.payload.id)){
                       state.saves.push(action.payload.id)
                        }else{
                          const findpost=newsaves.findIndex(elm=>{return action.payload.id===elm})
                          state.saves.splice(findpost,1)
                        }
                   
           
          }else{
            return 
          }                      
    },
        setlikesandsaves(state:{likes:string[],saves:string[]},action:{type:string,payload:{likes:string[],saves:string[]}}){
            return {likes:action.payload.likes,saves:action.payload.saves}
    }

}