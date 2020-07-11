import { BUY_CAKE } from './CakeType'

const initialSate = {
    numOfCakes: 10
}

const cakeReducer = (state = initialSate, action) => {
    if(state.numOfCakes == 0){
        return{
            ...state,
            numOfCakes: 10
        }
    }
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer