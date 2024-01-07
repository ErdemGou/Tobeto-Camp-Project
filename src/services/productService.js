import axios from "axios";


export default class ProductService {
    getProduct(){
        return axios.get("https://dummyjson.com/products")
    }
}