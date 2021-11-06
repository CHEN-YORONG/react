// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'

// 頁面用元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProductBaby from './pages/ProductBaby'
import ProductMen from './pages/ProductMen'
import ProductWomen from './pages/ProductWomen'
import NotFoundPage from './pages/NotFoundPage'
import ProductCategory from './pages/ProductCategory'
import Member from './pages/Member'
import Student from './pages/Student'
import Cart1 from './pages/cart/Cart1'
import Transport from './pages/cart/Transport'
import Receive from './pages/cart/Receive'
import ReceiveCard from './pages/cart/ReceiveCard'
import OrderList from './pages/cart/OrderList'
import CheckOrder from './pages/cart/CheckOrder'
import OrderStep from './pages/cart/OrderStep'
//測試加入購物車
import ProductList from './pages/ProductList'
import Cart from './pages/cart/Cart'
import Aboutdetail from './pages/Aboutdetail'
// 組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
//import BreadCrumb from './components/BreadCrumb'
import MultiLevelBreadcrumb from './components/MultiLevelBreadcrumb'

function App() {
  const [auth, setAuth] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    // // 問伺服器是否有會員登入
    // // 如果有登入，設定auth為true
    // setAuth(true)

    //請localstorage中的購物車數量
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    // 設定為陣列的長度(成員數量)
    setCartCount(myCart.length)
  }, [])

  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <MyNavbar auth={auth} cartCount={cartCount} />
        {/* 主內容區 */}
        <MainContent>
          <MultiLevelBreadcrumb />
          {/* 匹配路由表(路徑單一匹配) */}
          {/* 切換顯示的元件畫面放在這下面 */}
          {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
          <ScrollToTop>
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/productlist/">
                <ProductList
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                />
              </Route>
              <Route path="/order-steps">
                <OrderStep auth={auth}/>
              </Route>
              <Route path="/check-order">
                <CheckOrder />
              </Route>
              <Route path="/order-list/:id">
                <OrderList />
              </Route>
              <Route path="/receive-card">
                <ReceiveCard />
              </Route>
              <Route path="/receive">
                <Receive />
              </Route>
              <Route path="/transport">
                <Transport />
              </Route>
              <Route path="/cart1">
                <Cart1 />
              </Route>
              <Route path="/student">
                <Student />
              </Route>
              <Route path="/product/women">
                <ProductWomen />
              </Route>
              <Route path="/product/men">
                <ProductMen />
              </Route>
              {/* 這裡要定義網址參數的屬性名稱 */}
              <Route path="/product/baby/:id?">
                <ProductBaby />
              </Route>
              <Route path="/login">
                {/* 利用props傳入頁面元件狀態 */}
                <Login auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/aboutdetail">
                <Aboutdetail auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/about">
                <About auth={auth} setAuth={setAuth} />
              </Route>
              <Route exact path="/">
                <Home auth={auth} />
              </Route>
              <Route path="/productcategory">
                <ProductCategory />
              </Route>
              <Route path="/member">
                <Member auth={auth} />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
            {/* end 匹配路由表 */}
          </ScrollToTop>
        </MainContent>
        {/* 頁尾+版權訊息 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
