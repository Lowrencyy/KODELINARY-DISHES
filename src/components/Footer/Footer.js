import React from 'react'
import Logo from '../Resources/logo.png'

function Footer() {
  return (
    <div>
      <footer className="text-white">
          <div className="container">
            <div className="bg-light rounded-top py-5 p-sm-5 mx-0">
            <div className="row g-4 align-items-center text-center text-lg-start">
              
              <div className="col-lg-5">
                <ul className="nav list-inline text-primary-hover justify-content-center justify-content-lg-start mb-0">
                  <li className="list-inline-item"><a className="nav-link text-muted" href="#">About</a></li>
                  <li className="list-inline-item"><a className="nav-link text-muted" href="#">Policy</a></li>
                  <li className="list-inline-item"><a className="nav-link text-muted pe-0" href="#">Terms & Condition</a></li>
                </ul>
              </div>
              
           
              <div className="col-lg-3 text-center">
                
                <a className='me-0' href='/'>
              <img src={Logo} alt="logo" width={190}/>
                </a>
                <div className="text-muted text-primary-hover mt-3 text-light footer" /* style="font-size: 20px; font-weight: 40;" */> Copyrights © 2023 KODEGO BOOTHCAMP86:<a href="https://www.facebook.com/" className="text-mute text-danger"> LAURENCE</a>. </div>
              </div>
        
             
              <div className="col-lg-4">
                <ul className="nav text-primary-hover hstack gap-2 justify-content-center justify-content-lg-end">
                  <li className="nav-item">
                    <a className="nav-link fs-5 text-muted" href="https://www.facebook.com/lowrencyy/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-5 text-muted" href="https://twitter.com/i/flow/login" target="_blank"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-5 text-muted" href="https://www.instagram.com/lowrencyy/"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-5 text-muted" href="https://ph.linkedin.com/in/mark-laurence-tomenio-057a43284"><i className="fab fa-linkedin-in"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-5 text-muted" href="#"><i className="fab fa-github"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer

