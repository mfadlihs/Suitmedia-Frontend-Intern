import Loading from "@/components/Loading";
import axios from "axios";
import { useEffect } from "react";
import HomeBanner from "./banner";
import HomeContent from "./content";
import HomePagination from "./pagination";
import Header from "@/components/Header";

const HomePage = () => {
  useEffect(() => {
    axios
      .get(
        "api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at"
      )
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <Header />
      <HomeBanner />
      <HomeContent />
      <HomePagination />
    </div>
  );
};

export default HomePage;
