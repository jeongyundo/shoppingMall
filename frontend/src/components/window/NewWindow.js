import React from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'react';
import '../../style/window.css'


export const NewWindow = () => {
    return (
        <Fragment>
            <div className="window__title">
                NEW ARRIVAL
            </div>
            <div className="window__list">
                NEW ARRIVAL
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWindow)
