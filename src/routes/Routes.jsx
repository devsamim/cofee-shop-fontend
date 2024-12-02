import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Addcofee from "../pages/Addcofee";
import UpdateCofee from "../pages/UpdateCofee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "addCofee",
    element: <Addcofee></Addcofee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCofee></UpdateCofee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
]);

export default router;
