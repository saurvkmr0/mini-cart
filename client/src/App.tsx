import React, { createContext, useState } from 'react';
import './style.css'; 
import CartBar from './component/CartBar';
import CardScreen from './component/CardScreen'; 



// Define the type for your context
type ToggleContextType = [
  number,                                  // totalItem
  React.Dispatch<React.SetStateAction<number>>,  // setTotalItem
  number,                                  // totalAmount
  React.Dispatch<React.SetStateAction<number>>   // setTotalAmount
];

// Create context with a default value
export const ToggleContext = createContext<ToggleContextType>([
  0,      // Default value for totalItem
  () => {},   // Default value for setTotalItem
  0,      // Default value for totalAmount
  () => {}    // Default value for setTotalAmount
]);




function App(){
  const [totalItem, setTotalItem] = useState(0); 
  const [totalAmount, setTotalAmount] = useState(0); 
  return (
    <ToggleContext.Provider value={[totalItem, setTotalItem,totalAmount,setTotalAmount]}>
      <div className="App flex justify-center w-screen bg-[url(./assets/grocery_bg2.jpg)] h-screen py-2  overflow-auto ">
        <div className="[width:400px] backdrop-blur-[3px]  bg-white/10 border border-white/20">
          <CardScreen/>
        </div>
          <div className="absolute bottom-0 p-2 [width:400px]">
            <CartBar/>
          </div>
      </div>
      </ToggleContext.Provider> 
  );
}

export default App;
