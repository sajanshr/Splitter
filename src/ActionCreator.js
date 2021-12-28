export const setBill = (billAmount) =>{
    return (dispatch) =>{
        dispatch({
            type: "SET_BILL_AMOUNT",
            payload: billAmount
        })
    }
}
export const setPeople = (numberOfPeople) =>{
    return (dispatch) =>{
        dispatch({
            type: "SET_PEOPLE_NUMBER",
            payload: numberOfPeople
        })
    }
}

export const setPercentage = (percent) =>{
    return (dispatch) =>{
        dispatch({
            type: "SET_PERCENTAGE",
            payload: percent
        })
    }
}



