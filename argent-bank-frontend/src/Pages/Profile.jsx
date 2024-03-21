import React from "react";
import Account from "../components/Account";
import { useSelector } from "react-redux";
import ProfileHeader from "../components/ProfileHeader";
import Footer from "../components/Footer";

const Profile = () => {
  const userName = useSelector((state) => state.auth.userName);

  return (
    <div>
      <ProfileHeader />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userName}!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
