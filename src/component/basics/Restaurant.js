import React, { useState } from 'react'
import './Restaurant.css'
import Menu from './menuApi'
import MenuCard from './menuCard'

const uniquecard = [new Set( Menu.map((curr) => {
    return curr.category
}
))]
console.log(uniquecard);

const Restaurant = () => {

  const [data,setdata] = useState(Menu)
  

  const filterItem = (category) => {
    const updatedList = Menu.filter((currElem) => {
        return currElem.category === category
    });

    setdata(updatedList);


  }
  return (
   <>
   <nav className='navbar'>
        <div className="btn-group">
            { uniquecard.map((curr) => {
                return(
                <button className="btn-group__item" onClick={() => filterItem(curr)}>{curr}</button>
                )
            })}
        {/* <button className="btn-group__item" onClick={() => setdata(Menu)}>All</button> */}
        
        </div>

   </nav>
     <MenuCard  data = {data}/>
   </>
  )
}

export default Restaurant