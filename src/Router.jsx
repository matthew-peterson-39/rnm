// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterListPage";
import EpisodePage from "./pages/EpisodePage";
import Error404 from "./pages/Error404";
import CharacterProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
        {
            index: true,
            element: <HomePage />,
          },
          {
            path: "characters/",
            element: <CharacterPage />,
          },
          {
            path: "characters/profile/:id/",
            element: <CharacterProfilePage />,
          },
          {
            path: "episodes/",
            element: <EpisodePage />,
          },
    ],
  },
]);

export default router;