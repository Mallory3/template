import Featured from "../components/templates/Featured"
import Footer from "../components/templates/Footer"
import Gallery from "../components/templates/Gallery"
import Hero from "../components/templates/Hero"
import Info from "../components/templates/Info"
import ParallaxBanner from "../components/templates/ParallaxBanner"
import PromoBanner from "../components/templates/PromoBanner"
import Services from "../components/templates/Services"
import Team from "../components/templates/Team"


export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <Team />
      <Services />
      <PromoBanner />
      <ParallaxBanner />
      <Gallery />
      <Featured />
      <Footer />
    </main>
  )
}