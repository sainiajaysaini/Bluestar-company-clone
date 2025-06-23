import React from "react";
import Navbar from "../../components/navbar/page";
import Topnav from "../../components/topnav/page";
import Banner from "../../components/banner/page";
import Cards from "../../components/cards/page";
import Footer from "../../components/footer/page";
export default function Home() {
  return (
      <>   
      <Topnav />
      <Navbar />
      <Banner />
      <Cards />
      <Footer / >
      </>
   
  );
}
