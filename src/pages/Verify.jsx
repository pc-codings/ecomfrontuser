import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Verify = () => {

    const {navigate,setCartItems,backendurl,token}=useContext(ShopContext);

    const [searchParams,setSearchParams]=useSearchParams();

    const success=searchParams.get('success');
    const orderId=searchParams.get('orderId');
     console.log(success,orderId);
     
    const verifyPayment=async()=>{

               try 
               {
                 if(!token){
                    return null;
                 }

                 const response=await axios.post(backendurl+'/api/order/verifyStripe',{success,orderId},{
                     headers:{
                        token
                     }
                 });

                  console.log(response.data);
                  

                 if(response.data.success){
                     setCartItems({});
                     navigate('/order')
                 }
                 else
                 {
                    navigate("/cart");
                 }
               } 
               catch (error) 
               {
                  console.log(error);
                  toast.error(error.message);
                  
               }
    }

    useEffect(()=>{
           verifyPayment();
    },[token])
  return (
    <div>

    </div>
  )
}

export default Verify