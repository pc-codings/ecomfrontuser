import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () =>{

      const [latestproduct,setLatestProduct]=useState([]);

       const {products}=useContext(ShopContext);
       console.log(products);

       useEffect(()=>{
             
        setLatestProduct(products.slice(0,10));
       },[products])

       console.log(latestproduct);
       
       
  return (
    <div className='my-10'>

       <div className='text-center py-8 text-3xl'>
            <Title text1={'LATAEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
  Discover the trendiest styles of the season. From bold statement pieces to everyday essentials, our latest fashion collection is designed to elevate your wardrobe with elegance and flair.
            </p>
       </div>

          {/* Rendering products */}
        
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
              
             {
                 latestproduct.map((item,index)=>(
                    <ProductItem
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        item={item}
                    />
                 ))
             }
                
         </div>
      
    </div>
  )
}

export default LatestCollection