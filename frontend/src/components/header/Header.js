import React from 'react'
import '../../style/header.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">Simple Suya</Link>
            </div>
            <ul className="navbar__menu">
                <li><Link to="/signin">로그인</Link></li>
                <li><Link to="/signup">회원가입</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
            </ul>
            <ul className="navbar__icons">
                <li><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
            </ul>
        </nav>
    )
}

export default connect()(Header)
