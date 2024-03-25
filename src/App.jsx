import React, { useEffect } from "react";
import { getApiData } from "./dataController/fetching";
import Interface from "./components/Interface";
import "./css/App.css";
import Index from "./components/account";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { selecMessage, setMessage } from "./redux/accountSlice";

const App = () => {
  useEffect(() => {
    getApiData();
  }, []);

  const message = useSelector(selecMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!message) return;

    toast(message);
    setTimeout(() => {}, 300);
    dispatch(setMessage(""));
  }, [message]);

  return (
    <>
      <Index />
      <ToastContainer />
      <Interface />
    </>
  );
};

export default App;
