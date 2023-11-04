import React from "react";
import Testimonials from "./components/Testimonials";
import Reviews from "./data";

const App = () => {
  return(
    <div>
      <div>
        <h1>Our testimonials</h1>
        <div></div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
};

export default App;
