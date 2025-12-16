import { DeliveryOption } from './DeliveryOption';
import { CartItemDetails } from './CartItemDetails';
import { DeliveryDate } from './DeliveryDate';
import axios from 'axios';
export function OrderSummary({ cart, deliveryOptions ,loadCart}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {

                const deleteCartItem=async ()=>{
                    await axios.delete(`/api/cart-items/${cartItem.productId}`);
                    await loadCart();
                }
                return (
                    <div key={cartItem.productId} className="cart-item-container">

                        <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions} />
                        <div className="cart-item-details-grid">
                            <CartItemDetails cartItem={cartItem} deleteCartItem={deleteCartItem} />
                            <DeliveryOption cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                        </div>
                    </div>
                );
            })}


        </div>

    );
}