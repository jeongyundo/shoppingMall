import React from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'react';
import '../../style/window.css'

export const SteadyWindow = () => {
    return (
        <Fragment>
            <div className="window__title">
                STEADY SELLER
            </div>
            <div className="window__list">
                STEADY SELLER
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SteadyWindow)
