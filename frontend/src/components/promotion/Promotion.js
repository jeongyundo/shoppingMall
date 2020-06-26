import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import img1 from "../../data/imgs/20200606_173141.jpg"
import img2 from "../../data/imgs/20200606_174644.jpg"
import img3 from "../../data/imgs/20200606_174919.jpg"
import img4 from "../../data/imgs/20200606_181712.jpg"
import img5 from "../../data/imgs/20200606_182352.jpg"
import img6 from "../../data/imgs/20200606_183046.jpg"
import img7 from "../../data/imgs/20200607_172248.jpg"
import img8 from "../../data/imgs/20200607_171114.jpg"

export const Promotion = () => {
    return (
        <Fragment>
            <div className="window__title">
                PROMOTION
            </div>
            <div className="promotion__list">
                <div className="promotion__items">
                    <div className="promotion__item"><img src = {img1}></img></div>
                    <div className="promotion__item"><img src = {img2}></img></div>
                    <div className="promotion__item"><img src = {img3}></img></div>
                    <div className="promotion__item"><img src = {img4}></img></div>
                    <div className="promotion__item"><img src = {img5}></img></div>
                    <div className="promotion__item"><img src = {img6}></img></div>
                    <div className="promotion__item"><img src = {img7}></img></div>
                    <div className="promotion__item"><img src = {img8}></img></div>
                    <div className="promotion__item"><img src = {img1}></img></div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Promotion)
