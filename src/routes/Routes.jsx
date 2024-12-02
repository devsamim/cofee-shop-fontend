import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Addcofee from "../pages/Addcofee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "addCofee",
    element: <Addcofee></Addcofee>,
  },
]);

export default router;
