import { BUY_DOUGHNUT } from './DoughnutType'

const initialSate = {
    numOfDonuts: 10
}

const donutReducer = (state = initialSate, action) => {
    if(state.numOfDonuts == 0){
        return{
            ...state,
            numOfDonuts: 10
        }
    }
    switch(action.type){
        case BUY_DOUGHNUT: 
            return {
                ...state,
                numOfDonuts: state.numOfDonuts - 1
            }       
        
        default: return state
    }    
}

export default donutReducer