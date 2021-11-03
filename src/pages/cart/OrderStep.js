import React, { useState, useEffect } from 'react'
import './cartstyle.css'
import Cart from './Cart'
import Transport from './Transport'
// import Receive from './pages/Receive'
import ReceiveCard from './ReceiveCard'
// import OrderList from './pages/OrderList'
import CheckOrder from './CheckOrder'
import ScrollToTop from '../../components/ScrollToTop'
function OrderSteps(props) {
  const [datacard, setDatacard] = useState({})
  const [paydata, setPaydata] = useState()
  const [step, setStep] = useState(1)

  const cart = (
    <>
      {/* <h2>購物車</h2> */}
      <Cart />
    </>
  )

  const shippingForm = (
    <>
      {/* <h2>運送表單</h2> */}
      <Transport setPaydata={setPaydata} />
    </>
  )

  const paymentForm = (
    <>
      {/* <h2>付款表單</h2> */}
      <ReceiveCard setDatacard={setDatacard} />
    </>
  )

  const orderDetail = (
    <>
      {/* <h2>訂購詳細</h2> */}
      <CheckOrder paydata={paydata} datacard={datacard} />
    </>
  )

  const switchStep = (step) => {
    switch (step) {
      case 1:
        return cart
      case 2:
        return shippingForm
      case 3:
        return paymentForm
      case 4:
        return orderDetail
      default:
        return cart
    }
  }
  {
    console.log('datacard:', datacard)
  }
  const changeStep = (isAdded = true) => {
    if (isAdded && step < 4) setStep(step + 1)
    if (!isAdded && step > 1) setStep(step - 1)
  }

  return (
    <>
      <div className="mt-5 "></div>
      <div className="mb-5">
        {switchStep(step)}
        <div class="container">
          <div class="row justify-content-center">
            {step !== 1 && (
              <button
                className="btn"
                onClick={() => {
                  changeStep(false)
                }}
              >
                上一步
              </button>
            )}
            {step !== 4 && (
              <button
                className="btn"
                onClick={() => {
                  changeStep(true)
                }}
              >
                下一步
              </button>
            )}
            {step == 4 && (
              <button
                className="btn"
                onClick={() => {
                  changeStep(true)
                }}
              >
                送出
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderSteps
