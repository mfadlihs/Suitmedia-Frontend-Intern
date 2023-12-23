import axios from "axios";
import { useEffect } from "react";
import HomeBanner from "./banner";
import HomeContent from "./content";
import HomePagination from "./pagination";
import Header from "@/components/Header";
import { getIdea } from "@/types/response/Ideas";
import { BaseResponse, SuccessResponse } from "@/types/Response";
import { IdeaResponse } from "@/types/response/IdeaResponse";

const HomePage = () => {
  const cobaGet = async () => {
    // const res = await axios.get<BaseResponse<IdeaResponse>>(getIdea({}));
  };

  useEffect(() => {
    cobaGet();
  }, []);

  return (
    <div className="min-h-[200vh]">
      <Header />
      <HomeBanner />
      <HomeContent />
      <HomePagination />
    </div>
  );
};

export default HomePage;
