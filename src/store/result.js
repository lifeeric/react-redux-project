import * as actionType from './action';

const initialState = {
    result: []
}

const reducer = (state = initialState, action) => {
    
    switch (action.type)
    {
        case actionType.RES_ADD:
            return {
                ...state,
                result: state.result.concat({id: new Date, value: action.val})
            }
        case actionType.RES_DEL:
            const newResult = state.result.filter(result => result.id !== action.id);
            return {
                ...state,
                result: newResult
            }
    }

    return state;
};

export default reducer;