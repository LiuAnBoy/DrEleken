import React from "react";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Intro from "../components/intro";
import AboutUs from "../components/aboutus";
import "../styles/index.scss";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Intro />
    </Layout>
  );
}
