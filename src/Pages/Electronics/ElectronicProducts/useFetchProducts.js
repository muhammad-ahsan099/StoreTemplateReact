
import {useState , useEffect} from 'react';
import axios from 'axios';

export function useFetchProducts()
{
    const [products , setProducts] = useState([]);
    const [loading , setLoading] = useState(false)

    const fetchProduct = async () =>
    {
        try {
         setLoading(true)   
        let products = await axios.get('https://fakestoreapi.com/products/category/electronics');
        console.log("Product in Fetch Fuction show" , products.data);
        setProducts(products.data)
        }
        catch(error)
        {
            console.log("Error Messaeg" , error);
        }
        finally {
            setLoading(false);
        }
    }


    useEffect( ()=>
    {
        fetchProduct();
    } , [] )


    return [ products , loading]
    
}