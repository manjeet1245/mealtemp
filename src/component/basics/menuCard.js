import React from 'react'

const menuCard = ({data}) => {

  return (
    <>
     <section className='main-card--cointainer'>
        {
            data.map((curr,index) =>{
                return(
                  
                    <div className='card-container' key={curr.id}>
                    <div className="card">
                        <div className="card-body">
                            <span className='card-number card-circle subtle'>{curr.id}</span>
                            <span className="card-author subtle">{curr.category}</span>
                             <h2 className='card-title'>{curr.name}</h2>
                             <span className="card-description subtle">{curr.description}</span>
                             <div className="card-read">Read</div>
                        </div>
                        <img src={curr.image} alt="" />
                        <span className="card-tag subtle">Order now</span>
                    </div>
                </div>
                
                )
               
            })
        }
        </section>
    </>
  )
}

export default menuCard