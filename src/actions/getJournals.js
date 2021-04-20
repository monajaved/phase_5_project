export const getJournals = () => {
    return dispatch => {
        dispatch({ type: "LOADING" })
        fetch("http://localhost:3001/journals")
        .then(resp => resp.json())
        .then(journals => dispatch({type: "SET_JOURNALS", journals}))

    }
}

export const addJournal = (journal, history) => {
    return dispatch => {
        fetch('http://localhost:3001/journals', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({journal})
        })
        .then(resp => resp.json())
        .then(journal => {
            dispatch({type: "ADD_JOURNAL", journal })
            history.push("/journals")
        })


    }
}