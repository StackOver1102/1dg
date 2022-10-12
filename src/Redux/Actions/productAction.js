import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductContants";
import axios from "axios"


// PRODUCT LIST
export const listProduct = () => async (dispatch) => {
    try {
        const params = new URLSearchParams()
        params.append('key','4310d47b30767251ef40fe92181b4bef')
        params.append('action','services')
        // const key  ="4310d47b30767251ef40fe92181b4bef";
        // const action ="services"
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const { data } = await axios.post("https://1dg.me/api/v2",params,config);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};