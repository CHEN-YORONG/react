import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './navstyle.css'
// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  const { auth, cartCount } = props

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="primary"
        variant="dark"
        fixed="top"
        style={{ background: 'black' }}
        className="mb-5"
      >
        <Navbar.Brand href="/">
          <div className="ronglogo">
            <img src="/img/LOGO.jpg" alt="" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto mt-3">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link as={NavLink} to="/about">
              <p>
                <i class="fas fa-search"></i>
              </p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              <p>首頁</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              <p>設計師</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productlist">
              <p>作品集</p>
            </Nav.Link>
            {auth && (
              <Nav.Link as={NavLink} to="/member">
                <p>聯繫我們</p>
              </Nav.Link>
            )}
            <Nav.Link as={NavLink} to="/productcategory">
              <p>合作邀約</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/student">
              <p>設計新知</p>
            </Nav.Link>
            <NavDropdown
              title="購物車"
              id="collasible-nav-dropdown"
              style={{
                color: 'black',
                // fontSize: '1.6rem' ,
              }}
            >
              <NavDropdown.Item as={NavLink} to="/cart">
                購物車
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/transport"
              >
                配送
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/receive">
                收件
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/receive-card"
              >
                收件-信用卡
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/check-order"
              >
                確認訂單
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/order-list"
              >
                查詢訂單
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mt-3 mr-3">
            <Nav.Link
              as={NavLink}
              to="/aboutdetail"
              eventKey={2}
              href="#memes"
            >
              <p>
                <i class="far fa-user"></i>
              </p>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/order-steps"
              eventKey={2}
              href="#memes"
            >
              <p>
                <i class="fas fa-shopping-cart"></i>{' '}
                <span className="badge badge-light">
                  {cartCount}
                </span>
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
