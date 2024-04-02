export const incNumber = (num)=>{
    return{
        type : "Increament",
        payload : num
    }
}

export const decNumber = ()=>{
    return{
        type : "Decreament"
    }
}