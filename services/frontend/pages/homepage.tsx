import Navbar from "../components/navbar";
import HeroV2 from "../components/hero-2.0";

export default function Home({ render, setRender }: any) {
  return (
      <div>
        {/* <Navbar/> */}
        <HeroV2 render={render} setRender={setRender} />
      </div>
  )
}