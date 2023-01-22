import React, {useState} from 'react'
import logo from "../images/logo.webp"
import { FcMenu } from "react-icons/fc";
import { ImSearch } from "react-icons/im";
import { CgSearch ,CgChevronLeft} from "react-icons/cg";
import { TbChevronDown, TbGridDots } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductDropdown from './ProductDropdown';
// 
import "./Navbar.css"
// 
//
const Navbar = () => {

    const [click, setClick] = useState(false)
    const [dropClick, setDropClick] = useState(false);
    const [close, setClose] = useState(false)
    return (
        <>
      <nav>
          <div className="nav-left">
              <div className="header">
                  <img src={logo} className="logo" alt="" /> 
                  <div className='btn-container'>
                      {!click && <button className='search'><CgSearch/></button> }
                      
                      <button className='menu' onClick={() => setClick(!click)}>
                          {click ? <VscChromeClose/>: <FcMenu/> }
                      </button>
                   </div>
              </div>
          </div>
     <div className={`contain ${click && "show-contain"}`}>
          <div className="nav-right">
              <div>
              <a href="" className='link1'>Try now</a>
                  <a href='' className='link2'>Buy now</a>
              </div>
              <div className='icon-header'>
                  <div className='icon-container'>
                 <span><ImSearch /></span>
                  <span className='menu-dot'><TbGridDots /></span>
                      <span className='name'>AP</span> 
                 </div>
              </div>
          </div>
          <div className='nav-center'>
                  <ul>
                      <li onClick={() => setDropClick(!dropClick)}>
                            <a href="">Product</a>
                            <span style={{ lineHeight: "20px", }}>
                              {click ? <MdKeyboardArrowRight/> : <TbChevronDown /> }   
                          </span>        
                      </li>
                      <li>
                          <a href="">For teams</a> <span>
                               {click ? <MdKeyboardArrowRight/> : <TbChevronDown /> }
                          </span>                    
                      </li>
                      <li>
                          <a href="">Support</a> <span>
                               {click ? <MdKeyboardArrowRight/> : <TbChevronDown /> }
                          </span>
                      </li>
                      </ul>
                    </div>
                </div>
                
            </nav>
                {/* {dropClick && <ProductDropdown dropClick={dropClick} setDropClick={setDropClick} />}                 */}
            
     </>
            
  )
}

export default Navbar
