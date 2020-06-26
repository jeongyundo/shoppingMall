import React from 'react'
import { connect } from 'react-redux'
import { BestWindow } from '../window/BestWindow';
import { NewWindow } from '../window/NewWindow';
import { DiscountWindow } from '../window/DiscountWindow';
import { SteadyWindow } from '../window/SteadyWindow';
import '../../style/main.css'
import { Promotion } from '../promotion/Promotion';

const Main = () => {
    return (
        <div className="mainpage">
            <Promotion></Promotion>
            <NewWindow></NewWindow>
            <BestWindow></BestWindow>
            <DiscountWindow></DiscountWindow>
            <SteadyWindow></SteadyWindow>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
