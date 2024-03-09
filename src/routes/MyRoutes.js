import React from "react";
import { BrowserRouter, Routes, Route, Navigate,Outlet } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import ViewSection from "../pages/ViewSection";
import UserDataPage from "../pages/UserDataPage";
import CreatePlayListPage from "../pages/CreatePlayListPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";

import SearchPage from "../pages/SearchPage";

const MyRoutes = () => {
  let token = localStorage.getItem('token');



  // This function is used for Authentication when user's credentials will be invalid.
function PrivateRoute({ isAuthenticated }) {
  if (!isAuthenticated) return <Navigate to="/" />;
  return <Outlet />;
}

function PublicRoute({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }
  return <Outlet />;
}


return (
    //    <BrowserRouter>
    //    <Routes>
    //       <Route path="/" element={<LoginPage/>} />
    //       <Route path="/signup" element={<SignUpPage/>} />

    //       <Route path="/home" element={<BasicLayout/>} >
    //         <Route index element={<ViewSection />} />
    //         <Route path="user" element={<UserDataPage />} />
    //         <Route path="create/playlist" element={<CreatePlayListPage />} />
    //         <Route path="login" element={<LoginPage />} />
    //         <Route path='search' element={<SearchPage/>} />

    //       </Route>
    //    </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isAuthenticated={token} />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        <Route element={<PrivateRoute isAuthenticated={token} />}>
          <Route path="/home" element={<BasicLayout />}>
            <Route index element={<ViewSection />} />
            <Route path="user" element={<UserDataPage />} />
            <Route path="create/playlist" element={<CreatePlayListPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
