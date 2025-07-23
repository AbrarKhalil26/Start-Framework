import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/about";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { Layout } from "./layout/Layout";

function App() {
  const [modalImage, setModalImage] = useState(null);
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio",
          element: <Portfolio setModalImage={setModalImage} />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <Modal modalImage={modalImage} setModalImage={setModalImage} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
