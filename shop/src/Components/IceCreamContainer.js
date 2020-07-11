import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../Redux'
import './shop.css'

function IceCreamContainer(props){
    return(
        <div>
            <img src='https://www.deccanherald.com/sites/dh/files/article_images/2018/07/14/ice-cream1531584787.jpg' className='IceCreamStyle'></img>
            <h2>Number of IceCreams - { props.numOfIceCreams }</h2>
            <button className='buttonStyle' onClick = {props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateToProp = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(IceCreamContainer)