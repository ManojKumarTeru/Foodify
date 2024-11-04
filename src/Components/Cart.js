import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/CartSlice";



const Cart=()=>{

    const cart=useSelector((store)=>store.cart.items);


    const dispatch=useDispatch();
    const clearingCart=()=>{
        dispatch(clearCart());
    }

    return(
        <div>
            <h1 className="text-center font-bold text-2xl m-2">Cart</h1>
            <div className="flex justify-center">
                <button onClick={clearingCart} className="bg-black text-white rounded-lg p-2 m-2">Clear Cart</button>
            </div>
            
            <ItemList items={cart} />
            {cart.length==0?<h1 className="text-center font-semibold">Your Cart is Empty!!! Add Some items into cart</h1>:""}
        </div>
    );
}

export default Cart;