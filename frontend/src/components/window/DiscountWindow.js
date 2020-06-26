import React from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'react';
import '../../style/window.css'


export const DiscountWindow = () => {
    return (
        <Fragment>
            <div className="window__title">
                ON DISCOUNT
            </div>
            <div className="window__list">
                ON DISCOUNT
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscountWindow)
