export default function(state=null,action){
    console.log("Action.payload : ", action.payload);
    console.log("State : ",state);
    switch(action.type){
        case "PRODUCT_SELECTED":
            return action.payload;
            break;
    }
    return state;
}