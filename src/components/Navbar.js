// ************************************* FINAL LEARNING PHASE  ************************************
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assest/logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import './NavbarStyles.css';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <header>
        <nav className='navbar'>
            <div className='logo'>
                <Link to='/'><img src={Logo} alt='' /></Link>
            </div>
            {/* nav-menu class here is what we want to toggle */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/pricing' className='nav-link'>Pricing</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/faq' className='nav-link'>FAQ</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-link'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? <FaTimes size={20} style={{color: '#fff'}}/>: <FaBars size={20} style={{color: '#fff'}}/> }
            </div>
        </nav>
    </header>
  )
}

export default Navbar


// ************************************* LEARNING PHASE 2 ************************************
// import Logo from '../assest/logo.png';
// import {FaBars, FaTimes} from 'react-icons/fa';
// import './NavbarStyles.css';

// const Navbar = () => {
//     const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//   return (
//     <header>
//         <nav className='navbar'>
//             <div className='logo'>
//                 <Link to='/'><img src={Logo} alt='' /></Link>
//             </div>
//             {/* nav-menu class here is what we want to toggle */}
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                 <li className='nav-item'>
//                     <Link to='/' className='nav-link'>Home</Link>
//                 </li>
//                 <li className='nav-item'>
//                     <Link to='/' className='nav-link'>Pricing</Link>
//                 </li>
//                 <li className='nav-item'>
//                     <Link to='/' className='nav-link'>FAQ</Link>
//                 </li>
//                 <li className='nav-item'>
//                     <Link to='/' className='nav-link'>Contact</Link>
//                 </li>
//             </ul>
//             <div className='hamburger' onClick={handleClick}>
//                 {click ? <FaTimes size={20} style={{color: '#fff'}}/>: <FaBars size={20} style={{color: '#fff'}}/> }
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Navbar

// ************************************* LEARNING PHASE 1 ************************************

// import React from 'react';
// import {Link} from 'react-router-dom';
// import Logo from '../assest/logo.png';
// import {FaBars, FaTimes} from 'react-icons/fa';
// import './NavbarStyles.css';

// const Navbar = () => {
//   return (
//     <header>
//         <nav className='navbar'>
//             <div className='logo'>
//                 <Link to='/'><img src={Logo} alt='' /></Link>
//             </div>
//             <ul className='nav-menu'>
//                 <li className='nav-item'>
//                     <Link to='/' className='nav-link'>Home</Link>
//                 </li>
//                 <li className='nav-item'>
//                     <Link to='/' className='nav-link'>Pricing</Link>
//                 </li>
//                 <li className='nav-item'>
//                     <Link to='/' className='nav-link'>FAQ</Link>
//                 </li>
//                 <li className='nav-item'>
//                     <Link to='/' className='nav-link'>Contact</Link>
//                 </li>
//             </ul>
//             <div className='hamburger'>
//                 <FaBars style={{color: '#fff'}}/>
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Navbar