import React from 'react'
import { connect } from 'react-redux'
import { buyDoughnut } from '../Redux'
import './shop.css'

function DoughnutContainer(props){
    return(
        <div>
            <img src='https://prettysimplesweet.com/wp-content/uploads/2019/07/Chocolate-Donuts.jpg' className='DonutStyle'></img>
            <h2>Number of Doughnuts - {props.numOfDonuts}</h2>
            <button className='buttonStyle' onClick = {props.buyDoughnut}>Buy Cake</button>
        </div>
    )
}

const mapStateToProp = state => {
    return {
        numOfDonuts: state.donut.numOfDonuts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyDoughnut: () => dispatch(buyDoughnut())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(DoughnutContainer)