import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Background from '../components/background/background'
import PaxTeam from '../images/paxteam.jpg';
import Story from '../components/story/story'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Background>
      <img className="full-width" src={PaxTeam} />
    </Background>
    <Story title="Ons bier">
      <h2 className="pax-header">EinFainer Doppelbock</h2>
      <p>Een lekkere volle dubbelbock met 7,5% alcohol. Gebrouwen naar ouderwetse „Einbecker art„ dus ook volgens het reinheidsgebot.</p>
      <p>Afdronk: Een mild hoparoma gecombineerd met tonen van gebrande caramel en een licht kruidige haast frisse afdronk</p>
      <p>Ingredienten: Munich-,Cara-Kristal-,Chocolade- en Pilsmout, Hersbrucker en Northernbrewer, gist en water</p>
    </Story>
  </Layout>
)

export default SecondPage
