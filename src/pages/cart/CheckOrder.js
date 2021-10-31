import React, { useState, useEffect } from 'react'
import './cartstyle.css'

function CheckOrder(props) {
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
          <p className="ml-3"> HOME / 商品 / 確認訂單</p>
        </div>
      </div>
      <div class="container">
        <div class="d-flex justify-content-between ">
          <div class="rongboxborder ">
            <p class="">確認購買明細</p>
          </div>
          <div class="rongboxborder">
            <p> 配送與付款方式</p>
          </div>
          <div class="rongboxborder">
            <p>填寫收件資料</p>
          </div>
          <div class="rongboxborder rongboxbg">
            <p class="rongtextcolor">確認訂單</p>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-5">
        <div class="d-flex justify-content-center">
          <div class="w875 borderbottom">
            <p>CHECK YOUR ORDER 詳細訂單</p>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="borderstyle w875">
            <div class="rongorder">詳細訂單</div>
            <table class="table  col ">
              <thead class="">
                <tr>
                  <th scope="col">商品資訊</th>
                  <th scope="col" class="text-center">
                    商品數量
                  </th>
                  <th scope="col" class="text-center">
                    商品單價
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="d-flex">
                    <div>
                      <img src="./img/pd.jpg" alt="" />
                    </div>
                    <div class="ml-5">Bumblebee Cans</div>
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">$99</td>
                </tr>
                <tr>
                  <td class="d-flex">
                    <div>
                      <img src="./img/pd.jpg" alt="" />
                    </div>
                    <div class="ml-5">Bumblebee Cans</div>
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">$99</td>
                </tr>
                <tr>
                  <td class="d-flex">
                    <div>
                      <img src="./img/pd.jpg" alt="" />
                    </div>
                    <div class="ml-5">Bumblebee Cans</div>
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">$99</td>
                </tr>
                <div></div>
              </tbody>
            </table>
            <div class="borderbottom"></div>
            <div class="container mt-3   w875 ">
              <div class="row justify-content-end rongtotal pr-5">
                <div class="mr-5 ">
                  <p>總金額</p>
                  <p class="rong">運費</p>
                  <p>購物金</p>
                </div>
                <div class="ml-5 ">
                  <p>NT.298</p>
                  <p>NT.0</p>
                  <p>NT.0</p>
                </div>
              </div>
              <div class="row justify-content-end rongtotal ml-auto mr-2 pt-3 rongmoney pr-5">
                <div class="mr-5 rongsettotal ">
                  <p>應付金額</p>
                </div>
                <div class="ml-5  rongsettotal">
                  <span>NT.298</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container pt-5">
          <div class="row justify-content-center ">
            <div class="w875">
              <form class="ml-5 rongorderdetail">
                <div class="form-group">
                  <label for="name">訂單編號 : </label>
                  <span class="red">202109210001</span>
                </div>
                <div class="form-group">
                  <label for="name">訂購日期 : </label>
                  <span>20210921</span>
                </div>
                <div class="form-group">
                  <label for="name">付款方式 : </label>
                  <span>到貨付款</span>
                </div>
                <div class="form-group">
                  <label for="name">會員帳號 : </label>
                  <span>aaa@gmail.com</span>
                </div>
                <div class="form-group">
                  <label for="name">會員姓名 : </label>
                  <span>王小名</span>
                </div>
                <div class="form-group">
                  <label for="name">會員手機 : </label>
                  <span>0911123456</span>
                </div>
                <div class="form-group">
                  <label for="name">會員地址 : </label>
                  <span>
                    台北市大安區和平東路二段106號11樓
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div class="container mt-5 pt-4">
          <div class="row justify-content-center ">
            <button class="btn">
              <span>送出</span>
            </button>
          </div>
        </div> */}
      </div>
      <div className="mb-5"></div>
    </>
  )

  return (
    <>
      <h1>學生資料</h1>
      {isLoading ? spinner : display}
    </>
  )
}

export default CheckOrder
