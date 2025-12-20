import Axios from "axios"
import { setUsersList } from "../features/users/userSlice"


export const fetchAllUsers = () => (dispatch) => {
  Axios.get("https://randomuser.me/api/?results=12")
    .then(res => {
      dispatch(setUsersList(res.data.results))
    }).catch(err => console.error(err))
};

