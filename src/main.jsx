import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HeroSection from "./Compo/HeroSection/HeroSection.jsx";
import Layout from "./Compo/Layout.jsx";
import About from "./Compo/About/About.jsx";
import Product from "../src/Compo/Product.jsx";
import Features from "../src/Compo/Features.jsx";
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//       {
//         path: '',
//         element: <HeroSection/>
//       },
//       {
//        path:"about",
//        element: <About/>
//       },
//       {
//         path:"product",
//         element: <Product/>
//       },
//       {
//        path:"features",
//        element:<Features/>
//       }
//     ]
//   },

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HeroSection />} />
      <Route path="product" element={<Product />} />
      <Route path="features" element={<Features />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
