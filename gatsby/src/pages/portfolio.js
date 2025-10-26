import React from "react";

import Layout from "../components/Layout"
import SectionTitle from "../components/SectionTitle"
import Hardware from "../components/Hardware"
import Software from "../components/Software"
import Others from "../components/Others"

const Portfolio = () => {

  return (
    <Layout>
      <div className="page">
        <SectionTitle title="Hardware" image="/soldering.png"/>
        <Hardware type="hardware" id="hardware"/>
        <SectionTitle title="Software" image="/software.png"/>
        <Software type="software" id="software"/>
        <SectionTitle title="Otros" image="/hand.png"/>
        <Others type="contenido" id="others"/>
      </div>
    </Layout>
  )
}

export default Portfolio

export const Head = () => <title>Enrique Gómez</title>