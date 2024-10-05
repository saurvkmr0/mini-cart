import React from 'react';
import ItemCard from './ItemCard';
import toordal from '../assets/products/toor-dal.jpg'
import moongdal from '../assets/products/moong-dal.jpg'
import salt from '../assets/products/tata-salt.jpg'
import ghee from '../assets/products/ghee.jpg'
import rice from '../assets/products/rice.jpeg'
import sugar from '../assets/products/sugar.jpg'


function CardScreen() {
  return (
    <div className='flex flex-col gap-2 pb-20'>
        <ItemCard price="850" itemName="Ghee" image={ghee}/>
        <ItemCard price="24" itemName="Tata Salt" image={salt}/>
        <ItemCard price="60" itemName="Rice" image={rice}/>
        <ItemCard price="40" itemName="Sugar" image={sugar}/>
        <ItemCard price="210" itemName="Tuur Daal" image={toordal}/>
        <ItemCard price="140" itemName="Moong Daal" image={moongdal}/>
    </div>
  )
}

export default CardScreen