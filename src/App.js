// ************************************* FINAL LEARNING PHASE  ************************************
/* creation of Hero.js and HeroStyles.css component.
   HeroStyles.css component is imported into the Hero.js component
   Hero.js component is imported into the Home.js component

   creation of Pricing.js and PricingStyles.css component.
   PricingStyles.css component is imported into the Pricing.js component
   Pricing.js component is imported into the Home.js component

   creation of Testimonial.js and TesitomonialStyles.css component.
   TestimonialStyles.css component is imported into the Testimonial.js component
   Tesitimonial.js component is imported into the Home.js component

   creation of Faq.js and FaqStyles.css component.
   FaqStyles.css component is imported into the Faq.js component
   Faq.js component is imported into the Home.js component

   creation of Contact.js and ContactStyles.css component.
   ContactStyles.css component is imported into the Contact.js component
   Contact.js component is imported into the Home.js component

   creation of Footer.js and FooterStyles.css component.
   FooterStyles.css component is imported into the Footer.js component
   Footer.js component is imported into the Home.js component

   And setting up routes folder (with some components) for routing 
*/

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Pricing from './routes/Pricing';
import Faq from './routes/Faq';
import Contact from './routes/Contact';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home /> } /> 
      <Route path='/pricing' element={<Pricing /> } /> 
      <Route path='/faq' element={<Faq /> } /> 
      <Route path='/contact' element={<Contact /> } /> 
     </Routes>
    </>
  );
} 

export default App;

// ************************************* LEARNING PHASE 2 ************************************
/* Addition of media query to NavbarStyles.css for responsiveness
  and making the hamburger clickable for mobile menu appearance
  and disappearance, which is done in Navbar.js by using the 
  useState hook.
*/

// import React from 'react';
// import {Routes, Route} from 'react-router-dom';
// import Home from './components/Home';

// function App() {
//   return (
//     <>
//      <Routes>
//       <Route path='/' element={<Home /> } /> 
//      </Routes>
//     </>
//   );
// } 

// export default App;

// ************************************* LEARNING PHASE 1 ************************************
/* Setting up the Home.js, Navbar.js and
  NavbarStyles.css component
*/

// import React from 'react';
// import {Routes, Route} from 'react-router-dom';
// import Home from './components/Home';

// function App() {
//   return (
//     <>
//      <Routes>
//       <Route path='/' element={<Home /> } /> 
//      </Routes>
//     </>
//   );
// } 

// export default App;
