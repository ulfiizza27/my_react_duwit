import HomeBanner from "@local/home/home-banner";
import HomeBest from "@local/home/home-best";
import HomeCollection from "@local/home/home-collection";
import HomeFollow from "@local/home/home-follow";
import HomeBottom from "@local/home/home-bottom";
import HomeLanding from "@local/home/home-landing";
import HomeProduct from "@local/home/home-product";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeLanding />
      <HomeProduct />
      <HomeCollection /> 
      <HomeBest />
      <HomeFollow />
      <HomeBottom />
    </main>
  );
}
