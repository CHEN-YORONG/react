import React, { useState, useEffect } from 'react'
import './cartstyle.css'

function Receive(props) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true)

    // 模擬和伺服器要資料
    // 最後設定到狀態中
    // setStudents(data)

    // 3秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const spinner = (
    <>
      <div
        className="spinner-grow text-primary"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-secondary"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-success"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )
  const display = (
    <>
      <div class="container mt-5 pt-5 mb-5 pb-5">
        <div class="row">
          <p className="ml-3">
            {' '}
            HOME / 商品 / 填寫收件資料
          </p>
        </div>
      </div>
      <div class="container">
        <div class="d-flex justify-content-between ">
          <div class="rongboxborder ">
            <p>確認購買明細</p>
          </div>
          <div class="rongboxborder">
            <p> 配送與付款方式</p>
          </div>
          <div class="rongboxborder rongboxbg">
            <p class="rongtextcolor">填寫收件資料</p>
          </div>
          <div class="rongboxborder">
            <p>確認訂單</p>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-5">
        <div class="row justify-content-center">
          <div class="w875 borderbottom">
            <p>DELIVERY INFORMATION 請填寫收件資料</p>
          </div>
        </div>
      </div>
      <div class="container pt-5">
        <div class="row justify-content-center ">
          <div class="w875 ">
            <form class="ml-5 col-12">
              <div class="form-group">
                <label for="name">收件姓名 :</label>
                <input
                  type="text"
                  class="form-control col-4 inputstyle"
                  placeholder="姓名"
                />
                <small class="form-text text-muted">
                  We'll never share your email with anyone
                  else.
                </small>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">
                  手機號碼 :
                </label>
                <input
                  type="number"
                  class="form-control col-4 inputstyle"
                  placeholder="手機"
                />
                <small class="form-text text-muted">
                  We'll never share your email with anyone
                  else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  收貨地址 :
                </label>
                <div class="d-flex">
                  <select class="form-control col-4 mr-4 ">
                    <option selected>-請選擇縣市-</option>
                    <option>...</option>
                  </select>
                  <select class="form-control col-4 ml-5">
                    <option selected>-請選擇區域-</option>
                    <option>...</option>
                  </select>
                </div>
                <input class="form-control col-9 mt-3"></input>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  備註說明 :
                </label>
                <br />
                <textarea
                  class="inputstyle"
                  name=""
                  id=""
                  cols="84"
                  rows="10"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-5">
        <div class="d-flex justify-content-center">
          <div class="w875 borderbottom">
            <p>PAYMENT OPTIONS 請選擇卡別</p>
          </div>
        </div>
      </div>

      <div class="container pt-5">
        <div class="d-flex justify-content-center">
          <div class="w875 ">
            <div class="form-group ml-5 visa">
              <label for="name">發票資訊 : </label>
              <input
                class="ml-5"
                type="radio"
                placeholder="姓名"
              />
              <img src="./img/visa_PNG36.png" alt="" />
              <img src="./img/JCBLOGO.jfif" alt="" />
              <input
                class="ml-5 mr-2"
                type="radio"
                placeholder="姓名"
              />
              <img src="./img/unionpaylogo.jfif" alt="" />
              <div>
                <label for="name">信用卡號 :</label>
                <input
                  type="number"
                  class="form-control col-8 inputstyle"
                  placeholder="卡號"
                />
                <small class="form-text text-muted">
                  We'll never share your email with anyone
                  else.
                </small>
              </div>
            </div>
            <div class="d-flex mr-2 year">
              <div class="col-2 ">
                <label for="name">月 :</label>
                <input
                  type="number"
                  class="form-control  "
                  placeholder="月"
                />
              </div>
              <div class="col-2 ">
                <label for="name">年 :</label>
                <input
                  type="number"
                  class="form-control "
                  placeholder="年"
                />
              </div>
              <div class="col-2">
                <label for="name">末三碼 :</label>
                <input
                  type="number"
                  class="form-control "
                  min="3"
                  placeholder="末三碼"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5 pt-5">
        <div class="d-flex justify-content-center">
          <div class="w875 borderbottom">
            <p>RECEIPT 請選擇發票格式</p>
          </div>
        </div>
      </div>

      <div class="container pt-5">
        <div class="d-flex justify-content-center">
          <div class="w875 ">
            <div class="form-group ml-5">
              <label for="name">發票資訊 : </label>
              <input
                class="ml-5"
                type="radio"
                placeholder="姓名"
              />
              <label for="">電子發票</label>
              <input
                class="ml-5"
                type="radio"
                placeholder="姓名"
              />
              <label for="">公司索取電子發票證明聯</label>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5 pt-4">
        {/* <div class="row justify-content-center ">
        <button class="btn">
          <span>
            重新選擇
            <br />
            付款方式
          </span>
        </button>
        <button class="btn">
          <span>確認購買</span>
        </button>
      </div> */}
      </div>

      <div className="mb-5"></div>
    </>
  )
  return <>{isLoading ? spinner : display}</>
}

export default Receive
