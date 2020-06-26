import React from 'react'
import { connect } from 'react-redux'
import ItemView from '../item/ItemView'
import "../../style/item.css"

export const ItemList = () => {
    return (
        <div className="item__list">
            <ul className="item__settings">
                <li>최신등록순</li>
                <li>평점높은순</li>
                <li>인기도순</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
