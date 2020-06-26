import React, { Fragment } from 'react'
import { connect } from 'react-redux'

export const MyPage = () => {
    return (
        <div>
            My Page
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)
