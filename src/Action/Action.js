export const selectProduct = (product) => {
    console.log("You clicked the product : ", product);
    return{
        type:"PRODUCT_SELECTED",
        payload:product
    }
}