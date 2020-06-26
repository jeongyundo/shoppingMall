import React from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'react';
import '../../style/window.css'


export const BestWindow = () => {
    return (
        <Fragment>
            <div className="window__title">
                WEEKLY BEST
            </div>
            <div className="window__list">
                WEEKLY BEST
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BestWindow)
