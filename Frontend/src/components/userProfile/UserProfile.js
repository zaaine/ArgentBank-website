import React from "react";
import Header from "../../features/header/Header";
import UserAccounts from "../userAccounts/UserAccounts";
import Footer from "../../features/footer/Footer";

function UserProfile() {
  return (
    <div>
      <Header />
      <UserAccounts />
      <Footer />
    </div>
  );
}

export default UserProfile;
