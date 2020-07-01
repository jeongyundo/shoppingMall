import React, { Fragment } from 'react'
import { connect } from 'react-redux'

export const QnA = () => {
    return (
        <table className="qna__table">
            <thead className="qna__tablehead">    
                <tr className="qna__tablerow">
                    <th>
                        문의유형
                    </th>
                    <th>
                        주문번호
                    </th>
                    <th>
                        작성자
                    </th>
                    <th className="qna__tablerow__title">
                        제목
                    </th>
                    <th className="qna__tablerow__content">
                        내용
                    </th>
                </tr>
            </thead>
            <tbody className="qna__tablehead">    
                <tr className="qna__tablerow">
                    <td>
                        문의유형
                    </td>
                    <td>
                        주문번호
                    </td>
                    <td>
                        작성자
                    </td>
                    <td  className="qna__tablerow__title">
                        제목
                    </td>
                    <td className="qna__tablerow__content">
                        내용
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

export default connect(mapStateToProps, mapDispatchToProps)(QnA)
