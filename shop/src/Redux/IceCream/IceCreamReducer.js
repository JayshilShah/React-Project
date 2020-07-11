import { BUY_ICECREAM } from './IceCreamType'

const initialSate = {
    numOfIceCreams: 10
}

const iceCreamReducer = (state = initialSate, action) => {
    if(state.numOfIceCreams == 0){
        return{
            ...state,
            numOfIceCreams: 10
        }
    }
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

export default iceCreamReducer