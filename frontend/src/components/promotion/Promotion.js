import React, {Fragment} from 'react'
import { connect } from 'react-redux'

export const Promotion = () => {
    return (
        <Fragment>
            <div className="promotion__title">
                PROMOTION
            </div>
            <div className="promotion__list">
                PROMOTION
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Promotion)
