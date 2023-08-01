import { useEffect } from "react"
import { getProducts } from "./product.service"


export const Product = () => {
    const getAllProducts = async() => {
        const access_token = localStorage.getItem('access_token')
       
       

        getProducts(access_token).then(data => {
            console.log(data)
        })
    }
    useEffect(() => {
        try {
            
        } catch(error) {
            console.log(error)
        }
    }, [''])
   
    return(
        <>
         <button onClick={getAllProducts}>Get Products</button>
        </>
    )
}