import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import "../../style/footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logos">
                심플수야
            </div>
            <ul className="footer__details">
                <div>DETAILS </div>
                <li>company. 다니(Dani)</li>
                <li>owener. 정수창</li>
                <li>email. dani2121@naver.com</li>
                <li>business no. 7030100275</li>
            </ul>
            <ul className="footer__icons">
                <div>MENU</div>
                <li><Link to="/signup">회원가입</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
                <li><Link to="/signin">장바구니</Link></li>

            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
