import React from 'react'

const Menucard = ({menuData}) => {

  return (
    <> 
    <section className='main-card--cointainer'>
    {menuData.map((curElem) =>{

        const {id, name, category, image, description} = curElem;

        return(
            <>
<div className='card-container' key={id}>
      <div className='card'>
   <div className='card-body'>
      <span className='card-number card-circle subtle'>{id}</span>
      <span className='card-author subtle'>{curElem.name}</span>
      <h2 className='card-title'>{curElem.name}</h2>
      <span className='card-description subtle'>{curElem.description}</span>
   <div className='card-read'>Read</div>
   </div>
   <img src={curElem.image} alt="images" className='card-media' />
   <span className='card-tag'>Order Now</span>
    </div>
  </div>
  </>
)
   }) }
</section>
     </>
  )
}

export default Menucard