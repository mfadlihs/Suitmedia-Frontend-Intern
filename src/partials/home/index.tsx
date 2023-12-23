import axios from "axios";
import { useEffect } from "react";
import HomeBanner from "./Banner";
import HomeContent from "./content";
import HomePagination from "./Pagination";
import Header from "@/components/Header";
import { BaseResponse, SuccessResponse } from "@/types/Response";
import { IdeaResponse } from "@/types/response/IdeaResponse";
import { useAppContext } from "@/context/AppContext";

const HomePage = ({ data }: { data?: BaseResponse<IdeaResponse> }) => {
  const [state, setState] = useAppContext();

  useEffect(() => {
    if (data != null) setState(data);
  }, [data]);

  useEffect(() => {}, []);

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
