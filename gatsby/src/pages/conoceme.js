import React from "react";

import Layout from "../components/Layout"
import SectionTitle from "../components/SectionTitle"
import Courses from "../components/Courses"
import Interviews from "../components/Interviews"

import "./contact.css"

export default function Knowme() {

  return (
    <Layout>
      <div className="page">
        <SectionTitle title="Entrevistas" image="mic.png"/>
        <Interviews id="interviews"/>
        <SectionTitle title="Formación" image="book.png"/>
        <Courses id="courses"/>
      </div>
    </Layout>
  )
}