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
    <Story title="Wie zijn wij?">
      <p>Zes brouw en bier vrienden vormen samen de “harde” kern van het Pax collectief. Onze namen: Stefan, Olaf, Chris, Niels, Robin en Michael. Allemaal al jaren amateur brouwer en kenners van het betere bier.</p>
      <p>2018 is het jaar waarin wij hebben besloten dat een breder publiek mag beoordelen of zij onze bieren net zo lekker vinden als wij zelf.</p>
      <p>Onze brouwerij is vernoemd naar de wijk waar het allemaal begonnen is. De wijk Pax in Hoofddorp. Dat Pax meteen verwijst naar de Romeinse godin van de vrede is natuurlijk mooi meegenomen. Want ons devies is en blijft drink in vrede, het liefste een lekker biertje.</p>
      <Link to="/">Terug naar de homepage</Link>
    </Story>
  </Layout>
)

export default SecondPage
