import { createRoot } from "react-dom/client";
import LandingPage from "./pages/LandingPage.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import PhotoUploaderPage from "./pages/PhotoUploadPage.jsx";
import Profile from "./components/Profile.jsx";
import HomePage from "./pages/HomePage.jsx";
import FeedPage from "./components/FeedPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import NotFound from "./components/NotFound.jsx";
import UnprotectedAuth from "./components/UnprotectedAuth.jsx";
import store from "./store/store.js";
import PhotoSubmissionDialog from "./components/PhotoSubmissionDialog.jsx";
import Test from "./components/UploadingLoader.jsx";
import ImageOverlay from "./components/ImageOverlay.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UnprotectedAuth>
        <LandingPage />
      </UnprotectedAuth>
    ),
  }
  ,
  {
    element: (
      <AuthLayout>
        <HomePage />
      </AuthLayout>
    ),
    children: [
      {
        path: "/home",
        element: <FeedPage />,
      },
      {
        path: "/photoUploader",
        element: <PhotoUploaderPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <UnprotectedAuth>
        <Login />
      </UnprotectedAuth>
    ),
  },
  {
    path: "/signup",
    element: (
      <UnprotectedAuth>
        <SignUp />
      </UnprotectedAuth>
    ),
  },
  {
    path: "/logout",
    element: (
      <AuthLayout>
        <LogoutPage />
      </AuthLayout>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "123",
    element: <ImageOverlay/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
