import api from '../../api/axios';
import './HomePage.css'
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductGrid } from './ProductsGrid';
import { useSearchParams } from 'react-router';

export function HomePage({cart,loadCart}) {
    const [products,setProducts]=useState([]);
    const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

    useEffect(()=>{
         
         const getHomeData=async ()=>{
            const urlPath = search ? `/api/products?search=${search}` : '/api/products';
            const response = await axios.get(urlPath);
            setProducts(response.data);
         };
    getHomeData();
        
    },[search]);

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="home-fevicon.png" />

            <Header cart={cart} />
            <div className="home-page">
               <ProductGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}
