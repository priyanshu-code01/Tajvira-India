import { Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import TourDetails from "./pages/TourDetails";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tours/:slug" element={<TourDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
