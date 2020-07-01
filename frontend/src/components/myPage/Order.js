import React, { Fragment } from 'react'
import { connect } from 'react-redux'

export const Order = () => {
    return (
        <table className="order__table">
            <thead className="order__tablehead">
                <tr className="order__tablerow">
                    <th>
                        입금/결제
                    </th>
                    <th>
                    배송중
                    </th>
                    <th>
                    배송완료
                    </th>
                    <th>
                    구매확정
                    </th>
                    <th>
                        교환
                    </th>
                    <th>
                        교환완료
                    </th>
                    <th>
                        환불
                    </th>
                    <th>
                        환불완료
                    </th>
                </tr>
                <tr className="order__tablerow">
                    <th className="order__tablerow__item">
                        상품정보(사진, 이름, 사이즈)
                    </th>
                    <th>
                        상품금액(수량)
                    </th>
                    <th>
                        주문번호
                    </th>
                    <th>
                        주문일자
                    </th>
                    <th>
                        주문상태
                    </th>
                </tr>
            </thead>
            <tbody>
            <tr className="order__tablerow">
                    <td className="order__tablerow__item">
                        <div  className="order__tablerow__itemimg">
                            사진
                        </div>
                        <div className="order__tablerow__itemdetail">
                            <div>
                                상품명
                            </div>
                            <div>
                                옵션
                            </div>
                        </div>
                        
                    </td>
                    <td>
                        <div className="order__tablerow__itemdetail">
                            <div>
                                상품금액
                            </div>
                            <div>
                                수량
                            </div>
                        </div>
                    </td>
                    <td>
                        주문번호
                    </td>
                    <td>
                        주문일자
                    </td>
                    <td>
                        주문상태
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

export default connect(mapStateToProps, mapDispatchToProps)(Order)
