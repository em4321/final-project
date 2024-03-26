import React, { useEffect } from "react";
import { getApiData } from "./dataController/fetching";
import Interface from "./components/Interface";
import "./css/App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMessage, setMessage } from "./redux/accountSlice";
import { selectRestaurant } from "./redux/restaurantSlice";

const App = () => {
  const restaurant = useSelector(selectRestaurant);
  useEffect(() => {
    if (!restaurant) {
      getApiData();
    }
  }, []);

  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!message) return;

    toast(message);
    setTimeout(() => {}, 300);
    dispatch(setMessage(""));
  }, [message]);

  return (
    <>
      <ToastContainer />

      <Interface />
    </>
  );
};

export default App;
