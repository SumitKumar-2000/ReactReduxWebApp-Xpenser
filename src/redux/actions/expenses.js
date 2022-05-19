import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses"

export const addExpense = (data) => {
    console.log(data);
    return {
        type : ADD_EXPENSE,
        payload : data
    }
} 

export const deleteExpense = (data) => {
    console.log(data);
    return {
        type : DELETE_EXPENSE,
        payload : data
    }
}

export  const searchExpense = (query) => {
    return {
        type: SEARCH_EXPENSE,
        payload: query
    }
}