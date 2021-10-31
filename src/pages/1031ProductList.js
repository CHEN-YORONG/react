import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import asiox from 'axios'
function ProductList(props) {
  let [data, setData] = useState({})
  let [totalRows, setTotalRows] = useState(0)
  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const updateCartToLocalStorage = (value) => {
    const currentCart =
      JSON.parse(localStorage.getItem('cart')) || []

    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))

    // 設定資料
    setMycart(newCart)
    setProductName(value.name)
    handleShow()
  }

  const messageModal = (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        產品：{productName} 已成功加入購物車
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.history.push('/order-steps')
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  useEffect(() => {
    ;(async () => {
      let r = await fetch(
        'http://localhost:3001/product/?page=1'
      )
      let j = await r.json()
      if (j.totalRows) {
        setTotalRows(j.totalRows)
        setData(j)
      }
    })()
  }, [])

  const display = (
    <>
      <div class="flex">
        <div className="card-deck ">
          {data.rows
            ? data.rows.map((el, i) => {
                return (
                  <div className="card col-4">
                    <img
                      src="https://via.placeholder.com/250x150"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {el.name}
                      </h5>
                      <p className="card-text">
                        This is a longer card with
                        supporting text below as a natural
                        lead-in to additional content. This
                        content is a little bit longer.
                      </p>
                      <p className="card-text text-danger">
                        {el.price}
                      </p>
                    </div>
                    <div className="card-footer">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          updateCartToLocalStorage({
                            id: el.sid,
                            name: el.name,
                            amount: 1,
                            price: el.price,
                          })
                        }}
                      >
                        <span>加入購物車</span>
                      </button>
                    </div>
                  </div>
                )
              })
            : ''}
        </div>
      </div>
    </>
  )

  return (
    <>
      {messageModal}
      {display}
    </>
  )
}

export default withRouter(ProductList)
