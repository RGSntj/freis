import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home/index.tsx";
import { AboutsPage } from "./pages/about/index.tsx";
import { ExerciseOne } from "./pages/exercicios/ex-01/index.tsx";
import { ExerciseTwo } from "./pages/exercicios/ex-02/index.tsx";
import { ExerciseThree } from "./pages/exercicios/ex-03/index.tsx";
import { ExerciseFour } from "./pages/exercicios/ex-04/index.tsx";
import { ExerciseFive } from "./pages/exercicios/ex-05/index.tsx";
import { ExerciseSix } from "./pages/exercicios/ex-06/index.tsx";
import { ExerciseSeven } from "./pages/exercicios/ex-07/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutsPage />,
      },
      {
        path: "/exercicio-1",
        element: <ExerciseOne />,
      },
      {
        path: "/exercicio-2",
        element: <ExerciseTwo />,
      },
      {
        path: "/exercicio-3",
        element: <ExerciseThree />,
      },
      {
        path: "/exercicio-4",
        element: <ExerciseFour />,
      },
      {
        path: "/exercicio-5",
        element: <ExerciseFive />,
      },
      {
        path: "/exercicio-6",
        element: <ExerciseSix />,
      },
      {
        path: "/exercicio-7",
        element: <ExerciseSeven />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
