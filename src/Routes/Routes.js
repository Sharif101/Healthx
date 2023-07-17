import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../Components/Banner/Banner";
import About from "../Components/About/About";
import Fasilites from "../Components/Fasilites/Fasilites";
import FindDoctor from "../Components/FindDoctor/FindDoctor";
import Contact from "../Components/Contact/Contact";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/aboutus",
        element: <About></About>,
      },
      {
        path: "/fasilities",
        element: <Fasilites></Fasilites>,
      },
      {
        path: "/findDoctor",
        element: <FindDoctor></FindDoctor>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
