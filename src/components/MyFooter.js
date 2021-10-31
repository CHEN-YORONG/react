import React from 'react'
import './footerstyle.css'
function MyFooter(props) {
  return (
    <>
      <div class="footer a d-flex pt-5 pb-2 mt-5">
        <div class="col-4 align-self-center mb-5">
          <h5 class="text-center white">Secure Payment</h5>
          <div class="d-flex  justify-content-center">
            <a href="#/">
              <i class="fab fa-cc-jcb white"></i>
            </a>
            <a href="#/">
              <i class="fab white fa-cc-visa"></i>
            </a>
          </div>
        </div>
        <div class="col-4">
          <div class="d-flex justify-content-center">
            <img src="./img/LOGO 深色.jpg" alt="" />
          </div>
        </div>
        <div class="col-4 align-self-center mb-5">
          <h5 class="text-center white ">Follow Us</h5>
          <div class="d-flex  justify-content-center">
            <a href="#/">
              <i class="fab fa-facebook white"></i>
            </a>
            <a href="#/">
              <i class="fab fa-twitter white"></i>
            </a>
            <a href="#/">
              <i class="fab fa-skype white"></i>
            </a>
            <a href="#/">
              <i class="fab fa-tumblr-square white"></i>
            </a>
            <a href="#/">
              <i class="fas fa-envelope-square white"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyFooter
