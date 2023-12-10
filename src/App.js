import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/home/pages/Home";
import Details from "./modules/details/pages/Details";
import NotFound from "./components/NotFound";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/details/:movieId" element={<Details />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
