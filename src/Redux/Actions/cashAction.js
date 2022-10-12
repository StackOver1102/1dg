import { CASHFLOW_CREATE_FAIL, CASHFLOW_CREATE_REQUEST, CASHFLOW_CREATE_SUCCESS } from "../Constants/CashFlowContants";
import {logout} from "./userAction"
import axios from "axios";
export const createCashFlow = (order) => async (dispatch, getState) => {
    try {

      dispatch({ type: CASHFLOW_CREATE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(`https://up-view.harokuapp.com/api/cashFlow`, order, config);
  
      dispatch({ type: CASHFLOW_CREATE_SUCCESS, payload: data });
  
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
        if (message === "Not authorized, token failed") {
          dispatch(logout());
        }
      dispatch({
        type: CASHFLOW_CREATE_FAIL,
        payload: message,
      });
    }
  };