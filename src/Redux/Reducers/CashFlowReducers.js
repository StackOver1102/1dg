import { CASHFLOW_CREATE_FAIL, CASHFLOW_CREATE_REQUEST, CASHFLOW_CREATE_SUCCESS } from "../Constants/CashFlowContants";


// CREATE CASHFLOW
export const cashCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CASHFLOW_CREATE_REQUEST:
            return { loading: true };
        case CASHFLOW_CREATE_SUCCESS:
            return { loading: false, success: true, cashFlow:  action.payload };
        case CASHFLOW_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};