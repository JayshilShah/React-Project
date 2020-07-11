import { combineReducers } from 'redux'
import cakeReducer from './Cake/CakeReducer'
import iceCreamReducer from './IceCream/IceCreamReducer'
import donutReducer from './Doughnut/DoughnutReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    donut: donutReducer
})

export default rootReducer