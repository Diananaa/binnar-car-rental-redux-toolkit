const intialState = {
    nama: '',
    counter: 0
}

const countReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'SET_COUNTER':
            return {
                intialState,
                counter: action.value
            }
            default:
                return state;
    }
}

export default countReducer;