import React from "react"
import { Helmet } from "react-helmet"

const Head = () => (
  <Helmet>
    {/* Fuentes */}
    <link href="https://fonts.googleapis.com/css2?family=Satisfy:wght@400&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet" />

    {/* Meta tags */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#E6F1FC" />
    <meta name="description" content="Soy Enrique, ingeniero electrónico enamorado del diseño de hardware que mejora la sociedad. Entra si quieres saber más sobre mí." />
    <meta name="keywords" content="Enrique Gomez, ingeniería, ingeniero, portfolio, personal" />
    <meta name="author" content="Enrique Gómez" />

    {/* Open Graph */}
    <meta property="og:title" content="Enrique Gómez" />
    <meta property="og:site_name" content="Enrique Gómez" />
    <meta property="og:description" content="Soy Enrique, ingeniero electrónico enamorado del diseño de hardware que mejora la sociedad. Entra si quieres saber más sobre mí." />
    <meta property="og:image" content="https://enriquegomez.me/images/enrique-profile.jpg" />
    <meta property="og:url" content="https://enriquegomez.me" />
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta name="twitter:title" content="Enrique Gómez" />
    <meta name="twitter:description" content="Soy Enrique, ingeniero electrónico enamorado del diseño de hardware que mejora la sociedad. Entra si quieres saber más sobre mí." />
    <meta name="twitter:image" content="https://enriquegomez.me/images/enrique-profile.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
)

export default Head
