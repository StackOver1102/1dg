import { ORDER_CREATE_FAIL, ORDER_CREATE_FAIL_TO_ME, ORDER_CREATE_REQUEST, ORDER_CREATE_REQUEST_TO_ME, ORDER_CREATE_SUCCESS, ORDER_CREATE_SUCCESS_TO_ME, ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS } from "../Constants/OrderContants";
import axios from "axios";
import { CART_CLEAR_ITEMS } from "../Constants/CartContants";
import {logout} from "./userAction"
// CREATE ORDER TO API 1DG
export const createOrder = (service, link, quantity) => async (dispatch) => {
  try {
    const params = new URLSearchParams()

    params.append('key', '6b45b91c3ab933089e7c5619ca4d4f8c')
    params.append('action', 'add')
    params.append('service', service)
    params.append('link', link)
    params.append('quantity', quantity)

    dispatch({ type: ORDER_CREATE_REQUEST });


    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const { data } = await axios.post(`https://1dg.me/api/v2`, params, config);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: {order:123} });

    localStorage.setItem("ordersInfo", JSON.stringify(data));

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    //   if (message === "Not authorized, token failed") {
    //     dispatch(logout());
    //   }
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    });
  }
};

// CREATE ORDER TO API ME
export const createOrderAPIMe = (cash) => async (dispatch, getState) => {
  try {


    dispatch({ type: ORDER_CREATE_REQUEST_TO_ME });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",

        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`https://up-view.herokuapp.com/api/orders`, cash, config);

    // console.log(data)
    dispatch({ type: ORDER_CREATE_SUCCESS_TO_ME, payload: data });
    dispatch({ type: CART_CLEAR_ITEMS, payload: data });
    // listMyOrders();
    localStorage.removeItem("cartItems")

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
    dispatch({
      type: ORDER_CREATE_FAIL_TO_ME,
      payload: message,
    });
  }
};


// USER ORDERS
export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    

    const { data } = await axios.get(`https://up-view.harokuapp.com/api/orders/getByUser`, config);
    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data });
    localStorage.setItem("listMyOrders", JSON.stringify(data));

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: message,
    });
  }
};
