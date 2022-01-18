import React from 'react';

//Handles the nav bar and the switching of pages
function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbackground collapseOnSelect ">
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse navbackground" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => handlePageChange('About')}
          //switch to about
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
        >
          About
        </a>
      </li>
    
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //switch to portfolio
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        //switch to contact
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
        //switch to resume
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
     
       
      </ul>
     
    </div>
  </nav>
  
    

  ); 
}

export default Navigation;
