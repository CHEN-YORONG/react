import React, { useState, useEffect } from 'react'

function Login(props) {
  console.log(props)

  const { auth, setAuth } = props

  const [member_id, setMember_id] = useState('')
  const [product_id, setProduct_id] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleSubmit = (e) => {
    //阻擋FORM 預設送出行為
    e.preventDefault()
  }
  const formOnClick = async () => {
    //json
    const dataObj = {
      member_id: document.form1.member_id.value,
      product_id: document.form1.product_id.value,
      quantity: document.form1.quantity.value,
    }
    const r = await fetch('http://localhost:3001/cart', {
      method: 'POST',
      body: JSON.stringify(dataObj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await r.json()
    console.log(data)

    // //urlencode
    // const usp = new URLSearchParams(new FormData(document.form1));
    // // console.log(usp.toString());
    // const r = await fetch('http://localhost:3001/cart', {
    //   method: 'POST',
    //   body: usp.toString(),
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // });
    // const data = await r.json();
    // console.log(data);
    // alert('新增成功')

    // // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // // FormData 利用的是表單元素的 name
    // const formData = new FormData(document.form1)
    // console.log(formData.get('member_id'))
    // console.log(formData.get('product_id'))
    // console.log(formData.get('quantity'))

    // const r = await fetch("http://localhost:3001/cart", {
    //   method: 'POST',
    //   body: formData,
    //   contentType : 'application/x-www-form-urlencoded',

    // })
    // const j = await r.json()
    // console.log(j)
  }

  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          setAuth(!auth)
        }}
      >
        {auth ? '登出' : '登入'}
      </button>
      {/*  `member_id`, `product_id`, `quantity` */}
      <form name="form1" onSubmit={handleSubmit}>
        <label for="">member_id</label>
        <input
          type="text"
          name="member_id"
          value={member_id}
          onChange={(e) => {
            setMember_id(e.target.value)
          }}
        />
        <label for="">product_id</label>
        <input
          type="text"
          name="product_id"
          value={product_id}
          onChange={(e) => {
            setProduct_id(e.target.value)
          }}
        />
        <label for="">quantity</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value)
          }}
        />
        <button type="submit" onClick={formOnClick}>
          送出
        </button>
      </form>
    </>
  )
}

export default Login
