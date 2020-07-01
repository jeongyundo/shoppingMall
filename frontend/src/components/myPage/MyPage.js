import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Cart } from './Cart';
import { Order } from './Order';
import '../../style/mypage.css'
import { QnA } from './QnA';
import { Link } from 'react-router-dom'

export const MyPage = (props) => {

    const [cart, setcart] = useState(true);
    const [qna, setqna] = useState(true);
    const [order, setorder] = useState(true);
    
    useEffect(() => {
        console.log(props)
        if(props.history.location.pathname==="/mypage/cart"){
            setcart(true);
            setqna(false);
            setorder(false);
        }else if(props.history.location.pathname==="/mypage/qna"){
            setcart(false);
            setqna(true);
            setorder(false);
        }else if(props.history.location.pathname==="/mypage/order"){
            setcart(false);
            setqna(false);
            setorder(true);
        }else {
            setcart(true);
            setqna(true);
            setorder(true);
        }
    }, [props.history.location])

    return (
        <Fragment>
            <div className="mypage__list">
                <div className="mypage__title">
                    id
                </div>
                <div className="mypage__title">
                    email
                </div>
                <div className="mypage__title">
                    <Link to="/mypage/cart">Cart</Link>
                </div>
                <div className="mypage__title">
                    <Link to="/mypage/order">OrderList</Link>
                </div>
                <div className="mypage__title">
                    <Link to="/mypage/qna">Q&A</Link>
                </div>
                
            </div>
            {cart&&<Cart></Cart>}
            {order&&<Order></Order>}
            {qna&&<QnA></QnA>}
        </Fragment>
        
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)
