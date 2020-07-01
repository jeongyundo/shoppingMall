import React, { Fragment } from 'react'
import { connect } from 'react-redux'

export const Cart = () => {
    return (
        <table className="cart__table">
            <thead className="cart__tablehead">
                <tr className="cart__tablerow">
                    <th className="cart__tablerow__item">
                        상품정보(사진, 이름, 사이즈)
                    </th>
                    <th>
                        상품금액
                    </th>
                    <th>
                        상품수량
                    </th>
                    <th>
                        주문금액
                    </th>
                    <th>
                        결제하기
                    </th>
                </tr>
            </thead>
            <tbody className="cart__tablehead">
                <tr className="cart__tablerow">
                    <td className="cart__tablerow__item">
                        <div  className="cart__tablerow__itemimg">
                            사진
                        </div>
                        <div className="cart__tablerow__itemdetail">
                            <div>
                                상품명
                            </div>
                            <div>
                                옵션
                            </div>
                        </div>
                    </td>
                    <td>
                        상품금액
                    </td>
                    <td>
                        상품수량
                    </td>
                    <td>
                        주문금액
                    </td>
                    <td>
                        결제하기
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
