import { ADD_TEXT } from '../actions/type';
import { DELETE_TEXT } from '../actions/type';
import { UPDATE_TEXT } from '../actions/type';

const initState = {
    text: '',
    textArray: []
}

const textReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_TEXT:
            return {
                ...state,
                    textArray: state.textArray.concat({
                        value: action.payload
                    })
            }
        case DELETE_TEXT:
            return {
                ...state, 
                textArray: state.textArray.filter( ( item, index) => index !== action.payload)
            }
        case UPDATE_TEXT:
            state.textArray[action.index].value = action.text;
                // alert( JSON.stringify(state.textArray.splice(0,1).value) );
                // alert(JSON.stringify(state.textArray));
                return {
                ...state,...state.textArray,
                textArray: state.textArray.concat({
                value: null
                })
            } 
        default:
            return state;
    }
}

export default textReducer;