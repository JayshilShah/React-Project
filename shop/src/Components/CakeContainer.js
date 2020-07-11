import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../Redux'
import './shop.css'

function CakeContainer(props){
    return(
        <div>
            <img src='https://hdfreewallpaper.net/wp-content/uploads/2016/02/Happy-Birthday-Chocolate-Cake-Images.jpg' className='CakeStyle'></img>
            <h2>Number of Cakes - { props.numOfCakes }</h2>
            <button className='buttonStyle' onClick = {props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProp = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(CakeContainer)