import { createHashRouter } from "react-router-dom";
import { Introduccion } from "../pages/Introduccion.tsx";

export const router = createHashRouter([
  {
    path: "/",
    element: <Introduccion />,
  },
]);
