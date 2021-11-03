import React, { useState, useEffect } from 'react'
import './cartstyle.css'

function Transport(props) {
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
      <div className="container mt-5 pt-5 mb-5 pb-5">
        <div className="row">
          <p> HOME / 商品 / 配送與付款方式</p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between ">
          <div className="rongboxborder ">
            <p>確認購買明細</p>
          </div>
          <div className="rongboxborder rongboxbg">
            <p className="rongtextcolor"> 配送與付款方式</p>
          </div>
          <div className="rongboxborder">
            <p>填寫收件資料</p>
          </div>
          <div className="rongboxborder">
            <p>確認訂單</p>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div className="d-flex justify-content-center">
          <div className="w875 borderbottom">
            <p>SHOPPING & PAYMENT 配送與付款方式</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="rongproducttype d-flex .select">
            <p>運送區域 : </p>
            <select
              className="ml-3 p-1  form-select form-select-lg mb-3 rongbodybg"
              aria-label=".form-select-lg example"
            >
              <option selected className="">
                台灣及離島
              </option>
              <option value="1">日本</option>
              <option value="2">韓國</option>
              <option value="3">中國大陸</option>
            </select>
          </div>
          <div className="rongproducttype d-flex .select rongradiostyle">
            <input
              className="mt-2"
              type="radio"
              name="delivery"
            />
            <label for="">
              <p>
                購物金全額折抵{' '}
                <span>
                  {' '}
                  全館消費可享免運(特價商品金額不列入免運優惠計算)
                </span>
              </p>
            </label>
          </div>
          <div className="rongproducttype d-flex .select rongradiostyle">
            <input
              className="mt-2"
              type="radio"
              name="delivery"
            />
            <label for="">
              <p>
                宅配到貨付款{' '}
                <span>
                  {' '}
                  全館消費可享免運(特價商品金額不列入免運優惠計算)
                </span>
              </p>
            </label>
          </div>
          <div className="rongproducttype d-flex .select rongradiostyle">
            <input
              className="mt-2"
              type="radio"
              name="delivery"
            />
            <label for="">
              <p>
                7-11超商取貨付款{' '}
                <span>
                  {' '}
                  全館消費可享免運(特價商品金額不列入免運優惠計算)
                </span>
              </p>
            </label>
          </div>
          <div className="rongproducttype d-flex .select rongradiostyle">
            <input
              className="mt-2"
              type="radio"
              name="delivery"
            />
            <label for="">
              <p>
                信用卡線上刷卡{' '}
                <span>
                  {' '}
                  全館消費可享免運(特價商品金額不列入免運優惠計算)
                </span>
              </p>
            </label>
          </div>
        </div>
        <div className="container mt-5 pt-5">
          <div className="d-flex justify-content-center">
            <div className="w875 borderbottom">
              <p>CHECK YOUR ORDER 確認購買明細</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="rongproducttype d-flex">
              <table className="table  col ">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">商品名稱</th>
                    <th scope="col" className="text-center">
                      尺寸
                    </th>
                    <th scope="col" className="text-center">
                      數量
                    </th>
                    <th scope="col" className="text-center">
                      單價
                    </th>
                    <th scope="col" className="text-center">
                      小計
                    </th>
                    <th scope="col" className="text-center">
                      刪除
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-flex">
                      <div>
                        <img src="./img/pd.jpg" alt="" />
                      </div>
                      <div className="ml-5">
                        Bumblebee Cans
                      </div>
                    </td>
                    <td className="text-center">
                      黃 over 100cm{' '}
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-center">200</td>
                    <td className="text-center">200</td>
                    <td className="text-center">
                      <i className="fas fa-trash"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex">
                      <div>
                        <img src="./img/pd.jpg" alt="" />
                      </div>
                      <div className="ml-5">
                        <p> Bumblebee Cans</p>
                      </div>
                    </td>
                    <td className="text-center">
                      黃 over 100cm{' '}
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-center">200</td>
                    <td className="text-center">200</td>
                    <td className="text-center">
                      <i className="fas fa-trash"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex">
                      <div>
                        <img src="./img/pd.jpg" alt="" />
                      </div>
                      <div className="ml-5">
                        Bumblebee Cans
                      </div>
                    </td>
                    <td className="text-center">
                      黃 over 100cm{' '}
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-center">200</td>
                    <td className="text-center">200</td>
                    <td className="text-center">
                      <i className="fas fa-trash"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="container mt-5 pt-4 w875 ">
            <div className="row justify-content-end rongtotal">
              <div className="mr-5 ">
                <p>總金額</p>
                <p className="rong">運費</p>
                <p>購物金</p>
              </div>
              <div className="ml-5">
                <p>NT.298</p>
                <p>NT.0</p>
                <p>NT.0</p>
              </div>
            </div>
            <div className="row justify-content-end rongtotal ml-auto mr-2 pt-3 rongmoney">
              <div className="mr-5 rongsettotal ">
                <p>應付金額</p>
              </div>
              <div className="ml-5  rongsettotal">
                <span>NT.298</span>
              </div>
            </div>
          </div>

          {/* <div className="container mt-5 pt-4">
          <div className="row justify-content-center ">
            <button className="btn">
              <span>下一步</span>
            </button>
          </div>
        </div> */}
        </div>
      </div>
      <div className="mb-5"></div>
    </>
  )
  return <>{isLoading ? spinner : display}</>
}

export default Transport
