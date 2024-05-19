import { createBrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./app/reducers/auth.reducer";

// Pages
//import Layout from "../pages/Layout/Layout";
import Home from "./pages/Home";
import Login from "./components/FormUser";
import Profile from "./pages/UserEdit";
import Error404 from "./pages/Error404";

/**
 * PrivateRoute returns the element passed in the parameter when the JWT token is provided
 * The token is accessed via Redux Store
 *
 * @param {JSX.Element} element The private element
 * @returns {JSX.Element | void} The private element or a redirection to the Login page
 */
const PrivateRoute = ({ element }) => {
  const token = useSelector(selectCurrentToken);
  return token ? element : <Navigate to="/login" replace={true} />;
};

/**
 * App Router from react-router-v6
 *
 * All routes are nested inside the Layout component
 * An Error404 page is returned when the navigation fails
 */
const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      {
        path: "profile",
        element: <PrivateRoute element={<Profile />} />,
      },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

export default App;
