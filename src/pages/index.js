import React from "react";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Intro from "../components/intro";
import AboutUs from "../components/aboutus";
import ChildFace from "../components/childface";
import Pentalogy from "../components/pentalogy";
import IntroDoc from "../components/introDoc";
import QA from "../components/QA";
import Service from "../components/service"
import Assessment from "../components/assessment"
import "../styles/index.css";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Intro />
      <AboutUs />
      <ChildFace />
      <Pentalogy />
      <IntroDoc />
      <QA />
      <Service />
      <Assessment />
    </Layout>
  );
}
