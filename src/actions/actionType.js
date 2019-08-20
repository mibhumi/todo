import { ADD_TEXT } from './type';
import { DELETE_TEXT } from './type';
import { UPDATE_TEXT } from './type';

export const addText = data => {
    return {
        type: ADD_TEXT,
        payload: data
    }
}

export const deleteText = data => {
    return {
        type: DELETE_TEXT,
        payload: data
    }
}

export const updateText = (index, text) => {
    return {
        type: UPDATE_TEXT,
        index: index,
        text: text
    }
}
