 import React from 'react'
 
 const Testimonials = () => {
    let reviews = props.reviews;
   return (
     <div>
        <Card review = {reviews[0]}></Card>
     </div>
   )
 }
 
 export default Testimonials