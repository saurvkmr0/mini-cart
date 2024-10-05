import React, { createContext,useContext,useState } from 'react';
import { ToggleContext } from '../App'; 

interface ItemCardProps {
  price?: string;
  itemName?: string;
  image?:string;
}


const ItemCard: React.FC<ItemCardProps> = (prop):JSX.Element => {

  const [count,setCount] = useState(0);
  const [totalItem, setTotalItem,totalAmount, setTotalAmount] = useContext(ToggleContext); 

  function handleClickDec(price:string|undefined): void {
    if(count>0){
      setCount(count-1);
      setTotalItem(totalItem-1);
      setTotalAmount(totalAmount-Number(price));
    }
    else{
      setCount(0);
    }
  }

  function handleClickInc(price:string | undefined): void {
    setCount(count+1);
    setTotalItem(totalItem+1);
    setTotalAmount(totalAmount+Number(price));
  }

  return (
    <>
      <div className="w-full border border-gray-200 rounded-lg shadow bg-gray-700 dark:border-gray-700">
        <div className="flex pt-5">
          <div>
          <a href="#">
            <img className="mx-4 rounded-full w-20" src={prop.image} alt="product image" />
          </a>
          </div>
          <div>
          <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{prop.itemName}</h5>
            </a>
          </div>
        </div>

        <div className="px-5 pb-5">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs {prop.price}<span className="text-lg">/kg</span></span>
            <div className='flex items-center justify-center'>
            <button className="text-white bg-blue-700 hover:bg-blue-800 text-3xl h-10 w-10 rounded-l-md flex items-center justify-center" onClick={()=>handleClickDec(prop.price)}>-</button>
              <p className="text-white bg-blue-700 text-2xl h-10 p-3 border-l-2 border-r-2 border-gray-800 flex items-center justify-center">{count}</p>
            <button className="text-white bg-blue-700 hover:bg-blue-800 text-3xl h-10 w-10 rounded-r-md flex items-center justify-center" onClick={()=>handleClickInc(prop.price)}>+</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ItemCard