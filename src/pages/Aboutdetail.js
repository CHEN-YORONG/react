import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
function About(props) {
  const [dataLoading, setDataLoading] = useState(false)
  const [member, setMember] = useState([])
  const { auth, setAuth } = props

  function getMemberLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const newMember = localStorage.getItem('member') || '[]'

    console.log(JSON.parse(newMember))

    setMember(JSON.parse(newMember))
  }
  useEffect(() => {
    getMemberLocalStorage()
  }, [])
  return (
    <>
      <div class="form-group">
        <label for="name">會員帳號 : </label>
        <span>{member.email}</span>
      </div>
      <div class="form-group">
        <label for="name">會員ID : </label>
        <span>{member.id}</span>
      </div>
      <div class="form-group">
        <label for="name">會員暱稱 : </label>
        <span>{member.nickname}</span>
      </div>
      <div class="form-group">
        <label for="name">會員暱稱 : </label>
        <span>{member.mobile}</span>
      </div>
    </>
  )
}

export default withRouter(About)
