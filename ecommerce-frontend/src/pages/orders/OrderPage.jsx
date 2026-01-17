import './OrderPage.css';
import api from '../../api/axios';
import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { OrderGrid } from './OrderGrid';

export function OrderPage({ cart,loadCart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrderPageData = async () => {
            const response = await api.get('/api/orders?expand=products');
            setOrders(response.data);
        };
        fetchOrderPageData();
    }, []);
    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href="orders-fevicon.png" />
            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <OrderGrid orders={orders} loadCart={loadCart} />

            </div>
        </>
    );
}
