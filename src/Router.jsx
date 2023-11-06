// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";
import EpisodePage from "./pages/EpisodePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            element: <HomePage />,
          },
          {
            path: "characters",
            element: <CharacterPage />,
          },
          // {
          //   path: "episodes",
          //   element: <EpisodePage />,
          // },
    ],
  },
]);

export default router;