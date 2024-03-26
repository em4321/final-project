import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import RestaurantDetails from "./RestaurantDetails";
import Index from "./account/Index";

const Interface = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/account" element={<Index />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Interface;
