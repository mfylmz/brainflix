import React from 'react';
import Button from './Button';
import UserImage from './UserImage';
import { Link } from 'react-router-dom';

import logo from "../assets/logos/Logo-brainflix.svg";
import search from "../assets/icons/Icon-search.svg";
import upload from "../assets/icons/Icon-upload.svg";
import user from "../assets/images/Mohan-muruge.jpg";

function Header(props) {
  console.log(props);
  return (  
    <div>
      <header className="site-header">
        <div className="site-header__container">
          <Link to={`/`} className="site-header__brand" >
            <img className="site-header__logo" src={logo} alt="brainflix logo"/>
          </Link>
        
          <div className="site-header__search">
            <img className="site-header__search--icon" src={search} alt="search the page box"/> 
            <input className="site-header__search--text" placeholder="Search"/>
          </div>
          
          <div className="site-header__group">
            <Link to={`/upload`} className="site-header__upload">
              <img className="site-header__upload--icon" src={upload} alt="upload the file"/>
              <Button text="UPLOAD" className="site-header__upload--text" />
            </Link>

            <div className="site-header__user">
              <UserImage className="site-header__user--image" user={user}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;




