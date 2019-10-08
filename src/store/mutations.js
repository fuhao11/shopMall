
const shopCarListNum = (state,id,method)=> {
    state.productList.map((item,index) => {
        if(item.id == id){
            let edit = item;
            if(method==='+'){
                edit.payNum+=1;
            }else if(method==='-'){
                edit.payNum = edit.payNum-1>0 ? edit.payNum-1 : 0;
            }
            state.productList.splice(index,1,edit)
        }
    })
}



export default {
    initState (state,proItem){
        proItem.payNum = 1;
        state.productList.push(proItem)  
    },
    addPro (state, id){
        shopCarListNum(state,id,'+')
    },
    dePro (state, id){
        shopCarListNum(state,id,'-')
    },
    changeState (state,id){
        state.productState[id] = '1'
        console.log(state.productState)
    }
}