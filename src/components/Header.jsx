import React from 'react';
import Button from './Button';
import UserImage from './UserImage';

function Header(props) {
  console.log(props);
  return (  
    <div>
      <header className="site-header">
        <div className="site-header__container">
          <a className="site-header__brand" href="/">  
            <img className="site-header__logo" src={props.logo} alt="brainflix logo"/> 
          </a>
        
          <div className="site-header__search">
            <img className="site-header__search--icon" src={props.search} alt="search the page box"/> 
            <input className="site-header__search--text" placeholder="Search"/>
          </div>
          
          <div className="site-header__group">
            <div className="site-header__upload">
              <img className="site-header__upload--icon" src={props.upload} alt="upload the file"/>
              <Button text="UPLOAD" className="site-header__upload--text" />
            </div>

            <div className="site-header__user">
              <UserImage className="site-header__user--image" user={props.user}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;




