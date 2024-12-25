import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./applayout";
import Repositories from "./componenets/repositories";
import { useState } from "react";
import { menuContext } from "./contexts/menu";
import { Auth, SAAS, Self } from "./componenets/auth";
import UnderConstruction from "./componenets/under";
import Sidebar from "./componenets/sidebar";

function App() {
  const [state, set] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="flex flex-col md:flex-row ">
            <Sidebar />
            <div
              className={`absolute w-full md:relative md:w-[88%] md:top-0 top-[5rem] ${
                state && "md:blur-none blur-sm"
              }`}
            >
              <Repositories />
            </div>
          </div>
        </>
      ),
    },
    {
      path: "/app",
      element: <AppLayout />,
      children: [
        {
          path: "repositories",
          element: <Repositories />,
        },
        {
          path: "code-review",
          element: <UnderConstruction />,
        },
        {
          path: "cloud-security",
          element: <UnderConstruction />,
        },
        {
          path: "how-to-use",
          element: <UnderConstruction />,
        },
        {
          path: "settings",
          element: <UnderConstruction />,
        },
        {
          path: "report",
          element: <UnderConstruction />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "saas",
          element: <SAAS />,
        },
        {
          path: "self-hosted",
          element: <Self />,
        },
      ],
    },
  ]);

  return (
    <>
      <menuContext.Provider value={{ state, set }}>
        <RouterProvider router={router}></RouterProvider>
      </menuContext.Provider>
    </>
  );
}

export default App;