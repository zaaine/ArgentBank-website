import React from "react";
import Header from "../../features/header/Header";
import Footer from "../../features/footer/Footer";
import PublicFeatures from "../../features/publicFeatures/PublicFeactures";

export default function Home() {
  return (
    <div>
      <Header />
      <PublicFeatures />
      <Footer />
    </div>
  );
}
