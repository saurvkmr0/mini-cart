import React,{ createContext,useContext,useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { ToggleContext } from '../App'; 

function CartBar():JSX.Element{
    const [totalItem, setTotalItem,totalAmount, setTotalAmount] = useContext(ToggleContext); 

    return(
        <div className="bottom-5 bg-green-500 rounded-3xl">
            <div className="flex justify-center items-center w-full h-14 pl-4 pr-2">
                <div className="flex justify-between items-center w-full">
                    <p className="text-lg font-bold">Items: {totalItem}</p>
                    <p className="text-xl font-bold">Sum total Rs {totalAmount}</p>
                    <div className="bg-slate-100 p-1 w-16 rounded-2xl flex justify-center">
                        <MdOutlineShoppingCartCheckout className='text-4xl text-green-500'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartBar;


