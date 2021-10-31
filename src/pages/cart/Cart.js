import React, { useState, useEffect } from 'react'

function Cart() {
  // [{cat1:'a', cat2:'XXXX', cat3:'123'}]
  // const [filter, setFilter] = useState([])

  // // http://xxx.com/getdata/?color=red,white&ids=2,3,5
  // const [colorArray, setColorArray] = useState([1, 3, 5])
  // const [filterCat2, setFilterCat2] = useState([])
  // const [filterCat3, setFilterCat3] = useState([])
  // const [filterCat4, setFilterCat4] = useState([])
  // const [filterCat5, setFilterCat5] = useState([])

  // 'color='+ colorArray.join(',')

  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // 每次mycart資料有改變，1秒後關閉載入指示
  // componentDidUpdate
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 1000)

    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (
    item,
    isAdded = true
  ) => {
    console.log(item, isAdded)
    const currentCart =
      JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex(
      (v) => v.id === item.id
    )

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded
        ? currentCart[index].amount++
        : currentCart[index].amount--
    }

    localStorage.setItem(
      'cart',
      JSON.stringify(currentCart)
    )

    // 設定資料
    setMycart(currentCart)
  }

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="container mt-5 pt-5 mb-5 pb-5 ">
        <div className="row">
          <p className="ml-3">
            {' '}
            HOME / 商品 / 確認購買明細
          </p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between ">
          <div className="rongboxborder rongboxbg">
            <p className="rongtextcolor">確認購買明細</p>
          </div>
          <div className="rongboxborder">
            <p> 配送與付款方式</p>
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
                {mycartDisplay.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td className="d-flex">
                          <div>
                            <img
                              src="./img/pd.jpg"
                              alt=""
                            />
                          </div>
                          <div className="ml-5">
                            {item.name}
                          </div>
                        </td>
                        <td className="text-center">
                          黃 over 100cm{' '}
                        </td>
                        <td className="text-center">
                          {' '}
                          <button
                            onClick={() => {
                              if (item.amount === 1) return
                              updateCartToLocalStorage(
                                item,
                                false
                              )
                            }}
                          >
                            -
                          </button>
                          {item.amount}
                          <button
                            onClick={() =>
                              updateCartToLocalStorage(
                                item,
                                true
                              )
                            }
                          >
                            +
                          </button>
                        </td>
                        <td className="text-center">
                          {item.price}
                        </td>
                        <td className="text-center">
                          {item.amount * item.price}
                        </td>
                        <td className="text-center">
                          <button onClick="localStorage.removeItem(cart.id[0])">
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                        {console.log(localStorage)}
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-4">
        <div className="row justify-content-center">
          <p>小計金額 : {sum(mycartDisplay)}</p>
        </div>
      </div>
      {/* <div className="container mt-5 pt-4">
      <div className="row justify-content-center">
        <button className="btn">
          <span>繼續購物</span>
        </button>
        <button className="btn">
          <span>結帳</span>
        </button>
      </div>
    </div> */}
      <div className="mb-5"></div>
    </>
  )

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
}

export default Cart
